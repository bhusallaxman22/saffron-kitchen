import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Catering() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contactNumber: '',
        eventDate: '',
        location: '',
        message: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle form submission logic
        console.log('Catering form submitted', formData)
        alert('Thank you for your inquiry! We will get back to you soon.')
    }

    return (
        <section id="catering" className="py-20 px-6 bg-gray-900 text-white">
            <div className="container mx-auto max-w-xl">
                <motion.h2
                    className="font-extrabold text-5xl text-saffron mb-4 mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Catering
                </motion.h2>
                <p className="text-center text-gray-300 text-xl mb-10">
                    Let us cater your next event. Please fill out the form below:
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="sr-only">
                            Name
                        </label>
                        <input
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron transition transform focus:scale-105"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="sr-only">
                            Email
                        </label>
                        <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron transition transform focus:scale-105"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="contactNumber" className="sr-only">
                            Contact Number
                        </label>
                        <input
                            name="contactNumber"
                            type="tel"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            placeholder="Contact Number"
                            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron transition transform focus:scale-105"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="eventDate" className="sr-only">
                            Event Date
                        </label>
                        <input
                            name="eventDate"
                            type="date"
                            value={formData.eventDate}
                            onChange={handleChange}
                            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron transition transform focus:scale-105"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="location" className="sr-only">
                            Event Location
                        </label>
                        <input
                            name="location"
                            type="text"
                            value={formData.location}
                            onChange={handleChange}
                            placeholder="Event Location"
                            className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron transition transform focus:scale-105"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="sr-only">
                            Additional Message
                        </label>
                        <textarea
                            name="message"
                            placeholder="Tell us more about your event..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-4 bg-gray-800 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-saffron transition transform focus:scale-105"
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="w-full bg-saffron text-black py-4 rounded-lg text-xl font-bold"
                        type="submit"
                    >
                        Submit Catering Request
                    </motion.button>
                </form>
            </div>
        </section>
    )
}
