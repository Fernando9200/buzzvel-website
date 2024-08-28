import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react({
    // This will apply JSX transform to .js files
    include: "**/*.{jsx,js,ts,tsx}",
  })],
})