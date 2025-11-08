import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Configure dev server to handle client-side routing
    historyApiFallback: true,
  },
  preview: {
    // Configure preview server to handle client-side routing
    historyApiFallback: true,
  },
})
