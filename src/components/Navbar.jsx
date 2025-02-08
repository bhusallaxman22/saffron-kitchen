// src/components/Navbar.js
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

// Navigation items for desktop and mobile
const navigation = [
  { name: 'Home', path: '/' },
  { name: 'Menu', path: '/menu' },
  { name: 'About Us', path: '/about' },
  { name: 'Meal Plan', path: '/meal-plan' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Catering', path: '/catering' },
];

// Custom hamburger icon (three full lines)
function MobileHamburgerIcon() {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="text-white"
    >
      <line x1="3" y1="7" x2="21" y2="7" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="17" x2="21" y2="17" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Framer Motion variants for mobile menu animation
const mobileMenuVariants = {
  hidden: { x: '100%', opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
};

const mobileMenuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // The header is fixed at the top with a dark background
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed inset-x-0 top-0 z-50 bg-black bg-opacity-80 backdrop-blur-lg shadow-md"
    >
      {/* The nav container is centered on the screen, but its contents are spaced out */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left side: Logo and Brand – aligned to the left */}
        <div className="flex items-center">
          <Link to="/">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Saffron Logo"
                className="h-12 w-auto rounded-full border-2 border-yellow-400 shadow-lg"
              />
            </div>
          </Link>
        </div>

        {/* Right side: Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg font-medium text-white hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right side: Mobile Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
          >
            <MobileHamburgerIcon />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="md:hidden"
      >
        <div className="fixed inset-0 bg-black bg-opacity-50" aria-hidden="true" />
        <Dialog.Panel
          as={motion.div}
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-black p-6 overflow-y-auto"
        >
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/">
              <div className="flex items-center">
                <img
                  src={logo}
                  alt="Saffron Logo"
                  className="h-12 w-auto rounded-full border-2 border-yellow-400 shadow-lg"
                />
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {/* Mobile Navigation List */}
          <motion.ul className="space-y-6" initial="hidden" animate="visible">
            {navigation.map((item) => (
              <motion.li key={item.name} variants={mobileMenuItemVariants}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-medium text-white hover:text-yellow-400 transition-colors"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  );
}
