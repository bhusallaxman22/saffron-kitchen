import React from 'react';
import Hero from '../components/organisms/Hero';
import SaffronSpecialDishes from '../components/organisms/SaffronSpecialDishes';
import CallToAction from '../components/organisms/CallToAction';
import Reservation from '../components/organisms/Reservation';
import Testimonials from '../components/organisms/Testimonials';
import About from '../components/organisms/About';
import HappyHourMenu from '../components/molecules/HappyHourMenu';

export default function HomePage() {
    return (
        <>
            <Hero />
            <HappyHourMenu />
            <SaffronSpecialDishes />
            <CallToAction />
            <Reservation />
            <Testimonials />
        </>
    );
}
