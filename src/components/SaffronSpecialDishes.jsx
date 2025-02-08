import React from 'react'
import { motion } from 'framer-motion'

// Example images
import lambSekuwa from '../assets/lamb-sekuwa.jpg'
import butterChicken from '../assets/butter-chicken.jpg'
import momos from '../assets/momos.jpg'
import thakaliThali from '../assets/thakali-thali.jpg'
import { Link } from 'react-router-dom'

const dishes = [
  {
    name: 'Momo (Nepali Dumplings)',
    image: momos,
    description: 'Steamed dumplings with choice of veg or non-veg filling',
  },
  {
    name: 'Butter Chicken',
    image: butterChicken,
    description: 'Creamy tomato-based curry with tender chicken',
  },
  {
    name: 'Masala Dosa',
    image: thakaliThali,
    description: 'Classic South Indian crepe filled with spiced potatoes',
  },
  {
    name: 'Lamb Sekuwa',
    image: lambSekuwa,
    description: 'Marinated lamb grilled to perfection in traditional Nepali spices',
  },
]

export default function SaffronSpecialDishes() {
  return (
    <section id="special-dishes" className="py-20 px-6 bg-gray-900 text-white">
      <div className="container mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-playfair text-4xl mb-4">Saffron Special Dishes</h2>
          <p className="text-gray-300">A glimpse of our signature items</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group relative h-96 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src={dish.image}
                className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                alt={dish.name}
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                <div className="text-white transform translate-y-5 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2">{dish.name}</h3>
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10">
          <Link to="/menu" className="no-underline">
          <button className="bg-saffron text-black px-8 py-3 rounded-full hover:bg-opacity-90 transition-all">
            View Full Menu
          </button>
          </Link>
          <button className="border border-saffron cursor-not-allowed opacity-50 text-saffron px-8 py-3 rounded-full hover:bg-saffron hover:text-black transition-all">
            Order Now
          </button>
        </div>
      </div>
    </section>
  )
}
