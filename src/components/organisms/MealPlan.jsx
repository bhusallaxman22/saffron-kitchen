import React from 'react';
import { motion } from 'framer-motion';

export default function MealPlan() {
    return (
        <section id="meal-plan" className="py-20 px-6 text-center bg-[#f9f9f9] text-gray-900">
            <div className="container mx-auto max-w-2xl">
                <motion.h2
                    className="font-extrabold text-5xl text-yellow-400 mb-4 mt-16 font-playfair"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Meal Plan Subscription
                </motion.h2>
                <motion.p
                    className="text-gray-700 text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Coming Soon!
                </motion.p>
                <motion.div
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold mt-3"
                >
                    Stay Tuned
                </motion.div>
            </div>
        </section>
    );
}
