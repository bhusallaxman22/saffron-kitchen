import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // Optional for styling
import { VeganIcon, VegetarianIcon, SpicyIcon } from '../../components/atoms/Icons';
import { BiCamera, BiInfoCircle } from 'react-icons/bi';

export default function MenuItemCard({ item, onViewImage }) {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <motion.div
            className="bg-white p-6 rounded-xl shadow hover:shadow-2xl transition mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        >
            <div className="flex items-center justify-between">
                {/* Left side: Camera icon, then item name with special icons */}
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
                {/* Right side: Price */}
                <span className="text-lg text-blue-400">${item.price.toFixed(2)}</span>
            </div>
            {item.description && (
                <p className="mt-2 text-gray-700 text-sm">{item.description}</p>
            )}
            {/* Options Toggle Button */}
            {(item.options || item.protein_options || item.type_options) && (
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
                                {item.options && item.options.fillings && (
                                    <div>
                                        <span className="font-semibold">Fillings: </span>
                                        {item.options.fillings.map((filling, index) => (
                                            <span key={index}>
                                                {filling.name}
                                                {filling.price > 0 ? ` (+$${filling.price.toFixed(2)})` : ""}
                                                {index !== item.options.fillings.length - 1 ? " | " : ""}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {item.options && item.options.cooking_methods && (
                                    <div className="mt-1">
                                        <span className="font-semibold">Cooking Methods: </span>
                                        {item.options.cooking_methods.map((method, index) => (
                                            <span key={index}>
                                                {method.name}
                                                {method.price > 0 ? ` (+$${method.price.toFixed(2)})` : ""}
                                                {index !== item.options.cooking_methods.length - 1 ? " | " : ""}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {item.protein_options && (
                                    <div className="mt-1">
                                        <span className="font-semibold">Protein Options: </span>
                                        {item.protein_options.map((option, index) => (
                                            <span key={index}>
                                                {option.name}
                                                {option.price > 0 ? ` (+$${option.price.toFixed(2)})` : ""}
                                                {index !== item.protein_options.length - 1 ? " | " : ""}
                                            </span>
                                        ))}
                                    </div>
                                )}
                                {item.type_options && (
                                    <div className="mt-1">
                                        <span className="font-semibold">Type Options: </span>
                                        {item.type_options.map((option, index) => (
                                            <span key={index}>
                                                {option.name}
                                                {option.price > 0 ? ` (+$${option.price.toFixed(2)})` : ""}
                                                {index !== item.type_options.length - 1 ? " | " : ""}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}
        </motion.div>
    );
}
