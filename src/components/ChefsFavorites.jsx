import React from 'react';
import { motion } from 'framer-motion';

const dishes = [
  { name: 'Lamb Sekuwa', image: '/assets/lamb-sekuwa.jpg', description: 'Marinated lamb with a modern twist' },
  { name: 'Butter Chicken', image: '/assets/butter-chicken.jpg', description: 'Creamy and innovative classic' },
  { name: 'Momos', image: '/assets/momos.jpg', description: 'Steamed dumplings reimagined' },
  { name: 'Thakali Thali', image: '/assets/thakali-thali.jpg', description: 'An assortment of tradition and innovation' },
];

export default function ChefsFavorites() {
  return (
    <section id="favorites" className="py-20" style={{ background: 'var(--bg-color)' }}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold" style={{ color: 'var(--accent-color)' }}>Chef's Favorites</h2>
          <p className="mt-2 text-lg" style={{ color: 'var(--text-color)' }}>Handpicked masterpieces</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {dishes.map((dish, idx) => (
            <motion.div key={idx} className="rounded-lg overflow-hidden shadow-md" whileHover={{ scale: 1.02 }}>
              <img src={dish.image} alt={dish.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-2xl font-semibold" style={{ color: 'var(--text-color)' }}>{dish.name}</h3>
                <p className="mt-2 text-sm" style={{ color: 'var(--text-color)' }}>{dish.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
