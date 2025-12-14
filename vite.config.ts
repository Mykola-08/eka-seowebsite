import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [
    // React plugin for Vite
    react()
  ],
  server: {
    allowedHosts: true,
  },
  build: {
    // Increase chunk size warning limit to avoid warnings for large vendor chunks
    chunkSizeWarningLimit: 5000,
  },
  resolve: {
    alias: {
      // Path alias for cleaner imports
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
