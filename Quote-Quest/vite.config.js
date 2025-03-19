import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
      server: {
          proxy: {
              '/api': {
                  target: 'https://zenquotes.io/', // target API
                  changeOrigin: true,             // needed for virtual hosted sites
                  rewrite: (path) => path.replace(/^\/api/, '') // remove /api from the path
              },
          },
      },
 
})


