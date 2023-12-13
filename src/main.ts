import { createApp } from 'vue'
import './style.css'
import App from '@/App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//@ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

//svg插件配置代码
import 'virtual:svg-icons-register'
//注册全局组件

import allGlabal from '@/components'

const app = createApp(App)

app.use(ElementPlus, {
  locale: zhCn,
})

app.use(allGlabal)

app.mount('#app')
