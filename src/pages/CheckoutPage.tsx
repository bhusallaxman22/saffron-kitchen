// src/pages/CheckoutPage.tsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function CheckoutPage() {
    const { items, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleCheckout = async () => {
        setLoading(true);
        setError('');
        try {
            // Create order payload from cart items.
            const orderPayload = {
                items,
                totalAmount: totalPrice,
            };

            // Call your backend endpoint for Clover payment integration.
            // For example, the endpoint might be POST http://localhost:3000/payments/clover/checkout
            const res = await axios.post('http://localhost:3000/payments/clover/checkout', orderPayload);
            if (res.data.success) {
                // Payment initiated successfully.
                clearCart();
                navigate('/checkout-success');
            } else {
                setError('Payment initiation failed. Please try again.');
            }
        } catch (err) {
            console.error(err);
            setError('An error occurred during checkout.');
        }
        setLoading(false);
    };

    if (items.length === 0) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Checkout</h2>
                <p>Your cart is empty.</p>
            </div>
        );
    }

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-3">
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
                                ${item.price.toFixed(2)} x {item.quantity}
                            </p>
                        </div>
                        <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                ))}
                <div className="flex justify-between items-center pt-4 border-t">
                    <span className="text-xl font-bold">Total:</span>
                    <span className="text-xl font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                <button
                    onClick={handleCheckout}
                    disabled={loading}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition mt-4"
                >
                    {loading ? 'Processing Payment...' : 'Proceed to Payment'}
                </button>
            </div>
        </div>
    );
}
