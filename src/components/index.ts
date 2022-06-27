import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './IconChoose'

const components = [
  chooseArea,
  chooseIcon
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}