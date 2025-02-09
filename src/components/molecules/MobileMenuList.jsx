import React from 'react';
import NavItem from './NavItem';
import { navItems } from '../../constants/navItems';

export default function MobileMenuList({ onItemClick }) {
    return (
        <ul className="mt-4 space-y-4">
            {navItems.map(item => (
                <NavItem key={item.name} item={item} onClick={onItemClick} />
            ))}
        </ul>
    );
}
