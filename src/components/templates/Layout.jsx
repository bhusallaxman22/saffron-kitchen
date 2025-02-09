import React from 'react';
import NavbarContainer from '../organisms/NavbarContainer';
import Footer from '../organisms/Footer'; // Assume you have a Footer component

export default function Layout({ children }) {
    return (
        <>
            <NavbarContainer />
            <main className="min-h-screen bg-[#f9f9f9] text-gray-900">
                {children}
            </main>
            <Footer />
        </>
    );
}
