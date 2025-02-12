import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/solid';
import { MapIcon, PhoneIcon } from '@heroicons/react/outline';
import { Heading, Subheading } from '../ui/Typography';
import brandDetails from '../../constants/brandDetails';

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
                    {/* Testimonials List */}
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
                    {/* Simplified Opening Hours Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-200 p-8 rounded-xl shadow-xl"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Opening Hours</h2>
                        <div className="mb-6">
                            <p className="text-lg text-gray-700">
                                <strong>Wed - Mon:</strong> 11:00 AM - 2:30 PM | 5:00 PM - 10:00 PM
                            </p>
                            <p className="text-lg text-gray-700">
                                <strong>Tuesday:</strong> Closed
                            </p>
                        </div>
                        <div className="mb-6">
                            <div className="flex items-center mb-2">
                                <PhoneIcon className="h-5 w-5 text-yellow-400 mr-2" />
                                <span className="text-lg text-gray-700">(817)-962-0615</span>
                            </div>
                            <div className="flex items-center">
                                <MapIcon className="h-5 w-5 text-yellow-400 mr-2" />
                                <span className="text-lg text-gray-700">{brandDetails.contact.address}</span>
                            </div>
                        </div>
                        <a href="#reservation" className="text-yellow-400 hover:underline">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="w-full bg-yellow-400 text-black py-3 rounded-full hover:bg-opacity-90 transition-all shadow-md"
                            >
                                Make a Reservation
                            </motion.button>
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
