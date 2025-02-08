// src/components/SaffronSpecialDishes.js
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import menuData from '../data/menuItems';

export default function SaffronSpecialDishes() {
  // Retrieve the Saffron Specials category (make sure your JSON category name matches)
  const specialsCategory = menuData.menu.find(
    (cat) => cat.category === 'Saffron Specials'
  );
  const dishes = specialsCategory && specialsCategory.items ? specialsCategory.items : [];
  const [modalImg, setModalImg] = useState(null);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="saffron-specials" className="py-20 bg-gradient-to-r from-gray-900 to-black text-white relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4">Saffron Special Dishes</h2>
          <p className="text-gray-400">A glimpse of our signature items</p>
        </motion.div>
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75"
            aria-label="Scroll Left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scroll-smooth scrollbar-hide py-4 snap-x"
          >
            {dishes.map((dish, index) => (
              <motion.div
                key={index}
                className="min-w-[250px] snap-center h-80 relative rounded-xl overflow-hidden shadow-xl cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => dish.img && setModalImg(dish.img)}
              >
                <img
                  src={dish.img || 'https://via.placeholder.com/300x200?text=No+Image'}
                  alt={dish.name}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-4">
                  <h3 className="text-2xl font-bold">{dish.name}</h3>
                  <p className="text-sm text-gray-300 mt-1">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 bg-opacity-50 rounded-full hover:bg-opacity-75"
            aria-label="Scroll Right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          <Link to="/menu">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
              View Full Menu
            </button>
          </Link>
          <button className="border border-yellow-400 cursor-not-allowed opacity-50 text-yellow-400 px-8 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
            Order Now
          </button>
        </div>
      </div>
      {modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={(e) => {
            if (e.target === e.currentTarget) setModalImg(null);
          }}
        >
          <div className="relative">
            <img
              src={modalImg}
              alt="Dish Detail"
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              onClick={() => setModalImg(null)}
              className="absolute top-2 right-2 text-white bg-gray-700 p-1 rounded-full focus:outline-none hover:bg-gray-600"
              title="Close"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
