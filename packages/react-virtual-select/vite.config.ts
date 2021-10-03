import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Default port for Vite set to 3001, to differentiate from Docusarus port in 3000.
    port: 3001,
    // Default setting for strictPort is set to true so vite can't open when the default port is in use by other app to avoid confusion.
    strictPort: true
  }
})