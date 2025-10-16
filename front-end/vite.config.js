import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://opulent-computing-machine-q7qpj555j9xq29946-3000.app.github.dev/',
        changeOrigin: true,
      }
    }
  }
})
