// src/components/organisms/Catering.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heading, Subheading } from '../ui/Typography';

const Catering = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        eventDate: '',
        location: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Catering form submitted', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
        setFormData({
            name: '',
            email: '',
            contactNumber: '',
            eventDate: '',
            location: '',
            message: '',
        });
    };

    return (
        <section id="catering" className="py-20 px-6 bg-[#f9f9f9]">
            <div className="container mx-auto max-w-xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <Heading>Catering</Heading>
                </motion.div>
                <motion.p
                    className="text-center text-gray-700 text-xl mb-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Let us cater your next event. Please fill out the form below and one of our team members will get back to you soon.:
                </motion.p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
                            Contact Number
                        </label>
                        <input
                            name="contactNumber"
                            type="tel"
                            placeholder="Contact Number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="mt-1 w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
                            Event Date
                        </label>
                        <input
                            name="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="mt-1 w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                            Event Location
                        </label>
                        <input
                            name="location"
                            type="text"
                            placeholder="Event Location"
                            value={formData.location}
                            onChange={handleChange}
                            className="mt-1 w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Additional Message
                        </label>
                        <textarea
                            name="message"
                            placeholder="Tell us more about your event..."
                            value={formData.message}
                            onChange={handleChange}
                            className="mt-1 w-full p-4 bg-gray-200 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full bg-yellow-400 text-black py-4 rounded-lg text-xl font-bold shadow-lg"
                        type="submit"
                    >
                        Submit Catering Request
                    </motion.button>
                </form>
            </div>
        </section>
    );
};

export default Catering;
