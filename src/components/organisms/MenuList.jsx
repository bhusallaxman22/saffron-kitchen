import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItemCard from './MenuItemCard';
import MenuSearchBar from '../molecules/MenuSearchBar';
import CategoryNav from '../molecules/CategoryNav';
import { flattenMenu } from '../../utils/menuUtils';
import menuData from '../../constants/menuItems';
import useFuseSearch from '../../hooks/useFuseSearch';
import { Heading } from '../ui/Typography';

export default function MenuList() {
    const [query, setQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState(
        menuData.menu[0]?.category || ''
    );
    const [modalImg, setModalImg] = useState(null);

    // Flatten the menu for search.
    const allItems = flattenMenu(menuData.menu);

    // Fuse search hook configuration.
    const { search } = useFuseSearch(allItems, {
        keys: ['name', 'description'],
        threshold: 0.4,
    });
    const results = query.trim() ? search(query) : null;

    // Sort items: vegetarian items first.
    const sortItems = (items) => {
        return items.sort((a, b) => {
            const aIsVeg =
                a.special?.includes('vegetarian') || a.special?.includes('vegan');
            const bIsVeg =
                b.special?.includes('vegetarian') || b.special?.includes('vegan');
            if (aIsVeg && !bIsVeg) return -1;
            if (!aIsVeg && bIsVeg) return 1;
            return 0;
        });
    };

    const renderItems = () => {
        if (query.trim()) {
            if (results.length === 0) {
                return (
                    <motion.p className="text-center text-gray-600">
                        No items found for "{query}".
                    </motion.p>
                );
            }
            return (
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortItems(results).map((item, idx) => (
                        <MenuItemCard key={idx} item={item} onViewImage={setModalImg} />
                    ))}
                </motion.div>
            );
        } else {
            const category = menuData.menu.find(
                (cat) => cat.category === activeCategory
            );
            if (!category)
                return (
                    <motion.p className="text-center text-gray-600">
                        No items available.
                    </motion.p>
                );

            if (category.subcategories) {
                return category.subcategories.map((subcat, i) => (
                    <motion.div
                        key={i}
                        className="mb-10"
                        itemScope
                        itemType="https://schema.org/MenuSection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 * i }}
                    >
                        <Heading className="text-2xl mb-4" itemProp="name">
                            {subcat.name.toUpperCase()}
                        </Heading>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortItems(subcat.items).map((item, idx) => (
                                <MenuItemCard key={idx} item={item} onViewImage={setModalImg} />
                            ))}
                        </div>
                    </motion.div>
                ));
            } else if (category.items) {
                return (
                    <>
                        {activeCategory === 'Drinks' && (
                            <motion.div
                                className="mt-10  p-6 bg-gradient-to-r  mb-10 from-red-400 to-orange-300 border-l-4 border-yellow-600 rounded-2xl shadow-2xl text-center text-xl text-gray-800 font-bold"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.3 }}
                            >
                                🚨 Waiting for the mixed beverage license to publish our cocktail menu. 🚨
                            </motion.div>
                        )}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                            itemScope
                            itemType="https://schema.org/MenuSection"
                        >
                            <meta itemProp="name" content={category.category} />
                            {sortItems(category.items).map((item, idx) => (
                                <MenuItemCard key={idx} item={item} onViewImage={setModalImg} />
                            ))}
                        </motion.div>

                    </>
                );
            }
        }
    };

    return (
        <section
            className="p-6 bg-[#f9f9f9]"
            itemScope
            itemType="https://schema.org/Menu"
        >
            <motion.header
                className="mb-10 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginTop: '8vh' }}
            >
                <Heading className="mb-4" itemProp="name">
                    Our Menu
                </Heading>
                <MenuSearchBar query={query} onQueryChange={setQuery} />
            </motion.header>
            {!query.trim() && (
                <CategoryNav
                    categories={menuData.menu.map((cat) => cat.category)}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />
            )}
            <AnimatePresence exitBeforeEnter>
                <motion.main
                    key={activeCategory + query}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {renderItems()}
                </motion.main>
            </AnimatePresence>
            {modalImg && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
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
                            itemProp="image"
                        />
                        <button
                            onClick={() => setModalImg(null)}
                            className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded-full hover:bg-gray-600"
                            title="Close"
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
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            )}
        </section>
    );
}
