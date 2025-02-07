import React, { useState, useContext } from 'react';
import { Link } from 'react-scroll';
import { FiSun, FiMoon, FiHome, FiCoffee, FiInfo, FiMail } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

const navigation = [
  { name: 'Home', to: 'hero', icon: <FiHome className="inline-block mr-1" /> },
  { name: 'Menu', to: 'menu', icon: <FiCoffee className="inline-block mr-1" /> },
  { name: 'About', to: 'about', icon: <FiInfo className="inline-block mr-1" /> },
  { name: 'Contact', to: 'reservation', icon: <FiMail className="inline-block mr-1" /> },
];

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50" style={{ backgroundColor: 'var(--bg-color)', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>Saffron</span>
          <span className="text-sm uppercase tracking-wider">Kitchen & Bar</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <Link key={item.name} to={item.to} smooth={true} duration={500} className="cursor-pointer hover:text-var(--accent-color)">
              {item.icon}
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center space-x-4">
          <button onClick={toggleTheme} className="focus:outline-none">
            {theme === 'dark' ? (
              <FiSun className="w-6 h-6" style={{ color: 'var(--accent-color)' }} />
            ) : (
              <FiMoon className="w-6 h-6" style={{ color: 'var(--accent-color)' }} />
            )}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden focus:outline-none">
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
              <span className="block w-6 h-0.5 bg-current"></span>
            </div>
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="px-6 py-4 space-y-2">
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} smooth={true} duration={500} onClick={() => setMobileMenuOpen(false)} className="block text-white">
                {item.icon}
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
