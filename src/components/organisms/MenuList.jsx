import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import MenuItemCard from './MenuItemCard';
import MenuSearchBar from '../molecules/MenuSearchBar';
import CategoryNav from '../molecules/CategoryNav';
import { flattenMenu } from '../../utils/menuUtils';
import menuData from '../../constants/menuItems';
import useFuseSearch from '../../hooks/useFuseSearch';
import { Heading } from '../ui/Typography';

export default function MenuList() {
    const [query, setQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState(menuData.menu[0]?.category || '');
    const [modalImg, setModalImg] = useState(null);
    const categories = menuData.menu.map((cat) => cat.category);
    const containerRef = useRef(null);
    const categoryRefs = useRef({});
    const isManualScroll = useRef(false);

    const allItems = flattenMenu(menuData.menu);
    const { search } = useFuseSearch(allItems, {
        keys: ['name', 'special', 'description', 'category', 'subcategory'],
        threshold: 0.4,
    });
    const results = query.trim() ? search(query) : null;

    const sortItems = (items) => {
        return items.sort((a, b) => {
            const aIsVeg = a.special?.includes('vegetarian') || a.special?.includes('vegan');
            const bIsVeg = b.special?.includes('vegetarian') || b.special?.includes('vegan');
            return aIsVeg && !bIsVeg ? -1 : !aIsVeg && bIsVeg ? 1 : 0;
        });
    };


    // Update the handleCategoryChange function
    const handleCategoryChange = (category) => {
        if (activeCategory === category) return;
        isManualScroll.current = true;
        setActiveCategory(category);

        const section = categoryRefs.current[category];
        if (section && containerRef.current) {
            const container = containerRef.current;
            const scrollMarginTop = parseInt(window.getComputedStyle(section).scrollMarginTop, 10) || 0;
            container.scrollTo({
                top: section.offsetTop - STICKY_NAV_HEIGHT - scrollMarginTop,
                behavior: 'smooth'
            });
        }

        setTimeout(() => {
            isManualScroll.current = false;
        }, 1000);
    };

    // Update STICKY_NAV_HEIGHT to match actual nav height (example value)
    const STICKY_NAV_HEIGHT = 210; // 4rem (scroll-mt-16) = 64px
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isManualScroll.current) return;
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const category = entry.target.dataset.category;
                        setActiveCategory(category);
                    }
                });
            },
            {
                root: containerRef.current,
                threshold: 0.1,
                // Adjust rootMargin based on your sticky nav height
                rootMargin: `-${STICKY_NAV_HEIGHT}px 0px 0px 0px`
            }
        );

        // Observe all category sections
        Object.values(categoryRefs.current).forEach(el => {
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="p-3 bg-[#f9f9f9]"
            itemScope
            itemType="https://schema.org/Menu"
        >
            <motion.header
                className="mb-5 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginTop: '4vh' }}
            >
                <Heading className="mb-2" itemProp="name">
                    Our Menu
                </Heading>
                <MenuSearchBar query={query} onQueryChange={setQuery} />
            </motion.header>

            {/* Sticky Category Navigation – placed outside the main scrollable section */}
            {!query.trim() && (
                <div className="sticky top-0 z-30 bg-[#f9f9f9] shadow-sm">
                    <CategoryNav
                        categories={categories}
                        activeCategory={activeCategory}
                        onCategoryChange={handleCategoryChange}
                    />
                </div>
            )}

            {/* Main Scrollable Content */}
            <section className="h-[calc(100vh-8rem)] overflow-y-auto pt-4" ref={containerRef}>
                {query.trim() ? (
                    results?.length ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortItems(results).map((item, idx) => (
                                <MenuItemCard key={idx} item={item} onViewImage={setModalImg} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-center text-gray-600">
                            No items found for "{query}"
                        </p>
                    )
                ) : (
                    menuData.menu.map((category) => (
                        <section
                            key={category.category}
                            ref={el => (categoryRefs.current[category.category] = el)}
                            data-category={category.category}
                            // Adjust scroll margin so section headings aren’t hidden by the sticky nav
                            className="py-4 scroll-mt-8"
                        >
                            <h3 className="mb-3 text-xl font-bold text-slate-800 border-l-4 border-pink-500 pl-4">
                                {category.category.toUpperCase()}
                            </h3>

                            {category.subcategories?.map((subcat, i) => (
                                <div key={i} className="mb-2">
                                    <h6 className="text-md text-gray-700 font-semibold mb-2">
                                        {subcat.name.toUpperCase()}
                                    </h6>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {sortItems(subcat.items).map((item, idx) => (
                                            <MenuItemCard key={idx} item={item} onViewImage={setModalImg} />
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {category.items && (
                                <>
                                    {category.category === 'Drinks' && (
                                        <motion.div className="mb-4 p-3 bg-gradient-to-r from-red-400 to-orange-300 border-l-4 border-yellow-600 rounded-2xl shadow-xl text-center text-xl text-gray-800 font-bold">
                                            🚨 Waiting for mixed beverage license 🚨
                                        </motion.div>
                                    )}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {sortItems(category.items).map((item, idx) => (
                                            <MenuItemCard key={idx} item={item} onViewImage={setModalImg} />
                                        ))}
                                    </div>
                                </>
                            )}
                        </section>
                    ))
                )}
            </section>

            {/* Modal for viewing images */}
            {modalImg && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                    onClick={(e) => e.target === e.currentTarget && setModalImg(null)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="relative max-w-4xl w-full">
                        <img
                            src={modalImg}
                            alt="Menu Item"
                            className="w-full h-full object-contain rounded-lg"
                        />
                        <button
                            onClick={() => setModalImg(null)}
                            className="absolute top-4 right-4 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700"
                        >
                            ✕
                        </button>
                    </div>
                </motion.div>
            )}
        </section>
    );
}
