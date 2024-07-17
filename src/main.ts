import { createApp } from 'vue'
import App from './App.vue'
// 引用element 插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-plus 国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn,
})
app.mount('#app')
