import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('three')) {
              return 'three'; // Separate Three.js into its own chunk
            }
            return 'vendor'; // Separate other dependencies
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase chunk warning limit
  },
});
