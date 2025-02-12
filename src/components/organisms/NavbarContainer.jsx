import React, { useState } from 'react';
import Navbar from '../molecules/Navbar';

export default function NavbarContainer() {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const openMobileMenu = () => setMobileMenuOpen(true);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <Navbar
            isMobileMenuOpen={isMobileMenuOpen}
            onOpenMobileMenu={openMobileMenu}
            onCloseMobileMenu={closeMobileMenu}
        />
    );
}
