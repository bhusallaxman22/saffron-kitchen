// src/components/organisms/DishCardUX.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SpicyIcon, VeganIcon, VegetarianIcon } from '../atoms/Icons';

const DishCard = ({ dish }) => {
    const [expanded, setExpanded] = useState(false);

    // Toggle the expanded state; note that clicking the inner button stops propagation
    const toggleExpand = () => setExpanded((prev) => !prev);

    // Allow keyboard interaction for accessibility (Enter or Space toggles)
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            toggleExpand();
        }
    };

    return (
        <motion.div
            className="relative bg-gray-100 rounded-2xl p-6 shadow-md transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            onClick={toggleExpand}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-expanded={expanded}
        >
            <span className='flex justify-between items-center'>
                <h3 className="text-2xl font-bold text-gray-800">{dish.name}</h3>
                <span className=" space-x-2">
                    {dish.special && dish.special.includes('vegan') && (
                        <VeganIcon className="w-6 h-6 text-green-500" />
                    )}
                    {dish.special && dish.special.includes('vegetarian') && (
                        <VegetarianIcon className="w-6 h-6 text-green-500" />
                    )}
                    {dish.special && dish.special.includes('spicy') && (
                        <SpicyIcon className="w-6 h-6 text-red-500" />
                    )}
                </span>
            </span>
            <p className="mt-2 text-lg font-semibold text-gray-800">
                ${dish.price.toFixed(2)}
            </p>

            {/* Expandable section for additional details */}
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        className="mt-4 text-gray-600"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p>{dish.description}</p>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* An explicit button for clarity (clicking it does not trigger the parent onClick twice) */}
            <div className="mt-4">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleExpand();
                    }}
                    className="text-blue-500 text-sm font-medium focus:outline-none"
                    aria-label={expanded ? 'Hide details' : 'Show more details'}
                >
                    {expanded ? 'Hide details' : 'Show more'}
                </button>
            </div>
        </motion.div>
    );
};

export default DishCard;
