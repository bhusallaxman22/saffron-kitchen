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
        <footer className="bg-creamy-white text-gray-900 py-10 px-6">
            <div className="container mx-auto">
                {/* Top Section: Contact & Hours */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-300 pb-6 mb-6">
                    {/* Contact & Social */}
                    <div className="mb-6 md:mb-0">
                        <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
                        <p className="text-lg">{brandDetails.contact.address}</p>
                        <p className="text-lg mt-1">Phone: {brandDetails.contact.phone}</p>
                        <p className="text-lg mt-1">Email: {brandDetails.contact.email}</p>
                        <div className="flex gap-4 mt-2">
                            <a
                                href={brandDetails.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-saffron"
                            >
                                <FaInstagram size={24} />
                            </a>
                            <a
                                href={brandDetails.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-saffron"
                            >
                                <FaFacebook size={24} />
                            </a>
                        </div>
                    </div>
                    {/* Hours of Operation */}
                    <div className="text-right">
                        <h3 className="text-2xl font-bold mb-2">Hours of Operation</h3>
                        <p className="text-lg">
                            <strong>Wed - Mon:</strong> {brandDetails.operatingHours.wednesdayToMonday}
                        </p>
                        <p className="text-lg mt-1">
                            <strong>Tuesday:</strong> {brandDetails.operatingHours.tuesday}
                        </p>
                    </div>
                </div>
                {/* Newsletter Signup */}
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-bold mb-2">Newsletter Signup</h3>
                    <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saffron"
                            value={newsletter.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-saffron"
                            value={newsletter.email}
                            onChange={handleChange}
                            required
                        />
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            className="w-full bg-saffron text-white p-3 rounded font-semibold"
                            type="submit"
                        >
                            Subscribe
                        </motion.button>
                    </form>
                </div>
            </div>
            {/* Bottom Section: Copyright */}
            <div className="mt-6 text-center text-sm text-gray-500">
                &copy; {new Date().getFullYear()} {brandDetails.name}. All rights reserved.
            </div>
        </footer>
    );
}
