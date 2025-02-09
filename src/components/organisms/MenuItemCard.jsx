import React from 'react';
import { motion } from 'framer-motion';
import { VeganIcon, VegetarianIcon, SpicyIcon } from '../../components/atoms/Icons';

export default function MenuItemCard({ item, onViewImage }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        >
            <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-900 break-words">{item.name.toUpperCase()}</h3>
                <span className="text-lg text-blue-400">${item.price.toFixed(2)}</span>
            </div>
            {item.img && (
                <button onClick={() => onViewImage(item.img)} title="View image" className="mt-2 text-blue-400 hover:text-blue-600">
                    [View Image]
                </button>
            )}
            {item.special && (
                <div className="flex space-x-2 mt-1">
                    {item.special.includes('vegan') && <VeganIcon />}
                    {item.special.includes('vegetarian') && <VegetarianIcon />}
                    {item.special.includes('spicy') && <SpicyIcon />}
                </div>
            )}
            {item.description && <p className="mt-2 text-gray-700 text-sm">{item.description}</p>}
        </motion.div>
    );
}
