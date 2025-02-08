import React from 'react'
import { motion } from 'framer-motion'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

// Replace these images with your own
import hero1 from '../assets/hero-1.jpg'
import hero2 from '../assets/hero-2.jpg'
import hero3 from '../assets/hero-3.jpg'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen"
      style={{ scrollSnapAlign: 'start' }}
    >
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        className="h-full"
      >
        {[hero1, hero2, hero3].map((heroImage, index) => (
          <div key={index} className="h-screen relative">
            <img
              src={heroImage}
              className="h-full w-full object-cover"
              alt={`Hero ${index + 1}`}
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center text-white space-y-6 px-4"
              >
                <motion.h1
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  className="font-playfair text-4xl md:text-6xl lg:text-7xl"
                >
                  Authentic Indian & Nepali Flavors,
                  <br className="hidden md:block" /> Crafted with Passion.
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <p className="text-lg md:text-xl">
                    Experience the best of both cuisines in one place.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link to="/menu" style={{ textDecoration: 'none' }}>
                      <button className="bg-saffron text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
                        Explore Our Menu
                      </button>
                    </Link>
                    <Link to="/reservation" style={{ textDecoration: 'none' }}>
                      <button className="border border-saffron text-saffron px-6 py-3 rounded-full hover:bg-saffron hover:text-black transition-all">
                        Reserve a Table
                      </button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  )
}
