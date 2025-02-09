import React from 'react';

export default function IconButton({ icon, onClick, label }) {
    const icons = {
        menu: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-900">
                <line x1="3" y1="7" x2="21" y2="7" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round" />
                <line x1="3" y1="17" x2="21" y2="17" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
        close: (
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-900">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        ),
    };

    return (
        <button onClick={onClick} aria-label={label} className="p-2">
            {icons[icon]}
        </button>
    );
}
