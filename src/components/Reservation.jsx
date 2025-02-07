// src/components/Reservation.js
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

export default function Reservation() {
  const [availability, setAvailability] = useState('Available');
  

  
  const [buttonStyle, api] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 },
  }));
  
  return (
    <section id="reservation" className="py-20 px-6 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="font-extrabold text-5xl mb-4 text-center">Make a Reservation</h2>
        <p className="text-gray-400 text-center text-xl mb-2">{availability}</p>
        <p className="text-gray-400 text-center text-xl mb-8">
          Reserve your table for a futuristic dining experience.
        </p>
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                aria-label="Name"
                className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron transition transform focus:scale-105"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                aria-label="Email"
                className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron transition transform focus:scale-105"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label htmlFor="date" className="sr-only">Date</label>
                <input
                  id="date"
                  type="date"
                  aria-label="Date"
                  className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron transition transform focus:scale-105"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="time" className="sr-only">Time</label>
                <input
                  id="time"
                  type="time"
                  aria-label="Time"
                  className="w-full p-4 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-saffron transition transform focus:scale-105"
                />
              </div>
            </div>
            <animated.button
              type="submit"
              style={buttonStyle}
              onMouseEnter={() => api.start({ scale: 1.1 })}
              onMouseLeave={() => api.start({ scale: 1 })}
              className="w-full bg-saffron text-black py-4 rounded-lg transition text-xl font-bold"
            >
              Book Now
            </animated.button>
          </form>
        </div>
      </div>
    </section>
  );
}
