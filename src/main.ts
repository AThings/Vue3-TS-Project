import { createApp } from 'vue'
import App from '@/App.vue'
// 引用element 插件和样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// element-plus 国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// svg需要的配置代码
import 'virtual:svg-icons-register'
// 引入全局组件
import globalComponents from '@/components/index.ts'
// 引入全局样式
import '@/styles/index.scss'

const app = createApp(App)
// 安装element-plus插件
app.use(ElementPlus, {
  locale: zhCn,
})
// 安装全局组件
app.use(globalComponents)

app.mount('#app')
