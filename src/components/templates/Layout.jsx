// src/components/templates/Layout.js
import React from 'react';
import NavbarContainer from '../organisms/NavbarContainer';
import Footer from '../organisms/Footer';
import { ToastContainer } from 'react-toastify';

const Layout = ({ children }) => {
    return (
        <>
            <ToastContainer />
            <NavbarContainer />
            <main className="min-h-screen mt-16">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
