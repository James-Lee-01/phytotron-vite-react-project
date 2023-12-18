import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5001, // 這是 Vite 的端口
    fs: {
      strict: true,
    },
  },
})
