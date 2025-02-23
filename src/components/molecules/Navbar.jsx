import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../ui/BrandLogo';
import DesktopNav from './DesktopNav';
import IconButton from '../ui/IconButton';
import MobileMenu from './MobileMenu';
import CartIcon from '../atoms/CartIcon';
import CartModal from '../organisms/CartModal';

export default function Navbar({ isMobileMenuOpen, onOpenMobileMenu, onCloseMobileMenu }) {
    const [isCartOpen, setCartOpen] = useState(false);

    const toggleCart = () => setCartOpen((prev) => !prev);

    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                <Link to="/">
                    <BrandLogo />
                </Link>
                <DesktopNav />
                <div className="flex items-center space-x-4">
                    <CartIcon onClick={toggleCart} />
                    <div className="md:hidden">
                        <IconButton icon="menu" onClick={onOpenMobileMenu} label="Open mobile menu" />
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && <MobileMenu onClose={onCloseMobileMenu} />}
            <CartModal isOpen={isCartOpen} onClose={toggleCart} />
        </header>
    );
}
