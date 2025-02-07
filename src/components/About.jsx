import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold" style={{ color: 'var(--accent-color)' }}>Our Story</h2>
          <p className="mt-2 text-lg" style={{ color: 'var(--text-color)' }}>Where tradition meets innovation</p>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <p className="text-center text-lg" style={{ color: 'var(--text-color)' }}>
            Saffron Kitchen & Bar blends classic culinary traditions with futuristic inspiration to create an immersive dining experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
