import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// allow switching HMR host when accessed via domain (useful behind a reverse proxy)
const HMR_HOST = process.env.HMR_HOST || ''

const serverConfig = {
  host: true,               // listen on 0.0.0.0
  port: 5173,
  // explicitly allow both domain and local hosts
  allowedHosts: ['oceanwater.s2cloudpunch.in', 'localhost', '127.0.0.1']
}

// only add an explicit HMR host when user set HMR_HOST; keeps localhost HMR default
if (HMR_HOST) {
  serverConfig.hmr = {
    host: HMR_HOST,
    protocol: 'ws',
    port: 5173,
    // clientPort can be useful if your proxy rewrites ports; keep 5173 by default
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
