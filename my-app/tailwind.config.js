/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                slate: '#121212',
                gold: '#D4AF37',
                cyan: '#2DD4BF',
                offwhite: '#E2E8F0',
            },
            fontFamily: {
                outfit: ['Outfit', 'sans-serif'],
                jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
            },
        },
    },
    plugins: [],
}
