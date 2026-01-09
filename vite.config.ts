import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
             if (id.includes('react') || id.includes('react-dom') || id.includes('react-router') || id.includes('scheduler')) {
              return 'react-vendor';
            }
             if (id.includes('framer-motion')) {
              return 'animation';
            }
            if (id.includes('keep-react') || id.includes('lucide-react') || id.includes('phosphor-react') || id.includes('clsx') || id.includes('tailwind-merge')) {
              return 'ui-vendor';
            }
          }
           // Split heavy translation files
          if (
            id.includes('/contexts/LanguageContext') || 
            id.includes('/contexts/TranslationExtensions') ||
            id.includes('/contexts/Revision360Translations') ||
            id.includes('/contexts/TechniqueTranslations')
          ) {
            return 'translations';
          }
        },
      },
    },
  },
});
