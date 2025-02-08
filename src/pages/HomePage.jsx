import React from 'react'
import Hero from '../components/Hero'
import SaffronSpecialDishes from '../components/SaffronSpecialDishes'
import CallToAction from '../components/CallToAction'
import Catering from '../components/Catering'
import MealPlan from '../components/MealPlan'
import Reservation from '../components/Reservation'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function HomePage() {
    return (
        <>
            <Hero />
            <SaffronSpecialDishes />
            <CallToAction />
            <Reservation />
            <Testimonials />
        </>
    )
}