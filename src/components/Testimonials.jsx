// src/components/Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/solid';
import { MapIcon, PhoneIcon } from '@heroicons/react/outline';

const testimonials = [
  {
    name: 'Sarah Johnson',
    text: "An immersive culinary experience that fuses art and technology.",
    rating: 5,
  },
  {
    name: 'Michael Chen',
    text: 'A futuristic dining journey that tantalizes every sense.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-black opacity-70" />
      <div className="relative container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="mb-12 text-center lg:text-left"
            >
              <h2 className="font-extrabold text-5xl mb-4">What Our Guests Say</h2>
              <p className="text-gray-400 text-xl">Insights from culinary enthusiasts</p>
            </motion.div>
            <div className="space-y-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-md"
                >
                  <div className="flex items-center mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-saffron mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 15.75l-4.5 4.5m0 0l4.5-4.5m-4.5 4.5h18" />
                    </svg>
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="h-6 w-6 text-saffron" />
                      ))}
                    </div>
                  </div>
                  <p className="italic mb-2">"{testimonial.text}"</p>
                  <p className="font-bold">- {testimonial.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white bg-opacity-10 p-8 rounded-xl shadow-2xl h-fit"
          >
            <h3 className="font-extrabold text-3xl mb-6 text-white">Opening Hours</h3>
            <div className="space-y-4 mb-8 text-lg text-gray-300">
              <div className="flex justify-between">
                <span>Monday - Thursday</span>
                <span>11:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Friday - Sunday</span>
                <span>11:00 AM - 11:00 PM</span>
              </div>
            </div>
            <div className="space-y-4 text-lg text-gray-300">
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-6 w-6 text-saffron" />
                <span>+977-1-1234567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapIcon className="h-6 w-6 text-saffron" />
                <span>123 Spice Street, Kathmandu</span>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="w-full mt-8 bg-saffron text-black py-3 rounded-full transition-all text-xl font-bold"
            >
              Make a Reservation
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
