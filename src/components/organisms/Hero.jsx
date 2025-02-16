import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import heroVideo from '../../assets/hero-video.mp4';
import { Heading, Subheading } from '../ui/Typography';
import brandDetails from '../../constants/brandDetails';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen overflow-hidden">
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
                    <Heading className={"font-playfair"}>{brandDetails.tagline}</Heading>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <Subheading className="text-white">Experience the best of both cuisines in one place.</Subheading>
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
                </div>
            </div>
        </section>
    );
};

export default Hero;
