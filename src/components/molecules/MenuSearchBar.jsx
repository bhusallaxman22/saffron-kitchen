import React from 'react';
import { motion } from 'framer-motion';
import { IoCloseCircle } from 'react-icons/io5';

export default function MenuSearchBar({ query, onQueryChange }) {
    return (
        <motion.div className="relative max-w-xl mx-auto">
            <input
                type="text"
                placeholder="Discover our menu..."
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                className="w-full px-2 py-2 text-lg rounded-xl bg-white/90 backdrop-blur-sm shadow-lg ring-1 ring-slate-200 focus:ring-2 focus:ring-pink-500 focus:outline-none placeholder:text-slate-400"
            />
            {query && (
                <button
                    onClick={() => onQueryChange('')}
                    className="absolute right-3 top-3 text-slate-500 hover:text-slate-700 transition"
                >
                    <IoCloseCircle size={24} />
                </button>
            )}
        </motion.div>
    );
}
