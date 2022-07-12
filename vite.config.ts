//@ts-check
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/sleepcalculator/',
  plugins: [
    svelte(),
    VitePWA({
      // scope: "/sleepcalculator/",
      injectRegister: "auto",
      registerType: "autoUpdate",
      devOptions: {
        enabled: true
      },
      manifest: {
        name: 'Sleep Calculator',
        short_name: 'Sleep Calculator',
        description: 'Best time to sleep tool',
        theme_color: '#050C2D',
        background_color: "#050C2D",
        icons: [{
          "src": "favicon.svg",
          "type": "image/svg+xml",
          "purpose": "maskable"
        },

        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
        ]
      }
    }),


  ]
})
