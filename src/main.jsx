// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ParallaxProvider } from 'react-scroll-parallax';
import { ThemeProvider } from './context/ThemeProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </ThemeProvider>
  </React.StrictMode>
);
