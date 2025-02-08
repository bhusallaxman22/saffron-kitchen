// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Page imports
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import MealPlanPage from './pages/MealPlanPage';
import GalleryPage from './pages/GalleryPage';
import CateringPage from './pages/CateringPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/meal-plan" element={<MealPlanPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/catering" element={<CateringPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
