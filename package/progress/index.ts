import { App } from 'vue'
import Progress from './src/index.vue'

export default {
  install(app: App) {
    app.component('pep-progress', Progress)
  }
}
