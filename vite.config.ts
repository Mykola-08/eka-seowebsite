import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { cloudflare } from "@cloudflare/vite-plugin";
import { mochaPlugins } from "@getmocha/vite-plugins";

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plugins: [
    // Mocha plugins for platform integration
    mochaPlugins(process.env as any),
    // React plugin for Vite
    react(),
    // Cloudflare Workers integration
    cloudflare()
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
