// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/templates/Layout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import MealPlanPage from './pages/MealPlanPage';
import CateringPage from './pages/CateringPage';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccess from './pages/CheckoutSuccess';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/meal-plan" element={<MealPlanPage />} />
            <Route path="/catering" element={<CateringPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/checkout-success" element={<CheckoutSuccess />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
