import React from 'react';
import { motion } from 'framer-motion';

export default function MenuSearchBar({ query, onQueryChange }) {
    return (
        <motion.input
            type="text"
            placeholder="Search dishes..."
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            className="w-full max-w-md mx-auto px-4 py-2 rounded-full bg-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search dishes"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
        />
    );
}
