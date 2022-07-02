import { App } from 'vue'
import ChooseTime from './src/index.vue'

export default {
  install(app: App) {
    app.component('pep-time', ChooseTime)
  }
}