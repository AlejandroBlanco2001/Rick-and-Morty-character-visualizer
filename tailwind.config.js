/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                karla: ["Karla", "sans-serif"],
                roboto: ["Roboto", "sans-serif"],
                body: ["Karla", "sans-serif"],
            },
            colors: {
                "translucid-gray": "#8E8E93",
                "blue-gray": "#6E798C",
                "blue-black": "#081F32",
            },
        },
    },
    plugins: [],
};
