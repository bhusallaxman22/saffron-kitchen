// src/context/ThemeProvider.js
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme] = useState({
        fontPrimary: '"Poppins", sans-serif',
        fontSecondary: '"Playfair Display", serif',
        primaryColor: '#CC963C',
        textColor: '#000000',
        backgroundColor: '#f9f9f9',
    });

    return (
        <ThemeContext.Provider value={{ theme }}>
            <div
                style={{
                    fontFamily: theme.fontPrimary,
                    color: theme.textColor,
                    backgroundColor: theme.backgroundColor,
                }}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
