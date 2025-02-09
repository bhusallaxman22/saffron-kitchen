import React from 'react';
import { motion } from 'framer-motion';
import Button from '../atoms/Button';

export default function CallToAction() {
    return (
        <section className="py-20 px-6 bg-white shadow-md text-center">
            <div className="container mx-auto max-w-3xl">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-playfair"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Ready to Taste the Best of India & Nepal?
                </motion.h2>
                <motion.p
                    className="text-lg md:text-xl text-gray-700 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Book your table now and enjoy an unforgettable dining experience.
                </motion.p>
                <a href="#reservation">
                    <Button>Reserve a Table</Button>
                </a>
            </div>
        </section>
    );
}
