import { App } from 'vue'
import List from './src/index.vue'

export default {
  install(app: App) {
    app.component('list', List)
  }
}