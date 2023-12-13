import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import path from 'path'
import { fileURLToPath, URL } from 'node:url'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    // alias:{
    //   "@": path.resolve("./src")  //相对路径使用@替代src
    // }
    alias:{
      '@':fileURLToPath(new URL('./src',import.meta.url))
    }
  }
})
