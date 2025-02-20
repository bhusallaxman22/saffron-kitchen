import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import { showErrorToast, showSuccessToast } from "../atoms/ToastNotification";

const Reservation = () => {
    const [availability] = useState("Available");
    const [loading, setLoading] = useState(false);

    const [buttonStyle, api] = useSpring(() => ({
        scale: 1,
        config: { tension: 300, friction: 10 },
    }));

    const handleMouseEnter = () => api.start({ scale: 1.1 });
    const handleMouseLeave = () => api.start({ scale: 1 });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);

        try {
            await fetch(
                "https://docs.google.com/forms/d/e/1FAIpQLSet1TZdcUGho78ok3hrVs4NJ5hrHeeoOhOH9C5t3QfBM0PJ4A/formResponse",
                {
                    method: "POST",
                    mode: "no-cors",
                    body: formData,
                }
            );

            // Show success toast immediately since response.ok is unreliable
            showSuccessToast("Reservation submitted successfully!");

            // Reset form fields after a slight delay to ensure state updates
            setTimeout(() => {
                e.target.reset();
            }, 500);

        } catch (error) {
            console.error("Submission error:", error);
            showErrorToast("Failed to submit reservation. Please try again!");
        }

        setLoading(false);
    };

    return (
        <section id="reservation" className="py-20 px-6 bg-[#f9f9f9] text-center">
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold mb-2">Make a Reservation</h2>
                <p className="text-gray-700 text-xl mb-2">{availability}</p>
                <p className="text-lg text-gray-600">
                    Reserve your table for a futuristic dining experience.
                </p>

                <form
                    className="space-y-6 mt-8"
                    onSubmit={handleSubmit}
                    itemScope
                    itemType="https://schema.org/FoodEstablishmentReservation"
                >
                    <meta itemProp="reservationFor" content="Saffron Kitchen & Bar" />
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            id="name"
                            name="entry.1297979704"
                            type="text"
                            placeholder="Your Name"
                            aria-label="Name"
                            className="mt-1 w-full p-4 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition transform focus:scale-105 text-gray-900"
                            required
                            itemProp="underName"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="entry.1179072591"
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
                                name="entry.1587582213"
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
                                name="entry.1609539174"
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
                        className={`w-full ${loading ? "bg-gray-400" : "bg-yellow-400"
                            } text-black py-4 rounded-lg transition text-xl font-bold shadow-md`}
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Book Now"}
                    </animated.button>
                </form>
            </div>
        </section>
    );
};

export default Reservation;
