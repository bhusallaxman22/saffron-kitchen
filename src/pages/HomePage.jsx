import React from 'react';
import Hero from '../components/organisms/Hero';
import SaffronSpecialDishes from '../components/organisms/SaffronSpecialDishes';
import CallToAction from '../components/organisms/CallToAction';
import Reservation from '../components/organisms/Reservation';
import Testimonials from '../components/organisms/Testimonials';
import About from '../components/organisms/About';

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
