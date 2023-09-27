const tailwind = require('tailwindcss');
const tailwindNesting = require('@tailwindcss/nesting');
const tailwindConfig = require('./tailwind.config.cjs');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [tailwindNesting, tailwind(tailwindConfig), autoprefixer]
};
