// src/components/organisms/MenuList.tsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import MenuItemCard from './MenuItemCard';
import MenuSearchBar from '../molecules/MenuSearchBar';
import CategoryNav from '../molecules/CategoryNav';
import { Heading } from '../ui/Typography';
import useFuseSearch from '../../hooks/useFuseSearch';

// Helper: group menu items by their category field.
function groupByCategory(items: any[]) {
    return items.reduce((acc, item) => {
        const category = item.category || 'Uncategorized';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {} as Record<string, any[]>);
}

export default function MenuList() {
    const [query, setQuery] = useState('');
    const [menuItems, setMenuItems] = useState<any[]>([]);
    const [activeCategory, setActiveCategory] = useState('');
    const [modalImg, setModalImg] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get('http://localhost:3000/menu')
            .then((res) => {
                if (res.data.success) {
                    setMenuItems(res.data.menu);
                    // Set the active category to the first category found after grouping.
                    const grouped = groupByCategory(res.data.menu);
                    const categories = Object.keys(grouped);
                    setActiveCategory(categories[0] || '');
                }
            })
            .catch((err) => console.error('Error fetching menu:', err))
            .finally(() => setLoading(false));
    }, []);

    // Group the flat list by category.
    const groupedMenu = groupByCategory(menuItems);

    // Flatten the list for searching.
    const allItems = menuItems;

    // Fuse search hook
    const { search } = useFuseSearch(allItems, { keys: ['name', 'description'], threshold: 0.4 });
    const results = query.trim() ? search(query) : null;

    // Sort items so that vegetarian/vegan items come first.
    const sortItems = (items: any[]) => {
        return items.sort((a, b) => {
            const aIsVeg =
                a.modifiers?.special?.includes('vegetarian') ||
                a.modifiers?.special?.includes('vegan');
            const bIsVeg =
                b.modifiers?.special?.includes('vegetarian') ||
                b.modifiers?.special?.includes('vegan');
            if (aIsVeg && !bIsVeg) return -1;
            if (!aIsVeg && bIsVeg) return 1;
            return 0;
        });
    };

    const renderItems = () => {
        if (query.trim()) {
            if (!results || results.length === 0) {
                return (
                    <motion.p className="text-center text-gray-600">
                        No items found for "{query}".
                    </motion.p>
                );
            }
            return (
                <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sortItems(results).map((item, idx) => (
                        <MenuItemCard key={item.id || idx} item={item} onViewImage={setModalImg} />
                    ))}
                </motion.div>
            );
        } else {
            const itemsForCategory = groupedMenu[activeCategory] || [];
            if (itemsForCategory.length === 0) {
                return (
                    <motion.p className="text-center text-gray-600">
                        No items available.
                    </motion.p>
                );
            }
            return (
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    itemScope
                    itemType="https://schema.org/MenuSection"
                >
                    {sortItems(itemsForCategory).map((item, idx) => (
                        <MenuItemCard key={item.id || idx} item={item} onViewImage={setModalImg} />
                    ))}
                </motion.div>
            );
        }
    };

    if (loading) return <p>Loading menu...</p>;

    // Get category names from the grouped data.
    const categories = Object.keys(groupedMenu);

    return (
        <section className="p-6 bg-[#f9f9f9]" itemScope itemType="https://schema.org/Menu">
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
                    categories={categories}
                    activeCategory={activeCategory}
                    onCategoryChange={setActiveCategory}
                />
            )}
            <AnimatePresence>
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
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </motion.div>
            )}
        </section>
    );
}
