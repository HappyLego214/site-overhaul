import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are loaded relative to the current path
  build: {
    outDir: 'dist', // Output directory for the build
  },
})