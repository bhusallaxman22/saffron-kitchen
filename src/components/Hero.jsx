import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero-video.mp4'; // Replace with your video file

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-playfair text-white mb-4"
        >
          Authentic Indian & Nepali Flavors, <br className="hidden md:block" /> Crafted with Passion.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-white mb-8"
        >
          Experience the best of both cuisines in one place.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link to="/menu" className="no-underline">
            <button className="bg-saffron text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
              Explore Our Menu
            </button>
          </Link>
          <a href="/#reservation" className="no-underline">
            <button className="border border-saffron text-saffron px-6 py-3 rounded-full hover:bg-saffron hover:text-black transition-all">
              Reserve a Table
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
