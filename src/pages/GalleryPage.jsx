import React from 'react';
import { motion } from 'framer-motion';
import galleryImage1 from '../assets/hero-1.jpg';
import galleryImage2 from '../assets/butter-chicken.jpg';
import galleryImage3 from '../assets/hero-3.jpg';

const galleryImages = [
    { src: galleryImage1, alt: 'Gallery 1' },
    { src: galleryImage2, alt: 'Gallery 2' },
    { src: galleryImage3, alt: 'Gallery 3' },
];

export default function GalleryPage() {
    return (
        <div className="py-20 px-6 bg-[#f9f9f9] text-gray-900">
            <div className="container mx-auto text-center mb-10">
                <motion.h2
                    className="font-playfair text-5xl text-yellow-400 mb-4 mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Our Gallery
                </motion.h2>
                <motion.p
                    className="text-gray-700 text-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    A glimpse into the world of Saffron Kitchen & Bar.
                </motion.p>
            </div>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {galleryImages.map((img, idx) => (
                    <motion.div
                        key={idx}
                        className="overflow-hidden rounded-lg shadow-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <img
                            src={img.src}
                            alt={img.alt}
                            className="object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
