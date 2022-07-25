import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { toLine } from './utils'
// import PeUi from './components'
import PeUi from '../lib/pep-element.es.js'
import '../lib/style.css'
// import IconChoose from '../lib/IconChoose/index.es' 
import '../lib/IconChoose/style.css'

import './mock'

const app = createApp(App)

for (let icon in ElementPlusIconsVue) {
  app.component(`el-icon-${toLine(icon)}`, (ElementPlusIconsVue as any)[icon])
}

app
.use(router)
.use(ElementPlus)
.use(PeUi)
// .use(IconChoose)
app.mount('#app')

export { }