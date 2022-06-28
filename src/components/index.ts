import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './IconChoose'
import trend from './trend'

const components = [
  chooseArea,
  chooseIcon,
  trend
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}