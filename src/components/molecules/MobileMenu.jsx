import React from 'react';
import { motion } from 'framer-motion';
import IconButton from '../ui/IconButton';
import MobileMenuList from './MobileMenuList';

export default function MobileMenu({ onClose }) {
    return (
        <div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex md:hidden"
            onClick={onClose}
        >
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="bg-white w-72 h-full shadow-lg rounded-r-lg p-4"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end">
                    <IconButton icon="close" onClick={onClose} label="Close menu" />
                </div>
                <MobileMenuList onItemClick={onClose} />
            </motion.div>
        </div>
    );
}
