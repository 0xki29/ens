import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages project page: served tại https://<username>.github.io/enschoo/
  base: '/enschoo/',
  plugins: [react()],
  server: { host: true, port: 5173 }
})
