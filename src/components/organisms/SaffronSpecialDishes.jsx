import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import menuData from "../../constants/menuItems";
import { GiPlantSeed } from "react-icons/gi";
import { FaLeaf, FaPepperHot } from "react-icons/fa";

export default function SaffronSpecialDishes() {
    const specialsCategory = menuData.menu.find((cat) => cat.category === "Saffron Specials");
    const dishes = specialsCategory && specialsCategory.items ? specialsCategory.items : [];
    const [selectedDish, setSelectedDish] = useState(null);
    const scrollRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const checkForScrollPosition = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
        }
    };

    useEffect(() => {
        checkForScrollPosition();
        const scrollContainer = scrollRef.current;
        scrollContainer.addEventListener("scroll", checkForScrollPosition);
        window.addEventListener("resize", checkForScrollPosition);
        return () => {
            scrollContainer.removeEventListener("scroll", checkForScrollPosition);
            window.removeEventListener("resize", checkForScrollPosition);
        };
    }, []);

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    return (
        <section id="saffron-specials" className="py-20 bg-[#f9f9f9] text-gray-900 relative overflow-hidden">
            <motion.div
                className="absolute top-[-80px] right-[-80px] w-40 h-40 bg-yellow-400 opacity-20 rounded-full blur-3xl animate-pulse"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            />
            <motion.div
                className="absolute bottom-[-50px] left-[-50px] w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-3xl animate-pulse delay-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-5xl font-bold mb-4 font-playfair text-yellow-400">
                        Saffron Special Dishes
                    </h2>
                    <p className="text-lg text-gray-700">A glimpse of our signature items</p>
                </motion.div>

                <div className="relative">
                    {canScrollLeft && (
                        <button
                            onClick={scrollLeft}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 bg-opacity-75 rounded-full hover:bg-opacity-90"
                            aria-label="Scroll Left"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    )}

                    <div ref={scrollRef} className="flex space-x-6 overflow-x-auto scroll-smooth py-4 snap-x">
                        {dishes.map((dish, index) => (
                            <motion.div
                                key={index}
                                className="min-w-[250px] snap-center h-80 relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white"
                                variants={cardVariants}
                                whileHover={{ scale: 1.05 }}
                                onClick={() => setSelectedDish(dish)}
                            >
                                <img
                                    src={dish.img || "https://via.placeholder.com/300x200?text=No+Image"}
                                    alt={dish.name}
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-end p-4">
                                    <h3 className="text-2xl font-bold break-words font-playfair text-yellow-400">
                                        {dish.name}
                                    </h3>
                                    <p className="text-sm text-gray-100 mt-1">{dish.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {canScrollRight && (
                        <button
                            onClick={scrollRight}
                            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-200 bg-opacity-75 rounded-full hover:bg-opacity-90"
                            aria-label="Scroll Right"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
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

            {selectedDish && (
                <motion.div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setSelectedDish(null);
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative bg-white p-6 rounded-xl shadow-2xl max-w-3xl w-full">
                        <button
                            onClick={() => setSelectedDish(null)}
                            className="absolute top-2 right-2 text-gray-900 bg-gray-200 p-1 rounded-full hover:bg-gray-300 focus:outline-none"
                            title="Close"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="md:w-1/2">
                                <img
                                    src={selectedDish.img || "https://via.placeholder.com/300x200?text=No+Image"}
                                    alt={selectedDish.name}
                                    className="object-cover w-full h-full rounded-lg"
                                />
                            </div>
                            <div className="md:w-1/2">
                                <h3 className="text-3xl font-bold font-playfair text-yellow-400">
                                    {selectedDish.name}
                                </h3>
                                <p className="mt-2 text-gray-800">{selectedDish.description}</p>
                                <p className="mt-2 text-xl font-semibold text-blue-600">
                                    Price: ${selectedDish.price.toFixed(2)}
                                </p>
                                {selectedDish.special && (
                                    <div className="flex space-x-2 mt-2">
                                        {selectedDish.special.includes("vegan") && (
                                            <GiPlantSeed className="w-6 h-6 text-green-500" title="Vegan" />
                                        )}
                                        {selectedDish.special.includes("vegetarian") && (
                                            <FaLeaf className="w-6 h-6 text-green-700" title="Vegetarian" />
                                        )}
                                        {selectedDish.special.includes("spicy") && (
                                            <FaPepperHot className="w-6 h-6 text-red-500" title="Spicy" />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </section>
    );
}
