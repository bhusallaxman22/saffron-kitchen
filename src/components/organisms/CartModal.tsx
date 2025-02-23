// src/components/organisms/CartModal.tsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

interface CartModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
    const { items, updateQuantity, removeItem, clearCart } = useCart();
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="bg-white rounded-lg shadow-2xl p-6 w-full max-w-lg relative"
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 text-2xl">
                            &times;
                        </button>
                        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                        {items.length === 0 ? (
                            <p className="text-gray-600">Your cart is empty.</p>
                        ) : (
                            <div className="space-y-4">
                                {items.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between border-b pb-3">
                                        <div className="flex items-center space-x-4">
                                            <img src={item.image_url} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                            <div>
                                                <p className="font-semibold">{item.name}</p>
                                                {item.options && (
                                                    <p className="text-xs text-gray-500">
                                                        {Object.entries(item.options)
                                                            .map(([group, option]) => `${group}: ${option.name}`)
                                                            .join(' | ')}
                                                    </p>
                                                )}
                                                <p className="text-sm text-gray-700">
                                                    ${item.price.toFixed(2)} each
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1, item.options)}
                                                className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
                                            >
                                                <FaMinus size={12} />
                                            </button>
                                            <span className="font-semibold">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1, item.options)}
                                                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
                                            >
                                                <FaPlus size={12} />
                                            </button>
                                            <button
                                                onClick={() => removeItem(item.id, item.options)}
                                                className="text-red-500 ml-2"
                                            >
                                                <FaTrash size={14} />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                                <div className="flex justify-between items-center pt-4 border-t">
                                    <span className="text-xl font-bold">Total:</span>
                                    <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
                                </div>
                                <div className="mt-4 flex justify-between items-center">
                                    <button
                                        onClick={clearCart}
                                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
                                    >
                                        Clear Cart
                                    </button>
                                    <Link to="/checkout" onClick={onClose} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                                        Checkout
                                    </Link>
                                </div>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
