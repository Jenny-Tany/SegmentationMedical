import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
//   server: {
//     host: "0.0.0.0",
//     open: false,
//     port: 9990,
//     cors: true, // 允许跨域
//     proxy: {
//         '/api': { //apiTest是自行设置的请求前缀，按照这个来匹配请求，有这个字段的请求，就会进到代理来
//             target: 'http://localhost:5000',
//             changeOrigin: true, //是否跨域
//             rewrite: (path) => path.replace('/api', '')
//         }
//     }
// },
})


