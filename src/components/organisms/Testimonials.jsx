import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/solid';
import { MapIcon, PhoneIcon } from '@heroicons/react/outline';
import { Heading, Subheading } from '../ui/Typography';

const testimonials = [
    {
        name: 'Aman',
        text: "The best Indian food I've had outside of India! The flavors are incredible.",
        rating: 5,
    },
    {
        name: 'Laxman',
        text: 'Authentic Nepali dishes that remind me of home. Highly recommended!',
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 px-6 relative bg-white shadow-md">
            <div className="absolute inset-0 bg-gray-100 opacity-90"></div>
            <div className="container mx-auto relative">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="text-gray-900">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-16"
                        >
                            <Heading>What Our Guests Say</Heading>
                            <Subheading>Hear from our satisfied customers</Subheading>
                        </motion.div>
                        <div className="space-y-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-200 p-6 rounded-xl shadow-lg"
                                >
                                    <div className="flex items-center mb-3">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                                        ))}
                                    </div>
                                    <p className="mb-2 italic">"{testimonial.text}"</p>
                                    <p className="font-bold">- {testimonial.name}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-200 p-8 rounded-xl shadow-xl h-fit"
                    >
                        <Heading>Opening Hours</Heading>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between">
                                <span>Monday - Thursday</span>
                                <span>11:00 AM - 10:00 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Friday - Sunday</span>
                                <span>11:00 AM - 11:00 PM</span>
                            </div>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <PhoneIcon className="h-5 w-5 text-yellow-400" />
                                <span>(469) 774-9151</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <MapIcon className="h-5 w-5 text-yellow-400" />
                                <span>5005 S Cooper St Suite 163, Arlington, Texas 76017</span>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-full bg-yellow-400 text-black py-3 rounded-full mt-8 hover:bg-opacity-90 transition-all shadow-md"
                        >
                            Make a Reservation
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
