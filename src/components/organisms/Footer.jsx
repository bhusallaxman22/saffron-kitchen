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
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
                        <a
                            href={`https://www.google.com/maps/place/${encodeURIComponent(brandDetails.contact.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-saffron"
                        >
                            Address: {brandDetails.contact.address}
                        </a>
                        <br />
                        <a href={`tel:${brandDetails.contact.phone}`} className="hover:text-saffron">
                            Phone: {brandDetails.contact.phone}
                        </a>
                        <br />
                        <a href={`mailto:${brandDetails.contact.email}`} className="hover:text-saffron">
                            Email: {brandDetails.contact.email}
                        </a>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                        <div className="flex gap-4">
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
                    <p>Monday - Thursday: {brandDetails.operatingHours.mondayToThursday}</p>
                    <p>Friday - Sunday: {brandDetails.operatingHours.fridayToSunday}</p>
                </div>
            </div>
            <div className="text-center mt-6 text-sm text-gray-500">
                &copy; {new Date().getFullYear()} {brandDetails.name}. All rights reserved.
            </div>
        </footer>
    );
}
