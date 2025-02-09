// src/components/Footer.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const [newsletter, setNewsletter] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        setNewsletter({ ...newsletter, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thanks, ${newsletter.name}! You have subscribed to our newsletter.`);
        setNewsletter({ name: '', email: '' });
    };

    return (
        <footer className="bg-creamy-white text-gray-900 py-10 px-6">
            <div className="container mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                        <a
                            href="https://www.google.com/maps/place/5005+S+Cooper+St+Suite+163,+Arlington,+Texas+76017"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-saffron"
                        >
                            Address: 5005 S Cooper St Suite 163, Arlington, Texas 76017
                        </a>
                        <br />
                        <a href="tel:+14697749151" className="hover:text-saffron">
                            Phone: (469) 774-9151
                        </a>
                        <br />
                        <a
                            href="mailto:info@saffronkitchenandbar.com"
                            className="hover:text-saffron"
                        >
                            Email: info@saffronkitchenandbar.com
                        </a>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/saffronkitchen_dfw/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-saffron"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-saffron"
                            >
                                <FaFacebook size={24} />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Newsletter Signup</h3>
                        <form onSubmit={handleSubmit} className="space-y-3">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-2 rounded text-gray-900"
                                value={newsletter.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full p-2 rounded text-gray-900"
                                value={newsletter.email}
                                onChange={handleChange}
                                required
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className="bg-saffron text-white px-4 py-2 rounded font-semibold"
                                type="submit"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                </div>
                <div className="text-center border-t border-gray-300 pt-6">
                    <h4 className="text-lg font-bold mb-2">Hours of Operation</h4>
                    <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                    <p>Friday - Sunday: 11:00 AM - 11:00 PM</p>
                </div>
            </div>
            <div className="text-center mt-6 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Saffron Kitchen & Bar. All rights reserved.
            </div>
        </footer>
    );
}