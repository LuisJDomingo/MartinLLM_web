import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Esta es la configuración clave para el despliegue en GitHub Pages
  // Reemplaza 'martin-llm-web' si el nombre de tu repositorio es diferente
  base: process.env.NODE_ENV === 'production' ? '/martin-llm-web/' : '/',
})