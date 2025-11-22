import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

const HMR_HOST = process.env.HMR_HOST || ''

const serverConfig = {
  host: true,          // bind to 0.0.0.0
  port: 5173,
  strictPort: true,    // do not try another port
  cors: true,

  // allow both domain + local access
  allowedHosts: [
    'oceanwater.s2cloudpunch.in',
    'www.oceanwater.s2cloudpunch.in',
    'localhost',
    '127.0.0.1'
  ],

  // if reverse proxy changes the host header, trust it
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
}

// only add explicit HMR host when environment variable is set
if (HMR_HOST) {
  serverConfig.hmr = {
    host: HMR_HOST,
    protocol: 'ws',
    port: 5173,
    clientPort: 5173
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: serverConfig
})

