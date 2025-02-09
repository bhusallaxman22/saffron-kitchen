// src/components/Menu.js
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Fuse from "fuse.js";
import menuData from "../data/menuItems";
// Import icons for special tags
import { GiPlantSeed } from "react-icons/gi"; // vegan icon
import { FaLeaf, FaPepperHot } from "react-icons/fa"; // vegetarian and spicy icons

// ----------
// Helper: Flatten items from categories/subcategories
// ----------
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

// ----------
// Fuse.js configuration for fuzzy search
// ----------
const fuseOptions = {
  keys: [
    "name", // highest priority
    "protein_options.name",
    "type_options.name",
    "options.fillings.name",
    "description",
    "options.cooking_methods.name",
  ],
  threshold: 0.4,
};

const fuse = new Fuse(allItems, fuseOptions);

// Helper to assign a rank to each item based on where the search query appears
const getRank = (item, query) => {
  const lowerQuery = query.toLowerCase();
  if (item.name.toLowerCase().includes(lowerQuery)) return 1;
  if (
    (item.protein_options &&
      item.protein_options.some((opt) =>
        opt.name.toLowerCase().includes(lowerQuery)
      )) ||
    (item.type_options &&
      item.type_options.some((opt) =>
        opt.name.toLowerCase().includes(lowerQuery)
      )) ||
    (item.options &&
      item.options.fillings &&
      item.options.fillings.some((opt) =>
        opt.name.toLowerCase().includes(lowerQuery)
      ))
  ) {
    return 2;
  }
  if (item.description && item.description.toLowerCase().includes(lowerQuery))
    return 3;
  if (
    item.options &&
    item.options.cooking_methods &&
    item.options.cooking_methods.some((opt) =>
      opt.name.toLowerCase().includes(lowerQuery)
    )
  )
    return 4;
  return 5;
};

const getFuzzyResults = (query) => {
  const results = fuse.search(query).map((result) => ({
    item: result.item,
    score: result.score,
    rank: getRank(result.item, query),
  }));
  results.sort((a, b) => {
    if (a.rank !== b.rank) return a.rank - b.rank;
    return a.score - b.score;
  });
  return results.map((result) => result.item);
};

// ----------
// Animation variants
// ----------
const listItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const listVariants = {
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

// ----------
// Icon Components for Special Tags
// ----------
const VeganIcon = () => (
  <GiPlantSeed className="w-5 h-5 text-green-500" title="Vegan" />
);
const VegetarianIcon = () => (
  <FaLeaf className="w-5 h-5 text-green-700" title="Vegetarian" />
);
const SpicyIcon = () => (
  <FaPepperHot className="w-5 h-5 text-red-500" title="Spicy" />
);

export default function Menu() {
  const categories = menuData.menu.map((cat) => cat.category);
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalImg, setModalImg] = useState(null);

  const filteredItems = searchQuery.trim()
    ? getFuzzyResults(searchQuery)
    : null;

  // ----------  
  // ItemCard Component – uses a white card background and allows item names to wrap
  // ----------  
  const ItemCard = ({ item, setModalImg }) => (
    <motion.div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow mb-6"
      variants={listItemVariants}
    >
      <div className="flex items-center">
        {/* Wrap item name and camera icon together without truncation */}
        <div className="flex items-center">
          <h3 className="text-xl font-serif font-semibold text-gray-900 break-words">
            {item.name.toUpperCase()}
          </h3>
          {item.img && (
            <button
              onClick={() => setModalImg(item.img)}
              title="View Image"
              className="ml-2 text-blue-400 hover:text-blue-600 focus:outline-none"
            >
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
        </div>
        <div className="flex-grow" />
        <span className="text-lg text-blue-400">
          ${item.price.toFixed(2)}
        </span>
      </div>
      {/* Instead of text, display icons for special tags */}
      {item.special && (
        <div className="flex space-x-2 mt-1">
          {item.special.includes("vegan") && <VeganIcon />}
          {item.special.includes("vegetarian") && <VegetarianIcon />}
          {item.special.includes("spicy") && <SpicyIcon />}
        </div>
      )}
      {item.description && (
        <p className="mt-2 text-gray-700 text-sm">{item.description}</p>
      )}
      {item.protein_options && (
        <p className="mt-1 text-gray-600 text-xs">
          Options:{" "}
          {item.protein_options
            .map(
              (opt) =>
                `${opt.name}${opt.price ? ` (+$${opt.price})` : ""}`
            )
            .join(" | ")}
        </p>
      )}
      {item.type_options && (
        <p className="mt-1 text-gray-600 text-xs">
          Options:{" "}
          {item.type_options
            .map(
              (opt) =>
                `${opt.name}${opt.price ? ` (+$${opt.price})` : ""}`
            )
            .join(" | ")}
        </p>
      )}
      {item.options && item.options.fillings && (
        <div className="mt-1 text-gray-600 text-xs">
          <span className="block">
            Fillings:{" "}
            {item.options.fillings
              .map(
                (opt) =>
                  `${opt.name}${opt.price ? ` (+$${opt.price})` : ""}`
              )
              .join(" | ")}
          </span>
          <span className="block">
            Methods:{" "}
            {item.options.cooking_methods
              .map(
                (opt) =>
                  `${opt.name}${opt.price ? ` (+$${opt.price})` : ""}`
              )
              .join(" | ")}
          </span>
        </div>
      )}
    </motion.div>
  );

  // ----------  
  // Render search results in a grid layout  
  // ----------
  const renderSearchResults = () => {
    if (filteredItems.length === 0) {
      return (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600"
        >
          No items found for "{searchQuery}".
        </motion.p>
      );
    }
    return (
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredItems.map((item, index) => (
          <ItemCard key={index} item={item} setModalImg={setModalImg} />
        ))}
      </motion.div>
    );
  };

  // ----------  
  // Render active category's items in a grid layout  
  // ----------
  const renderActiveCategory = () => {
    const activeCat = menuData.menu.find(
      (cat) => cat.category === activeCategory
    );
    if (!activeCat)
      return (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600"
        >
          No items available.
        </motion.p>
      );

    if (activeCat.subcategories) {
      return activeCat.subcategories.map((subcat, index) => (
        <motion.div
          key={index}
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 * index }}
        >
          <motion.h2
            className="text-2xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {subcat.name.toUpperCase()}
          </motion.h2>
          <motion.div
            variants={listVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {subcat.items.map((item, idx) => (
              <ItemCard key={idx} item={item} setModalImg={setModalImg} />
            ))}
          </motion.div>
        </motion.div>
      ));
    } else if (activeCat.items) {
      return (
        <motion.div
          variants={listVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {activeCat.items.map((item, index) => (
            <ItemCard key={index} item={item} setModalImg={setModalImg} />
          ))}
        </motion.div>
      );
    }
  };

  return (
    <motion.section
      className="min-h-screen bg-[#f9f9f9] text-gray-900 p-6 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative Fluff Elements */}
      <div className="absolute top-[-80px] right-[-80px] w-40 h-40 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse delay-200"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Animated Header */}
        <motion.header
          className="mb-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-extrabold text-5xl text-yellow-400 mb-4 mt-20 font-playfair">
            Our Menu
          </h1>
          <motion.input
            type="text"
            placeholder="Search dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md mx-auto px-4 py-2 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.header>

        {/* Animated Category Navigation */}
        {searchQuery.trim() === "" && (
          <motion.nav
            className="relative mb-10 flex gap-4 overflow-x-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((cat, idx) => (
              <motion.button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full border border-blue-500 transition-colors ${activeCategory === cat
                    ? "bg-blue-500 text-white"
                    : "bg-transparent text-blue-900 hover:bg-blue-500 hover:text-white"
                  }`}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                {cat}
              </motion.button>
            ))}
            {/* Gradient overlay to signal scrollability */}
            <div className="absolute right-0 top-0 h-full w-12 pointer-events-none bg-gradient-to-l from-transparent to-[#f9f9f9]" />
          </motion.nav>
        )}

        {/* Main Content */}
        <AnimatePresence exitBeforeEnter>
          <motion.main
            key={activeCategory || searchQuery}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {searchQuery.trim()
              ? renderSearchResults()
              : renderActiveCategory()}
          </motion.main>
        </AnimatePresence>
      </div>

      {/* Modal for Item Image Display */}
      {modalImg && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalImg(null);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
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
        </motion.div>
      )}
    </motion.section>
  );
}
