import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DBSRCollege/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  assetsInclude: ['**/*.JPG'], // Add this line to include .JPG files as assets
});
