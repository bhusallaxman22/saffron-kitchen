import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '../../assets/hero-video.mp4';
import { Heading, Subheading } from '../ui/Typography';
import brandDetails from '../../constants/brandDetails';

const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen overflow-hidden"
            itemScope
            itemType="https://schema.org/Restaurant"
        >
            {/* Include restaurant name for microdata */}
            <meta itemProp="name" content="Saffron Kitchen & Bar" />
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <Heading className="font-playfair" itemProp="description">
                        {brandDetails.tagline}
                    </Heading>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <Subheading className="text-white">
                        Experience the best of both cuisines in one place.
                    </Subheading>
                </motion.div>
                <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <Link to="/menu">
                        <button className="bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-all">
                            Explore Our Menu
                        </button>
                    </Link>
                    <a href="#reservation">
                        <button className="border border-yellow-400 text-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all">
                            Reserve a Table
                        </button>
                    </a>
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="mt-8"
                        >
                            <a
                                href="#happy-hour"
                                className="group relative display-block text-amber-500 hover:text-amber-400 transition-colors duration-300 text-lg font-medium"
                            >
                                <div className="flex items-center gap-2">
                                    <motion.span
                                        animate={{ rotate: [0, 15, -15, 0] }}
                                        transition={{ repeat: Infinity, duration: 4 }}
                                        className="text-xl"
                                    >
                                        ✨
                                    </motion.span>

                                    <span className="relative">
                                        Happy Hour Specials
                                        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-amber-400 group-hover:w-full transition-all duration-300 origin-left" />
                                    </span>

                                    <motion.div
                                        animate={{ x: [-5, 5, -5] }}
                                        transition={{ repeat: Infinity, duration: 1.5 }}
                                        className="text-xl ml-2"
                                    >
                                        ↯
                                    </motion.div>
                                </div>

                                {/* Subtle floating particles */}
                                <div className="absolute -top-3 -left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {[...Array(3)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="absolute w-1 h-1 bg-amber-400 rounded-full"
                                            initial={{ scale: 0 }}
                                            animate={{
                                                scale: [0, 1, 0],
                                                x: Math.random() * 20 - 10,
                                                y: Math.random() * 20 - 10
                                            }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.3
                                            }}
                                        />
                                    ))}
                                </div>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
