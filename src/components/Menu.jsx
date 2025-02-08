import React, { useState } from "react";
import { menuItems } from "../data/menuItems";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Appetizer");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = Object.keys(menuItems);

  // Recursively flatten items (including subcategories)
  const flattenItems = (data, category, subcategory = null) => {
    let items = [];
    if (Array.isArray(data)) {
      return data.map((item) => ({ ...item, category, subcategory }));
    } else if (typeof data === "object") {
      Object.entries(data).forEach(([key, value]) => {
        items = items.concat(flattenItems(value, category, key));
      });
    }
    return items;
  };

  // Get all items across every category
  const getAllItems = () => {
    let allItems = [];
    categories.forEach((category) => {
      allItems = allItems.concat(flattenItems(menuItems[category], category));
    });
    return allItems;
  };

  const allItems = getAllItems();

  // Filter items based on search query (if present)
  const filteredItems = searchQuery.trim()
    ? allItems.filter((item) => {
        const q = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(q) ||
          (item.description && item.description.toLowerCase().includes(q))
        );
      })
    : null;

  // Render items: if searching, show filtered items; otherwise show active category items
  const renderItems = () => {
    if (filteredItems) {
      if (filteredItems.length === 0) {
        return (
          <p className="text-center text-gray-400">
            No items found for "{searchQuery}".
          </p>
        );
      }
      return filteredItems.map((item, index) => (
        <div
          key={index}
          className="p-4 border-b border-gray-600 hover:bg-gray-800 transition-colors"
        >
          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-bold">{item.name.toUpperCase()}</h3>
            <span className="text-lg text-blue-400">{item.price}</span>
          </div>
          {item.description && (
            <p className="mt-2 text-sm text-gray-300">{item.description}</p>
          )}
        </div>
      ));
    } else {
      const items = flattenItems(menuItems[activeCategory], activeCategory);
      return items.map((item, index) => (
        <div
          key={index}
          className="p-4 border-b border-gray-600 hover:bg-gray-800 transition-colors"
        >
          <div className="flex justify-between items-baseline">
            <h3 className="text-lg font-bold">{item.name.toUpperCase()}</h3>
            <span className="text-lg text-blue-400">{item.price}</span>
          </div>
          {item.description && (
            <p className="mt-2 text-sm text-gray-300">{item.description}</p>
          )}
        </div>
      ));
    }
  };

  return (
    <section className="min-h-screen bg-black flex justify-center items-center p-4 mt">
      <div className="relative bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-8 w-full max-w-4xl shadow-xl border border-white border-opacity-30 transition-all duration-300 hover:brightness-105 mt-16">
        {/* Decorative Fluff Elements */}
        <div className="absolute top-[-30px] right-[-30px] w-20 h-20 bg-pink-400 rounded-full opacity-30 blur-xl animate-pulse"></div>
        <div className="absolute bottom-[-40px] left-[-40px] w-24 h-24 bg-green-400 rounded-full opacity-30 blur-xl animate-pulse delay-200"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-28 h-28 bg-blue-400 rounded-full opacity-20 blur-xl animate-pulse delay-400"></div>

        <header className="relative z-10 text-center">
          <h1 className="text-3xl font-serif text-white">Our Menu</h1>
          <input
            type="text"
            className="mt-4 w-full max-w-sm mx-auto px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </header>

        {searchQuery.trim() === "" && (
          <nav className="relative z-10 mt-6 flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-blue-500 hover:text-white"
                }`}
                onClick={() => {
                  setActiveCategory(cat);
                  setSearchQuery("");
                }}
              >
                {cat.toUpperCase()}
              </button>
            ))}
          </nav>
        )}

        <div className="relative z-10 mt-8 divide-y divide-gray-600">
          {renderItems()}
        </div>
      </div>
    </section>
  );
}
