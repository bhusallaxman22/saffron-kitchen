import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CategoryNav({ categories, activeCategory, onCategoryChange }) {
    const navRef = useRef(null);
    const activeButtonRef = useRef(null);

    useEffect(() => {
        if (activeButtonRef.current && navRef.current) {
            activeButtonRef.current.scrollIntoView({
                behavior: 'smooth',
                inline: 'center',
                block: 'nearest'
            });
        }
    }, [activeCategory]);

    return (
        <motion.nav
            ref={navRef}
            className="relative flex gap-4 mt-5 mb-3 overflow-x-auto px-4 hide-scrollbar"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
        >
            {categories.map((cat, idx) => (
                <motion.button
                    key={idx}
                    ref={el => {
                        if (cat === activeCategory) activeButtonRef.current = el;
                    }}
                    onClick={() => onCategoryChange(cat)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full border border-blue-500 transition-colors ${activeCategory === cat
                            ? 'bg-blue-500 text-white'
                            : 'bg-transparent text-blue-900 hover:bg-blue-500 hover:text-white'
                        }`}
                    initial={{ scale: 0.95 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                >
                    {cat}
                </motion.button>
            ))}
            <div className="absolute right-0 top-0 h-full w-12 pointer-events-none bg-gradient-to-l from-transparent to-[#f9f9f9]" />
        </motion.nav>
    );
}
