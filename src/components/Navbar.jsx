// src/components/Navbar.js
import React, { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

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
      className="text-gray-900"
    >
      <line x1="3" y1="7" x2="21" y2="7" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="12" x2="21" y2="12" strokeWidth="2" strokeLinecap="round" />
      <line x1="3" y1="17" x2="21" y2="17" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      className="fixed inset-x-0 top-0 z-50 bg-white bg-opacity-90 shadow-md"
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Left side: Logo and Brand */}
        <div className="flex items-center">
          <Link to="/">
            <div className=" bg-gray-400 flex items-center rounded-full p-2">
              <img
                src={logo}
                alt="Saffron Logo"
                className="h-12 w-auto"
              />
            </div>
          </Link>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg font-medium text-gray-900 hover:text-yellow-400 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Mobile Menu Button */}
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
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="md:hidden">
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50" aria-hidden="true" />
        <Dialog.Panel
          as={motion.div}
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white p-6 overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <Link to="/">
              <div className="bg-gray-400 flex items-center rounded-full p-2">
                <img
                  src={logo}
                  alt="Saffron Logo"
                  className="h-12 w-auto"
                />
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-400"
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
          <motion.ul className="space-y-6" initial="hidden" animate="visible">
            {navigation.map((item) => (
              <motion.li key={item.name} variants={mobileMenuItemVariants}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-medium text-gray-900 hover:text-yellow-400 transition-colors"
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
