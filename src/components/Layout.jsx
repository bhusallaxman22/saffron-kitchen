// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            {/* Use a creamy white background with dark text and our chosen fonts */}
            <main className="min-h-screen bg-[#f9f9f9] text-gray-900 font-poppins">
                {children}
            </main>
            <Footer />
        </>
    );
}
