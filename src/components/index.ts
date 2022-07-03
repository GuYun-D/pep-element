import { App } from 'vue'
import chooseArea from './chooseArea'
import chooseIcon from './IconChoose'
import trend from './trend'
import notification from './notification'
import list from './list'
import PepMenu from './menu'
import Progress from './progress'
import chooseTime from './chooseTime'
import chooseDate from './chooseDate'

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  PepMenu,
  Progress,
  chooseTime,
  chooseDate
]

export default {
  install(app: App) {
    components.map(item => {
      app.use(item)
    })
  }
}