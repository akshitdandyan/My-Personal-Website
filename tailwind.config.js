/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                img1: "url('/assets/background.jpg')",
                gradient:
                    "linear-gradient(rgba(9, 56, 83, 1), rgba(2, 30, 46, 1), rgba(0, 0, 0, 1))",
            },
        },
    },
    plugins: [],
};
