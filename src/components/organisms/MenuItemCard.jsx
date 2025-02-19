import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { VeganIcon, VegetarianIcon, SpicyIcon } from '../atoms/Icons';
import { BiCamera, BiInfoCircle } from 'react-icons/bi';

export default function MenuItemCard({ item, onViewImage }) {
    const [showOptions, setShowOptions] = useState(false);

    // Renders a chip for an individual option
    const renderChip = (option) => (
        <span
            key={option.id || option.name}
            className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-700 shadow-sm"
        >
            {option.name || option}
            {option.price > 0 && (
                <span className="ml-1 text-blue-500">(+${option.price.toFixed(2)})</span>
            )}
        </span>
    );

    // Renders a category of options as a section with chips
    const renderOptionCategory = (options, label) => (
        <div key={label} className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-1">{label}</h4>
            <div className="flex flex-wrap gap-2">
                {options.map((option, index) => renderChip(option, index))}
            </div>
        </div>
    );

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            itemScope
            itemType="https://schema.org/MenuItem"
        >
            {/*  TODO: Uncomment after image is available. Header Section with Background Image */}
            {/* <div
            className={`relative h-48 md:h-56 bg-cover bg-center`}
            style={{
                backgroundImage: `url(${item.img || 'https://via.placeholder.com/400x300?text=No+Image'})`
            }}
            > */}
            {/* TODO: add absolute in className */}
            <div className=" inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
            {/* TODO: add absolute in className */}
            <div className=" inset-0 flex flex-col justify-end p-4">
                {/* TODO: change to text-black after image */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <h3 className="text-2xl text-black font-extrabold" itemProp="name">
                            {item.name}
                        </h3>
                        <div className="flex items-center ml-3 space-x-2">
                            {item.special?.includes('vegan') && (
                                <Tippy content="Vegan">
                                    <div className="flex items-center text-white rounded-full px-2 py-1 text-xs">
                                        <VeganIcon className="mr-1" size={14} />
                                    </div>
                                </Tippy>
                            )}
                            {item.special?.includes('vegetarian') && (
                                <Tippy content="Vegetarian">
                                    <div className="flex items-center text-white rounded-full px-2 py-1 text-xs">
                                        <VegetarianIcon className="mr-1" size={14} />
                                    </div>
                                </Tippy>
                            )}
                            {item.special?.includes('spicy') && (
                                <Tippy content="Spicy">
                                    <div className="flex items-center text-white rounded-full px-2 py-1 text-xs">
                                        <SpicyIcon className="mr-1" size={14} />
                                    </div>
                                </Tippy>
                            )}
                        </div>
                    </div>
                    <div className="absolute top-2 right-2">
                        <Tippy content="View Image">
                            <button
                                onClick={() => onViewImage(item.img)}
                                className="bg-white bg-opacity-80 p-2 rounded-full shadow-md hover:bg-opacity-100 transition"
                            >
                                <BiCamera className="text-blue-500" size={20} />
                            </button>
                        </Tippy>
                    </div>
                </div>
            </div>
            {/* </div> */}

            {/* Details Section */}
            <div className="p-4 md:p-6">
                <div className="flex justify-between items-center">
                    <div
                        className="text-xl text-blue-600 font-bold"
                        itemProp="offers"
                        itemScope
                        itemType="https://schema.org/Offer"
                    >
                        <span itemProp="price" content={item.price.toFixed(2)}>
                            ${item.price.toFixed(2)}
                        </span>
                        <meta itemProp="priceCurrency" content="USD" />
                    </div>
                </div>
                {item.description && (
                    <p className="mt-2 text-gray-700 text-sm" itemProp="description">
                        {item.description}
                    </p>
                )}
                {item.note && (
                    <p className="mt-1 text-gray-500 italic text-xs">{item.note}</p>
                )}
                {(item.options || item.addons || item.variants || item.type_options) && (
                    <div className="mt-4 border-t pt-3">
                        <button
                            onClick={() => setShowOptions(!showOptions)}
                            className="flex items-center text-sm text-blue-500 hover:underline focus:outline-none"
                        >
                            <BiInfoCircle className="mr-1" />{' '}
                            {showOptions ? 'Hide Customizations' : 'Show Customizations'}
                        </button>
                        <AnimatePresence>
                            {showOptions && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-3 space-y-4"
                                >
                                    {item.options?.fillings &&
                                        renderOptionCategory(item.options.fillings, 'Fillings')}
                                    {item.options?.styles &&
                                        renderOptionCategory(item.options.styles, 'Styles')}
                                    {Array.isArray(item.options) &&
                                        item.options.length > 0 &&
                                        renderOptionCategory(item.options, 'Options')}
                                    {Array.isArray(item.addons) &&
                                        item.addons.length > 0 &&
                                        renderOptionCategory(item.addons, 'Add-ons')}
                                    {Array.isArray(item.variants) &&
                                        item.variants.length > 0 &&
                                        renderOptionCategory(item.variants, 'Variants')}
                                    {Array.isArray(item.type_options) &&
                                        item.type_options.length > 0 &&
                                        renderOptionCategory(item.type_options, 'Type Options')}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
