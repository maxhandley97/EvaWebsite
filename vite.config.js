import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      assetsInclude: ["**/*.png", "**/*.jpg", "**/*.svg"], // Ensure images are included in the build
    },
  },
})