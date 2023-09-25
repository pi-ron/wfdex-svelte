import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  // Change base from '/' so files are output at relativ paths
  base: '',
  build: {
    minify: false,
    watch: {
      // include: 'src/**',
      exclude: 'node_modules/**, .git/**, dist/**, .vscode/**',
    },
    outDir: 'public',
    copyPublicDir: false,
    rollupOptions: {
      treeshake: true,
      output: {
        // modify output of css to styles.css and only image assets in ./assets
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          } else if (assetInfo.name == 'index.css') {
            return `styles[extname]`
          }
          return `assets/[name]-[hash][extname]`;
        },
        entryFileNames: `index.js`,
      },
    },
  },
  plugins: [svelte()],
})
