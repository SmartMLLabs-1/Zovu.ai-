import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensure the app is deployed from the root directory
  build: {
    outDir: 'dist',  // Output directory for the production build
    rollupOptions: {
      input: {
        main: './index.html',  // Main entry point of the application
      },
    },
  },
})
