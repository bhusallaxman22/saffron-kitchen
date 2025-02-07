module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          playfair: ['Playfair Display', 'serif'],
          poppins: ['Poppins', 'sans-serif'],
        },
        colors: {
          saffron: '#F59E0B',
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
        }
      },
    },
    plugins: [],
  }