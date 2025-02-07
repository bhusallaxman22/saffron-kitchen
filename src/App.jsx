import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import ChefsFavorites from './components/ChefsFavorites';
import Testimonials from './components/Testimonials';
import Reservation from './components/Reservation';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Saffron Kitchen & Bar | Futuristic Dining Experience</title>
        <meta name="description" content="Experience futuristic dining with innovative flavors and a modern design." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <About />
          <ChefsFavorites />
          <Testimonials />
          <Reservation />
        </main>
        <footer className="py-6 text-center bg-gray-900 text-gray-400">
          <p>&copy; {new Date().getFullYear()} Saffron Kitchen & Bar. All rights reserved.</p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
