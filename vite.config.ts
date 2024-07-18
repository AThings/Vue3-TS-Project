import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// svg需要使用的插件
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
  ],
  resolve: {
    alias: {
      // 相对路径别名配置
      '@': path.resolve('./src'),
    },
  },
})
