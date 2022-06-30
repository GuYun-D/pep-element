import { App } from 'vue'
import PepMenu from './src/index.vue'

export default {
  install(app: App) {
    app.component('pep-menu', PepMenu)
  }
}