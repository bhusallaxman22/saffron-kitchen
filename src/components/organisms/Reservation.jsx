import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { Heading, Subheading } from "../ui/Typography";

const Reservation = () => {
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
        <section id="reservation" className="py-20 px-6 bg-[#f9f9f9] text-center">
            <div className="container mx-auto max-w-2xl">
                <Heading>Make a Reservation</Heading>
                <p className="text-gray-700 text-xl mb-2">{availability}</p>
                <Subheading>
                    Reserve your table for a futuristic dining experience.
                </Subheading>
                {/* Wrap the form with FoodEstablishmentReservation schema */}
                <form
                    className="space-y-6 mt-8"
                    itemScope
                    itemType="https://schema.org/FoodEstablishmentReservation"
                >
                    {/* Optional meta for the restaurant name */}
                    <meta itemProp="reservationFor" content="Saffron Kitchen & Bar" />
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Your Name"
                            aria-label="Name"
                            className="mt-1 w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                            required
                            itemProp="underName" // person making the reservation
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            aria-label="Email"
                            className="mt-1 w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                            required
                            itemProp="email"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                                Date
                            </label>
                            <input
                                id="date"
                                type="date"
                                aria-label="Date"
                                className="mt-1 w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                                required
                                itemProp="startTime"
                            />
                        </div>
                        <div className="w-1/2">
                            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                                Time
                            </label>
                            <input
                                id="time"
                                type="time"
                                aria-label="Time"
                                className="mt-1 w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                                required
                                itemProp="startTime"
                            />
                        </div>
                    </div>
                    <animated.button
                        type="submit"
                        style={buttonStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="w-full bg-yellow-400 text-black py-4 rounded-lg transition text-xl font-bold shadow-md"
                    >
                        Book Now
                    </animated.button>
                </form>
            </div>
        </section>
    );
};

export default Reservation;
