import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../constants/navItems';

export default function DesktopNav() {
    return (
        <ul className="hidden md:flex space-x-8">
            {navItems.map(item => (
                <li key={item.name}>
                    <Link to={item.path} className="text-lg font-medium text-gray-900 hover:text-yellow-400 transition-colors">
                        {item.name}
                    </Link>
                </li>
            ))}
        </ul>
    );
}
