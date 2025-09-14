import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portifolio/', 
  server: {
    allowedHosts: [
      '714a8e67104a.ngrok-free.app'
    ]
  }
})
