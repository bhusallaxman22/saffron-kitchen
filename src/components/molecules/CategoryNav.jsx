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
                block: 'nearest',
            });
        }
    }, [activeCategory]);

    return (
        <motion.nav
            ref={navRef}
            className="flex gap-2 px-2 py-2 overflow-x-auto hide-scrollbar whitespace-nowrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
        >
            {categories.map((cat) => (
                <button
                    key={cat}
                    ref={cat === activeCategory ? activeButtonRef : null}
                    onClick={() => onCategoryChange(cat)}
                    className={`px-4 py-2 whitespace-nowrap transition-colors ${activeCategory === cat
                        ? 'text-pink-600 border-b-2 border-pink-500 font-semibold'
                        : 'text-slate-600 hover:text-pink-500'
                        }`}
                >
                    {cat}
                </button>
            ))}
        </motion.nav>
    );
}
