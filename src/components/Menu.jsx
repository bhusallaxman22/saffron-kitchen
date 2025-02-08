import React, { useState } from "react";
import menuData from "../data/menuItems";

export default function Menu() {
  // Extract top-level category names from the JSON
  const categories = menuData.menu.map((cat) => cat.category);
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalImg, setModalImg] = useState(null);

  // Flatten all items (from categories and subcategories) for search purposes
  const flattenItems = () => {
    let allItems = [];
    menuData.menu.forEach((category) => {
      if (category.subcategories) {
        category.subcategories.forEach((subcat) => {
          subcat.items.forEach((item) => {
            allItems.push({
              ...item,
              category: category.category,
              subcategory: subcat.name,
            });
          });
        });
      } else if (category.items) {
        category.items.forEach((item) => {
          allItems.push({ ...item, category: category.category });
        });
      }
    });
    return allItems;
  };

  const allItems = flattenItems();

  // Filter items based on search query (if any)
  const filteredItems = searchQuery.trim()
    ? allItems.filter((item) => {
      const q = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(q) ||
        (item.description &&
          item.description.toLowerCase().includes(q))
      );
    })
    : null;

  // A polished card-style component for a menu item.
  // If item.img exists, we render a camera icon that opens a modal on click.
  const ItemCard = ({ item, setModalImg }) => (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow mb-6">
      <div className="flex items-center">
        <h3 className="text-xl font-serif font-semibold text-white flex-1">
          {item.name.toUpperCase()}
        </h3>
        {item.img && (
          <button
            onClick={() => setModalImg(item.img)}
            title="View Image"
            className="ml-2 text-blue-400 hover:text-blue-600 focus:outline-none"
          >
            {/* Camera Icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 7h4l2-3h6l2 3h4v13H3V7z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 11a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
          </button>
        )}
        <div className="flex-1 mx-4">
          <hr className="border-t border-dotted border-gray-600" />
        </div>
        <span className="text-lg text-blue-400">
          ${item.price.toFixed(2)}
        </span>
      </div>
      {item.special && (
        <p className="text-sm italic text-yellow-300 mt-1">
          {item.special.join(", ")}
        </p>
      )}
      {item.description && (
        <p className="mt-2 text-gray-300 text-sm">{item.description}</p>
      )}
      {item.protein_options && (
        <p className="mt-1 text-gray-400 text-xs">
          Options:{" "}
          {item.protein_options
            .map(
              (opt) =>
                `${opt.name}${opt.price ? ` (+$${opt.price})` : ""
                }`
            )
            .join(" | ")}
        </p>
      )}
      {item.type_options && (
        <p className="mt-1 text-gray-400 text-xs">
          Options:{" "}
          {item.type_options
            .map(
              (opt) =>
                `${opt.name}${opt.price ? ` (+$${opt.price})` : ""
                }`
            )
            .join(" | ")}
        </p>
      )}
      {item.options && item.options.fillings && (
        <div className="mt-1 text-gray-400 text-xs">
          <span className="block">
            Fillings:{" "}
            {item.options.fillings
              .map(
                (opt) =>
                  `${opt.name}${opt.price ? ` (+$${opt.price})` : ""
                  }`
              )
              .join(" | ")}
          </span>
          <span className="block">
            Methods:{" "}
            {item.options.cooking_methods
              .map(
                (opt) =>
                  `${opt.name}${opt.price ? ` (+$${opt.price})` : ""
                  }`
              )
              .join(" | ")}
          </span>
        </div>
      )}
    </div>
  );

  // Render search results as a list of item cards
  const renderSearchResults = () => {
    if (filteredItems.length === 0) {
      return (
        <p className="text-center text-gray-400">
          No items found for "{searchQuery}".
        </p>
      );
    }
    return (
      <div className="space-y-6">
        {filteredItems.map((item, index) => (
          <ItemCard key={index} item={item} setModalImg={setModalImg} />
        ))}
      </div>
    );
  };

  // Render the active category's items. If subcategories exist, display them with a heading.
  const renderActiveCategory = () => {
    const activeCat = menuData.menu.find(
      (cat) => cat.category === activeCategory
    );
    if (!activeCat)
      return (
        <p className="text-center text-gray-400">
          No items available.
        </p>
      );

    if (activeCat.subcategories) {
      return activeCat.subcategories.map((subcat, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">
            {subcat.name.toUpperCase()}
          </h2>
          <div>
            {subcat.items.map((item, idx) => (
              <ItemCard key={idx} item={item} setModalImg={setModalImg} />
            ))}
          </div>
        </div>
      ));
    } else if (activeCat.items) {
      return (
        <div>
          {activeCat.items.map((item, index) => (
            <ItemCard key={index} item={item} setModalImg={setModalImg} />
          ))}
        </div>
      );
    }
  };

  return (
    <section className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="font-extrabold text-5xl text-saffron mb-4 mt-20">
            Our Menu
          </h1>
          <input
            type="text"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md mx-auto px-4 py-2 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </header>

        {/* Category Navigation with a scroll indicator */}
        {searchQuery.trim() === "" && (
          <nav className="relative mb-10 flex gap-4 overflow-x-auto px-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full border border-blue-500 transition-colors ${activeCategory === cat
                    ? "bg-blue-500 text-white"
                    : "bg-transparent text-blue-200 hover:bg-blue-500 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
            {/* Gradient overlay to signal scrollability on mobile */}
            <div className="absolute right-0 top-0 h-full w-12 pointer-events-none bg-gradient-to-l from-transparent to-gray-900" />
          </nav>
        )}

        {/* Main Content */}
        <main>
          {searchQuery.trim()
            ? renderSearchResults()
            : renderActiveCategory()}
        </main>
      </div>

      {/* Modal to display item image */}
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={(e) => {
            // Only close if the backdrop itself is clicked.
            if (e.target === e.currentTarget) setModalImg(null);
          }}
        >
          <div className="relative">
            <img
              src={modalImg}
              alt="Menu Item"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded-full focus:outline-none hover:bg-gray-600"
              title="Close"
            >
              {/* Close Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
