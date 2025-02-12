// src/components/templates/Layout.js
import React from 'react';
import NavbarContainer from '../organisms/NavbarContainer';
import Footer from '../organisms/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <NavbarContainer />
            <main className="min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
