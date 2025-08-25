// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/Quiz-App-Cop30/"   // 👈 nome do seu repo no GitHub
})