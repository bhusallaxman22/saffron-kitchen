import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../../components/atoms/BrandLogo';
import DesktopNav from '../../components/molecules/DesktopNav';
import IconButton from '../../components/atoms/IconButton';
import MobileMenu from '../../components/molecules/MobileMenu';

export default function Navbar({ isMobileMenuOpen, onOpenMobileMenu, onCloseMobileMenu }) {
    return (
        <header className="fixed inset-x-0 top-0 z-50 bg-white shadow">
            <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
                <Link to="/">
                    <BrandLogo />
                </Link>
                <DesktopNav />
                <div className="md:hidden">
                    <IconButton icon="menu" onClick={onOpenMobileMenu} label="Open mobile menu" />
                </div>
            </div>
            {isMobileMenuOpen && <MobileMenu onClose={onCloseMobileMenu} />}
        </header>
    );
}
