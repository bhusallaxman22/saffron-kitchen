import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext';

interface CartIconProps {
    onClick: () => void;
}

export default function CartIcon({ onClick }: CartIconProps) {
    const { items } = useCart();
    const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <button onClick={onClick} className="relative p-2">
            <FaShoppingCart size={24} />
            {totalCount > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-red-100 bg-red-600 rounded-full">
                    {totalCount}
                </span>
            )}
        </button>
    );
}
