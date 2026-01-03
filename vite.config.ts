import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
   
  plugins: [
    // React plugin for Vite
    react()
  ],
  server: {
    allowedHosts: true,
  },
  build: {
    // Increase chunk size warning limit to avoid warnings for large vendor chunks
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router', 'react-helmet-async'],
          ui: ['framer-motion', 'lucide-react', 'phosphor-react', 'clsx', 'tailwind-merge'],
          utils: ['zod'],
        },
      },
    },
  },
  resolve: {
    alias: {
      // Path alias for cleaner imports
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
