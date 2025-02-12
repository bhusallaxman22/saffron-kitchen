import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Subheading } from '../ui/Typography';

export default function MealPlan() {
    return (
        <section id="meal-plan" className="py-20 px-6 bg-[#f9f9f9] text-center">
            <div className="container mx-auto max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Heading className='mt-20'>Meal Plan Subscription</Heading>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Subheading>Coming Soon!</Subheading>
                </motion.div>
                <motion.div
                    initial={{ scale: 0.9 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold mt-3 shadow-lg"
                >
                    Stay Tuned
                </motion.div>
            </div>
        </section>
    );
}
