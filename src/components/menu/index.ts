import { App } from 'vue'
import PepMenu from './src/index.vue'
import InfiniteMenu from './src/menu'

export default {
  install(app: App) {
    app.component('pep-menu', PepMenu)
    app.component('pep-infinite-menu', InfiniteMenu)
  }
}