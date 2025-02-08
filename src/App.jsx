import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

// Page imports
import HomePage from './pages/HomePage'
import MenuPage from './pages/MenuPage'
import AboutPage from './pages/AboutPage'
import MealPlanPage from './pages/MealPlanPage'
import GalleryPage from './pages/GalleryPage'
import { Navbar } from './components/Navbar'
import Catering from './components/Catering'
import CateringPage from './pages/CateringPage'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<HomePage />} />

        {/* Separate Pages */}
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/meal-plan" element={<MealPlanPage />} />
        <Route path="/catering" element={<CateringPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
