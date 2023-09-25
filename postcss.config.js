import tailwind from 'tailwindcss'
import tailwindNesting from '@tailwindcss/nesting'
import tailwindConfig from './tailwind.config.js'
import autoprefixer from 'autoprefixer'
export default {
    plugins: [tailwindNesting,tailwind(tailwindConfig),autoprefixer]
}