// src/pages/HomePage.js
import React from 'react';
import Hero from '../components/Hero';
import SaffronSpecialDishes from '../components/SaffronSpecialDishes';
import CallToAction from '../components/CallToAction';
import Reservation from '../components/Reservation';
import Testimonials from '../components/Testimonials';

export default function HomePage() {
    return (
        <>
            <Hero />
            <SaffronSpecialDishes />
            <CallToAction />
            <Reservation />
            <Testimonials />
        </>
    );
}
