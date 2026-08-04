import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Separate vendor libraries into their own chunk so browsers can cache
    // them independently of app code that changes more often.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('framer-motion')) return 'vendor-motion';
            if (id.includes('react-router-dom') || id.includes('/react/') || id.includes('/react-dom/')) {
              return 'vendor-react';
            }
          }
        },
      },
    },
    // Fail the build if a chunk balloons unexpectedly (helps catch
    // accidental heavy-dependency regressions before they ship).
    chunkSizeWarningLimit: 600,
  },
})
