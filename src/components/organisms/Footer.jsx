import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import brandDetails from '../../constants/brandDetails';

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
        <footer className="bg-creamy-white text-gray-900 py-8 px-6">
            <div className="container mx-auto">
                {/* Main Row: Newsletter, Contact & Hours */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 border-b border-gray-300 pb-6">
                    {/* Contact Info */}
                    <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                        <p className="text-base">{brandDetails.contact.address}</p>
                        <p className="text-base">Phone: {brandDetails.contact.phone}</p>
                        <p className="text-base">Email: {brandDetails.contact.email}</p>
                        <div className="flex gap-3 mt-2">
                            <a href={brandDetails.social.instagram} target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={20} className="hover:text-saffron" />
                            </a>
                            <a href={brandDetails.social.facebook} target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={20} className="hover:text-saffron" />
                            </a>
                        </div>
                    </div>
                    {/* Newsletter Signup */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-sm mx-auto md:mx-0">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saffron"
                                value={newsletter.name}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saffron"
                                value={newsletter.email}
                                onChange={handleChange}
                                required
                            />
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                className="w-full bg-saffron text-white py-2 rounded font-semibold"
                                type="submit"
                            >
                                Subscribe
                            </motion.button>
                        </form>
                    </div>
                    {/* Hours of Operation */}
                    <div className="flex-1 text-left md:text-right">
                        <h3 className="text-xl font-bold mb-2">Hours of Operation</h3>
                        <p className="text-base"><strong>Wed - Mon:</strong> {brandDetails.operatingHours.wednesdayToMonday}</p>
                        <p className="text-base"><strong>Tuesday:</strong> {brandDetails.operatingHours.tuesday}</p>
                    </div>
                </div>


                {/* Bottom Section: Copyright */}
                <div className="mt-4 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} {brandDetails.name}. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
