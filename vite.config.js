import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {VitePWA} from 'vite-plugin-pwa'

const manifest = {
  registerType: "autoUpdate",
  includeAssets: ["**/*"],
  devOptions: {
    enabled: true
  },
  workbox: {
    globPatterns: ["**/*{js,jsx,css,html,png,jpg}"],
    runtimeCaching: [
      {
        urlPattern: ({url}) => {
          return url.pathname.startsWith("/")
        },
        handler: "NetworkFirst",
        options: {
          cacheName: "enviroGuard-cache",
          cacheableResponse: {
            statuses: [0,200]
          }
        }
      }
    ]
  },
  manifest: {
  "name": "EnviroGuard",
  "short_name": "EnviroGuard",
  "description": "EnviroGuard is a real-time weather and environmental monitoring app.",
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "background_color": "#000",
  "theme_color": "#171717",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/EnviroGuard-flat-icon.png",
      "sizes": "272x272",
      "type": "image/png"
    }
  ],
  
}

  }

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react(), VitePWA(manifest)],
  server: {
    port: 5001, // 這是 Vite 的端口
    fs: {
      strict: true,
    },
  },
})
