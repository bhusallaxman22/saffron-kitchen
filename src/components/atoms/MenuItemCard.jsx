import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { VeganIcon, VegetarianIcon, SpicyIcon } from '../atoms/Icons';
import { BiCamera, BiInfoCircle } from 'react-icons/bi';

export default function MenuItemCard({ item, onViewImage }) {
    const [showOptions, setShowOptions] = useState(false);

    const renderOptions = (options, label) => (
        <div className="mt-1">
            <span className="font-semibold">{label}: </span>
            {options.map((option, index) => (
                <span key={index}>
                    {option.name || option}
                    {option.price > 0 ? ` (+$${option.price.toFixed(2)})` : ""}
                    {index !== options.length - 1 ? " | " : ""}
                </span>
            ))}
        </div>
    );

    return (
        <motion.div
            className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        >
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    {item.img && (
                        <Tippy content="View Image">
                            <span
                                role="button"
                                onClick={() => onViewImage(item.img)}
                                className="text-blue-400 hover:text-blue-600 cursor-pointer"
                            >
                                <BiCamera />
                            </span>
                        </Tippy>
                    )}
                    <h3 className="text-xl font-semibold text-gray-900 break-words">
                        {item.name.toUpperCase()}
                    </h3>
                    {item.special && (
                        <div className="flex items-center space-x-1">
                            {item.special.includes('vegan') && (
                                <Tippy content="Vegan">
                                    <span>
                                        <VeganIcon />
                                    </span>
                                </Tippy>
                            )}
                            {item.special.includes('vegetarian') && (
                                <Tippy content="Vegetarian">
                                    <span>
                                        <VegetarianIcon />
                                    </span>
                                </Tippy>
                            )}
                            {item.special.includes('spicy') && (
                                <Tippy content="Spicy">
                                    <span>
                                        <SpicyIcon />
                                    </span>
                                </Tippy>
                            )}
                        </div>
                    )}
                </div>
                <span className="text-lg text-blue-400">${item.price.toFixed(2)}</span>
            </div>
            {item.description && (
                <p className="mt-2 text-gray-700 text-sm">{item.description}</p>
            )}
            {item.note && (
                <p className="mt-1 text-gray-500 text-xs italic">{item.note}</p>
            )}
            {(item.options || item.addons || item.variants || item.type_options) && (
                <div className="mt-2">
                    <button
                        onClick={() => setShowOptions((prev) => !prev)}
                        className="flex items-center text-sm text-blue-500 hover:underline focus:outline-none"
                    >
                        <BiInfoCircle className="mr-1" /> {showOptions ? "Hide Options" : "Show Options"}
                    </button>
                    <AnimatePresence>
                        {showOptions && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="mt-2 text-gray-700 text-xs overflow-hidden"
                            >
                                {item.options && item.options.fillings && renderOptions(item.options.fillings, 'Fillings')}
                                {item.options && item.options.styles && renderOptions(item.options.styles, 'Styles')}
                                {Array.isArray(item.options) && item.options.length > 0 && renderOptions(item.options, 'Options')}
                                {Array.isArray(item.addons) && item.addons.length > 0 && renderOptions(item.addons, 'Add-ons')}
                                {Array.isArray(item.variants) && item.variants.length > 0 && renderOptions(item.variants, 'Variants')}
                                {Array.isArray(item.type_options) && item.type_options.length > 0 && renderOptions(item.type_options, 'Type Options')}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </motion.div>
    );
}
