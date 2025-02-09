import React from 'react';
import { motion } from 'framer-motion';
import aboutMain from '../../assets/hero-1.jpg';
import aboutSide1 from '../../assets/hero-2.jpg';
import aboutSide2 from '../../assets/butter-chicken.jpg';

export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-[#f9f9f9] text-gray-900">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <motion.h2
            className="font-extrabold text-5xl mb-4 mt-16 text-yellow-400 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-gray-700 text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Welcome to the world of Saffron Kitchen & Bar
          </motion.p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-lg">
              <img
                src={aboutMain}
                alt="About main"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 md:h-52 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={aboutSide1}
                  alt="Side dish 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="h-40 md:h-52 overflow-hidden rounded-xl shadow-lg">
                <img
                  src={aboutSide2}
                  alt="Side dish 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="leading-relaxed space-y-6 text-lg"
          >
            <p>
              Where the rich flavors of India and Nepal come together to create
              an unforgettable dining experience. We are passionate about
              bringing you the authentic tastes of these diverse cuisines with
              a modern twist, while honoring tradition.
            </p>
            <h3 className="text-2xl font-semibold">Our Story</h3>
            <p>
              At Saffron Kitchen & Bar, food is not just about nourishment—it’s
              about experience, culture, and creativity. With 15 years of
              culinary expertise, our chef has honed his craft across four
              countries—India, Japan, Dubai, and the USA. This global journey
              has inspired our menu, blending traditional Indian and Nepali
              flavors with contemporary techniques to offer dishes that are
              both innovative and deeply rooted in authenticity.
            </p>
            <p>
              We are constantly exploring new flavors and ingredients, which is
              why our menu is always evolving. Every dish we serve is a
              reflection of our dedication to quality, sustainability, and a
              deep respect for the culinary heritage of India and Nepal.
            </p>
            <h3 className="text-2xl font-semibold">Our Philosophy</h3>
            <p>
              Our philosophy is simple: food should be an adventure. We want to
              transport you to the vibrant streets of India and the serene
              mountain landscapes of Nepal, all while you savor our carefully
              crafted dishes.
            </p>
            <h3 className="text-2xl font-semibold">Join Us</h3>
            <p>
              From the first bite to the last, we want every moment at Saffron
              Kitchen & Bar to be special. Whether you're a connoisseur of
              Indian and Nepali food or new to these cuisines, we invite you to
              explore our menu and discover the love and passion we put into
              every dish.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
