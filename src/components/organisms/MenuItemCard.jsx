import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { VeganIcon, VegetarianIcon, SpicyIcon } from '../atoms/Icons';
import { BiInfoCircle } from 'react-icons/bi';

export default function MenuItemCard({ item, onViewImage }) {
    const [showOptions, setShowOptions] = useState(false);
    const [showModal, setShowModal] = useState(false);

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

    // Handle opening modal
    const handleOpenModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <motion.div
                className="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                itemScope
                itemType="https://schema.org/MenuItem"
            >
                <div className="flex items-center justify-between">
                    {/* Item name and dietary icons */}
                    <div className="flex items-center flex-grow">
                        <button
                            onClick={handleOpenModal}
                            className="text-blue-600 hover:text-blue-800 flex font-medium text-left focus:outline-none"
                        >
                            <h3 className="text-lg" itemProp="name">
                                {item.name}
                            </h3>
                        </button>
                        <div className="flex items-center ml-2 space-x-1">
                            {item.special?.includes('vegan') && (
                                <Tippy content="Vegan">
                                    <div><VeganIcon size={12} /></div>
                                </Tippy>
                            )}
                            {item.special?.includes('vegetarian') && (
                                <Tippy content="Vegetarian">
                                    <div><VegetarianIcon size={12} /></div>
                                </Tippy>
                            )}
                            {item.special?.includes('spicy') && (
                                <Tippy content="Spicy">
                                    <div><SpicyIcon size={12} /></div>
                                </Tippy>
                            )}
                        </div>
                    </div>

                    {/* Price and thumbnail */}
                    <div className="flex items-center">
                        <div
                            className="text-base font-semibold text-blue-600 mr-2"
                            itemProp="offers"
                            itemScope
                            itemType="https://schema.org/Offer"
                        >
                            <span itemProp="price" content={typeof (item.price) == "number" ? item.price.toFixed(2) : item.price}>
                                {typeof (item.price) == "number" ? `$${item.price.toFixed(2)}` : item.price}
                            </span>
                            <meta itemProp="priceCurrency" content="USD" />
                        </div>
                        {item.img && (
                            <div
                                className="w-12 h-12 rounded overflow-hidden bg-cover bg-center cursor-pointer"
                                style={{ backgroundImage: `url(${item.img})` }}
                                onClick={handleOpenModal}
                            ></div>
                        )}
                    </div>
                </div>

                {/* Customizations Section */}
                {(item.options || item.addons || item.variants || item.type_options) && (
                    <div className="mt-2 pt-1">
                        <button
                            onClick={() => setShowOptions(!showOptions)}
                            className="flex items-center text-xs text-blue-500 hover:underline focus:outline-none"
                        >
                            <BiInfoCircle className="mr-1" size={12} />{' '}
                            {showOptions ? 'Hide Customizations' : 'Show Customizations'}
                        </button>
                        <AnimatePresence>
                            {showOptions && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mt-2 space-y-3"
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
            </motion.div>

            {/* Modal for detailed view */}
            {showModal && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                    onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className="bg-white rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto">
                        {/* Modal Header with Image */}
                        <div className="relative h-48">
                            {item.img ? (
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${item.img})` }}
                                ></div>
                            ) : (
                                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                                    <p className="text-xl font-bold text-gray-500">No Image Available</p>
                                </div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-70"></div>
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute top-4 right-4 bg-white p-2 rounded-full hover:bg-gray-100"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-2xl font-bold">{item.name}</h2>
                                <div className="text-xl text-blue-600 font-bold">
                                    {typeof (item.price) == "number" ? `$${item.price.toFixed(2)}` : item.price}
                                </div>
                            </div>

                            <div className="flex items-center mb-4 space-x-2">
                                {item.special?.includes('vegan') && (
                                    <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                                        <VeganIcon size={16} className="mr-1" />
                                        <span className="text-sm">Vegan</span>
                                    </div>
                                )}
                                {item.special?.includes('vegetarian') && (
                                    <div className="flex items-center bg-green-100 px-3 py-1 rounded-full">
                                        <VegetarianIcon size={16} className="mr-1" />
                                        <span className="text-sm">Vegetarian</span>
                                    </div>
                                )}
                                {item.special?.includes('spicy') && (
                                    <div className="flex items-center bg-red-100 px-3 py-1 rounded-full">
                                        <SpicyIcon size={16} className="mr-1" />
                                        <span className="text-sm">Spicy</span>
                                    </div>
                                )}
                            </div>

                            {item.description && (
                                <div className="mb-4">
                                    <p className="text-gray-700">{item.description}</p>
                                </div>
                            )}

                            {item.note && (
                                <div className="mb-4">
                                    <p className="text-sm italic text-gray-500">{item.note}</p>
                                </div>
                            )}

                            <button
                                onClick={() => setShowModal(false)}
                                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </>
    );
}
