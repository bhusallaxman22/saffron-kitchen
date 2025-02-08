import React from 'react'
import { motion } from 'framer-motion'

export default function MealPlan() {
    return (
        <section
            id="meal-plan"
            className="py-20 px-6 text-center"
            style={{ backgroundColor: '#1f1f1f' }}
        >
            <div className="container mx-auto max-w-2xl">
                <motion.h2
                    className="font-extrabold text-5xl text-saffron mb-4 mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Meal Plan Subscription
                </motion.h2>
                <motion.p
                    className="text-gray-300 text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Coming Soon!
                </motion.p>
                <motion.div
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-saffron text-black px-6 py-3 rounded-full font-semibold mt-3"
                >
                    Stay Tuned
                </motion.div>
            </div>
        </section>
    )
}
