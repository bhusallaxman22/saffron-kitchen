// src/components/Reservation.js
import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Reservation() {
  const [availability] = useState("Available");

  const [buttonStyle, api] = useSpring(() => ({
    scale: 1,
    config: { tension: 300, friction: 10 },
  }));

  const handleMouseEnter = () => {
    api.start({ scale: 1.1 });
  };

  const handleMouseLeave = () => {
    api.start({ scale: 1 });
  };

  return (
    <section
      id="reservation"
      className="py-20 px-6 bg-[#f9f9f9] text-gray-900 text-center"
    >
      <div className="container mx-auto max-w-2xl">
        <h2 className="font-extrabold text-5xl mb-4 font-playfair">
          Make a Reservation
        </h2>
        <p className="text-gray-700 text-xl mb-2">{availability}</p>
        <p className="text-gray-700 text-xl mb-8">
          Reserve your table for a futuristic dining experience.
        </p>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              aria-label="Name"
              className="w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              aria-label="Email"
              className="w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
              required
            />
          </div>
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="date" className="sr-only">
                Date
              </label>
              <input
                id="date"
                type="date"
                aria-label="Date"
                className="w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                required
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="time" className="sr-only">
                Time
              </label>
              <input
                id="time"
                type="time"
                aria-label="Time"
                className="w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                required
              />
            </div>
          </div>
          <animated.button
            type="submit"
            style={buttonStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full bg-yellow-400 text-black py-4 rounded-lg transition text-xl font-bold"
          >
            Book Now
          </animated.button>
        </form>
      </div>
    </section>
  );
}
