import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/laps-react/',
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false, // no ssl
      },
    },
  },
  plugins: [react()],
  test: {
    // Your test configuration
    globals: true,
    environment: 'jsdom',
  },
});
