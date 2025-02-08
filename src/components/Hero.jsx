// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '../assets/hero-video.mp4';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
          <Link to="/menu">
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
              Explore Our Menu
            </button>
          </Link>
          <a href="/#reservation">
            <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
              Reserve a Table
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
