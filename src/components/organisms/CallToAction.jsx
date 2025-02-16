import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { Heading, Subheading } from '../ui/Typography';

export default function CallToAction() {
    return (
        <section className="py-20 px-6 bg-white shadow-md text-center">
            <div className="container mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Heading>Ready to Taste the Best of India & Nepal?</Heading>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <Subheading>Book your table now and enjoy an unforgettable dining experience.</Subheading>
                </motion.div>
                <a href="#reservation" className="mt-6 inline-block">
                    <Button>Reserve a Table</Button>
                </a>
            </div>
        </section>
    );
}
