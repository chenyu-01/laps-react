import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/laps-react/',

  plugins: [react()],
  test: {
    // Your test configuration
    globals: true,
    environment: 'jsdom',
  },
});
