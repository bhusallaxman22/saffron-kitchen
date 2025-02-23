// src/components/organisms/MenuItemCard.tsx
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FaCartPlus, FaPlus, FaMinus } from 'react-icons/fa';
import { BiCamera, BiInfoCircle } from 'react-icons/bi';
import { useCart } from '../../context/CartContext';

const FALLBACK_IMAGE = 'https://via.placeholder.com/400x300?text=No+Image';

export default function MenuItemCard({ item, onViewImage }) {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});
    const { items, addItem, updateQuantity, removeItem } = useCart();

    const basePrice = parseFloat(item.price);
    const additionalPrice = Object.values(selectedOptions).reduce(
        (acc: number, option: any) => acc + (parseFloat(option.price) || 0),
        0
    );
    const finalPrice = basePrice + additionalPrice;

    const handleOptionSelect = (group, option) => {
        setSelectedOptions(prev => ({ ...prev, [group]: option }));
    };

    // Check if this item (with current options) exists in cart.
    const cartEntry = useMemo(() => {
        return items.find(
            i =>
                i.id === item.id.toString() &&
                JSON.stringify(i.options) === JSON.stringify(selectedOptions)
        );
    }, [items, item.id, selectedOptions]);

    const handleAddToCart = () => {
        if (cartEntry) {
            updateQuantity(item.id.toString(), cartEntry.quantity + 1, selectedOptions);
        } else {
            addItem({
                id: item.id.toString(),
                name: item.name,
                price: finalPrice,
                quantity: 1,
                image_url: item.image_url || FALLBACK_IMAGE,
                options: selectedOptions,
            });
        }
    };

    const handleDecreaseQuantity = () => {
        if (cartEntry) {
            if (cartEntry.quantity > 1) {
                updateQuantity(item.id.toString(), cartEntry.quantity - 1, selectedOptions);
            } else {
                removeItem(item.id.toString(), selectedOptions);
            }
        }
    };

    const renderRadioOption = (group, option) => {
        const optionPrice = parseFloat(option.price) || 0;
        return (
            <label key={option.name} className="flex items-center space-x-2">
                <input
                    type="radio"
                    name={group}
                    value={option.name}
                    checked={selectedOptions[group]?.name === option.name}
                    onChange={() => handleOptionSelect(group, option)}
                    className="form-radio h-4 w-4 text-blue-500"
                />
                <span className="text-sm">
                    {option.name}{' '}
                    {optionPrice > 0 && (
                        <span className="text-blue-500">(+$ {optionPrice.toFixed(2)})</span>
                    )}
                </span>
            </label>
        );
    };

    const renderOptionGroup = (groupName, options) => (
        <div key={groupName} className="mb-4">
            <h4 className="text-sm font-semibold text-gray-800 mb-1">{groupName}</h4>
            <div className="flex flex-col space-y-1">
                {options.map(option => renderRadioOption(groupName, option))}
            </div>
        </div>
    );

    // Collect customization groups from item.modifiers.
    const customizationGroups = {};
    if (item.modifiers) {
        if (
            item.modifiers.options &&
            typeof item.modifiers.options === 'object' &&
            !Array.isArray(item.modifiers.options)
        ) {
            Object.keys(item.modifiers.options).forEach(group => {
                if (Array.isArray(item.modifiers.options[group])) {
                    customizationGroups[group] = item.modifiers.options[group];
                }
            });
        } else if (Array.isArray(item.modifiers.options)) {
            customizationGroups["Options"] = item.modifiers.options;
        }
        if (item.modifiers.addons && Array.isArray(item.modifiers.addons)) {
            customizationGroups["Add-ons"] = item.modifiers.addons;
        }
        if (item.modifiers.variants && Array.isArray(item.modifiers.variants)) {
            customizationGroups["Variants"] = item.modifiers.variants;
        }
        if (item.modifiers.type_options && Array.isArray(item.modifiers.type_options)) {
            customizationGroups["Type Options"] = item.modifiers.type_options;
        }
    }

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            itemScope
            itemType="https://schema.org/MenuItem"
        >
            <div
                className="relative h-56 md:h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image_url || FALLBACK_IMAGE})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70" />
                <div className="absolute inset-0 flex flex-col justify-end p-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl text-white font-bold" itemProp="name">
                            {item.name}
                        </h3>
                        <Tippy content="View Image">
                            <button
                                onClick={() => onViewImage(item.image_url || FALLBACK_IMAGE)}
                                className="bg-white bg-opacity-80 p-2 rounded-full shadow hover:bg-opacity-100 transition"
                            >
                                <BiCamera className="text-blue-500" size={20} />
                            </button>
                        </Tippy>
                    </div>
                </div>
            </div>
            <div className="p-4 md:p-6">
                <div className="flex justify-between items-center">
                    <div
                        className="text-xl text-blue-600 font-semibold"
                        itemProp="offers"
                        itemScope
                        itemType="https://schema.org/Offer"
                    >
                        <span itemProp="price" content={finalPrice.toFixed(2)}>
                            ${finalPrice.toFixed(2)}
                        </span>
                        <meta itemProp="priceCurrency" content="USD" />
                    </div>
                </div>
                {item.description && (
                    <p className="mt-2 text-gray-700 text-sm" itemProp="description">
                        {item.description}
                    </p>
                )}
                <div className="mt-4 flex items-center space-x-2">
                    {cartEntry ? (
                        <>
                            <button
                                onClick={handleDecreaseQuantity}
                                className="bg-red-500 hover:bg-red-600 transition text-white p-2 rounded-full"
                            >
                                <FaMinus size={14} />
                            </button>
                            <span className="font-semibold">{cartEntry.quantity}</span>
                            <button
                                onClick={handleAddToCart}
                                className="bg-green-500 hover:bg-green-600 transition text-white p-2 rounded-full"
                            >
                                <FaPlus size={14} />
                            </button>
                        </>
                    ) : (
                        <Tippy content="Add to Cart">
                            <button
                                onClick={handleAddToCart}
                                className="flex items-center space-x-1 bg-green-500 hover:bg-green-600 transition text-white px-3 py-2 rounded shadow"
                            >
                                <FaCartPlus size={18} />
                                <span className="text-sm font-medium">Add</span>
                            </button>
                        </Tippy>
                    )}
                </div>
                {Object.keys(customizationGroups).length > 0 && (
                    <div className="mt-4 border-t pt-3">
                        <button
                            onClick={() => setShowOptions(!showOptions)}
                            className="flex items-center text-sm text-blue-500 hover:underline focus:outline-none"
                        >
                            <BiInfoCircle className="mr-1" />
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
                                    {Object.entries(customizationGroups).map(([group, options]) =>
                                        renderOptionGroup(group, options)
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
            </div>
        </motion.div>
    );
}
