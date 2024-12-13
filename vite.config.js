import { defineConfig } from 'vite'

export default defineConfig({
  base: '/voice-chat-app/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  publicDir: 'public'
}) 