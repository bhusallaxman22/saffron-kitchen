import React from 'react';
import { motion } from 'framer-motion';

export default function Button({ children, className = '', ...rest }) {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            className={`bg-yellow-400 text-black py-3 px-8 rounded-full font-semibold hover:bg-opacity-90 transition-all ${className}`}
            {...rest}
        >
            {children}
        </motion.button>
    );
}
