// src/pages/CheckoutSuccess.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function CheckoutSuccess() {
    return (
        <div className="p-6 max-w-xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-green-600">Payment Successful!</h2>
            <p className="text-lg mb-6">Thank you for your order. Your food will be prepared shortly.</p>
            <Link to="/" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded transition">
                Back to Home
            </Link>
        </div>
    );
}
