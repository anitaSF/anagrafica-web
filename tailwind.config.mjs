/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                'brand-coral': '#e55a54',
                'brand-turquoise': '#007d8e',
                'brand-yellow': '#f1b82d',
                'apple-gray': '#f5f5f7',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
};