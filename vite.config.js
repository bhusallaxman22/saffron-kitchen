import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { compression } from 'vite-plugin-compression2'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), compression(), svgr()],
  server: {
    proxy: "http://localhost:3000"
  }
})
