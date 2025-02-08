import React from 'react'
import { motion } from 'framer-motion'

export default function CallToAction() {
    return (
        <section className="py-20 px-6 bg-white text-center">
            <div className="container mx-auto max-w-3xl">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Ready to Taste the Best of India & Nepal?
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-gray-600 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Book your table now and enjoy an unforgettable dining experience.
                </motion.p>

                <motion.button
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-saffron text-black py-3 px-8 rounded-full font-semibold hover:bg-opacity-90 transition-all"
                >
                    Reserve a Table
                </motion.button>
            </div>
        </section>
    )
}
