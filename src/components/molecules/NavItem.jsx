import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem({ item, onClick }) {
    return (
        <li onClick={onClick}>
            <Link to={item.path} className="block p-2 text-lg font-medium text-gray-900 hover:text-yellow-400 transition-colors">
                {item.name}
            </Link>
        </li>
    );
}
