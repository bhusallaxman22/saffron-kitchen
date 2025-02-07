// src/components/Menu.js
import React from 'react';
import { Tab } from '@headlessui/react';
import { motion } from 'framer-motion';
import { FiCoffee, FiFastForward, FiSunrise } from 'react-icons/fi';
import { menuItems } from '../data/menuItems';

const categoryIcons = {
  Breakfast: <FiSunrise />,
  Lunch: <FiCoffee />,
  Dinner: <FiFastForward />,
};

export default function Menu() {
  return (
    <section id="menu" className="py-20" style={{ backgroundColor: 'var(--bg-color)' }}>
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-extrabold text-5xl text-white mb-4" style={{ color: 'var(--accent-color)' }}>Our Futuristic Menu</h2>
          <p className="text-gray-300 text-xl" style={{ color: 'var(--text-color)' }}>
            Innovative dishes that push the boundaries of taste
          </p>
        </motion.div>
        {/* Top-level Tabs */}
        <Tab.Group>
          <Tab.List className="flex flex-wrap gap-4 justify-center mb-12">
            {Object.keys(menuItems).map((category) => (
              <Tab key={category}>
                {({ selected }) => (
                  <motion.button
                    className={`px-6 py-2 rounded-full transition-colors ${selected
                        ? 'bg-[var(--accent-color)] text-[var(--bg-color)]'
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200'}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {categoryIcons[category]} {category}
                  </motion.button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {Object.entries(menuItems).map(([category, subcategories]) => (
              <Tab.Panel key={category}>
                {/* Second-level Tabs */}
                <Tab.Group>
                  <Tab.List className="flex justify-center gap-4 mb-8">
                    {Object.keys(subcategories).map((subcategory) => (
                      <Tab key={subcategory}>
                        {({ selected }) => (
                          <motion.button
                          className={`px-4 py-2 rounded-full transition-colors ${
                            selected
                              ? 'bg-[var(--accent-color)] text-[var(--bg-color)]'
                              : 'bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200'
                          }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {subcategory}
                          </motion.button>
                        )}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels>
                    {Object.entries(subcategories).map(([subcategory, items]) => (
                      <Tab.Panel key={subcategory}>
                        <div className="grid md:grid-cols-2 gap-8">
                          {items.map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="p-6 bg-white bg-opacity-10 backdrop-blur-md rounded-xl shadow-2xl hover:shadow-3xl transition-all flex items-center gap-4"
                              whileHover={{ y: -10, scale: 1.02 }}
                            >
                              {item.image && (
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="w-12 h-12 rounded-full object-cover border-2"
                                  style={{ borderColor: 'var(--accent-color)' }}                                />
                              )}
                              <div className="flex flex-col w-full">
                                <div className="flex justify-between items-center">
                                  <h4 className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>{item.name}</h4>
                                  <span className="text-saffron font-bold text-lg" style={{ color: 'var(--text-color)' }}>{item.price}</span>
                                </div>
                                <p className="text-gray-300 mt-1">{item.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  );
}
