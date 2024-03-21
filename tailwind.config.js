import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        screens: {
            xxs: '280px',
            xs: '375px',
            sm: '412px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },

        fontFamily: {
            sans: ['Roboto', ...defaultTheme.fontFamily.sans],
        },

    },

    plugins: [forms],
};
