import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],

  server: {
    proxy: {
      '/auth': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },

      '/student-api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },

      '/instructor-api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },

      '/admin-api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },

      '/uploads': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})