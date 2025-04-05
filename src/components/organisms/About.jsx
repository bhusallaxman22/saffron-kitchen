import React from 'react';
import { motion } from 'framer-motion';
import { Heading, Subheading } from '../ui/Typography';
import aboutMain from '/menuItems/food-samplers.jpg';
import aboutSide1 from '/menuItems/saffron-curry.jpg';
import aboutSide2 from '/menuItems/nepali-salad.jpg';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-[#f9f9f9]">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Heading>About Us</Heading>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <Subheading>Welcome to the world of Saffron Kitchen & Bar</Subheading>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div className="flex flex-col gap-4" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <div className="w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-lg">
              <img src={aboutMain} alt="About main" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-40 md:h-52 overflow-hidden rounded-xl shadow-lg">
                <img src={aboutSide1} alt="Side dish 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="h-40 md:h-52 overflow-hidden rounded-xl shadow-lg">
                <img src={aboutSide2} alt="Side dish 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="leading-relaxed space-y-6 text-lg text-gray-800">
            <p>
              Where the rich flavors of India and Nepal come together to create an unforgettable dining experience. We are passionate about bringing you authentic tastes with a modern twist.
            </p>
            <Heading className="text-3xl">Our Story</Heading>
            <p>
              With 15 years of culinary expertise, our chef has refined his craft across multiple countries. This journey blends traditional techniques with innovative presentation.
            </p>
            <Heading className="text-3xl">Our Philosophy</Heading>
            <p>
              Food should be an adventure. We transport you to vibrant markets and serene landscapes with every dish.
            </p>
            <Heading className="text-3xl">Join Us</Heading>
            <p>
              Every moment at Saffron Kitchen & Bar is crafted with passion and precision. Explore our menu and experience the difference.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
