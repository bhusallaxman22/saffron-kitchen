// src/components/Hero.js
import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import VideoBackground from '../assets/hero-video.mp4';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
        <source src={VideoBackground} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-70" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="font-extrabold text-6xl md:text-8xl text-white drop-shadow-2xl"
          style={{ color: 'var(--accent-color)' }}
        >
          FUTURISTIC FLAVORS
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-4 text-xl md:text-2xl text-gray-300 max-w-2xl"
          style={{ color: 'var(--text-color)' }}

        >
          Experience the next evolution in culinary artistry at Saffron Kitchen & Bar.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.1, rotate: 2 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-10 py-4 bg-saffron text-black font-bold rounded-full uppercase tracking-widest transition transform"
          style={{ backgroundColor: 'var(--accent-color)', color: 'var(--bg-color)' }}

        >
          Explore Menu
        </motion.button>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, repeat: Infinity, repeatType: 'mirror' }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <FiChevronDown className="w-10 h-10 animate-bounce" />
      </motion.div>
    </section>
  );
}
