import { App } from 'vue'
import ModelForm from './src/index.vue'

export default {
  install(app: App) {
    app.component('pep-model-form', ModelForm)
  }
}