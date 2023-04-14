import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/starter-landing/",
  resolve:{
    alias:{
      src:"/src",
    }
  }
})
