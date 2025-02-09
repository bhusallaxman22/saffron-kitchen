import React from 'react';
import { motion } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { VeganIcon, VegetarianIcon, SpicyIcon } from '../../components/atoms/Icons';
import { BiCamera } from 'react-icons/bi';

export default function MenuItemCard({ item, onViewImage }) {
    return (
        <motion.div
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
        >
            <div className="flex items-center justify-between">
                {/* Left side: Camera icon, then item name with inline special icons */}
                <div className="flex items-center space-x-2">
                    {item.img && (
                        <Tippy content="View Image">
                            <span
                                role="button"
                                onClick={() => onViewImage(item.img)}
                                className="text-blue-400 hover:text-blue-600"
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
        </motion.div>
    );
}
