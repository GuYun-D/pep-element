import { defineComponent, PropType, useAttrs } from 'vue'
import {MenuItem} from './types'
import * as Icons from '@element-plus/icons-vue'
import './style/index.scss'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<MenuItem[]>,
      required: true,
    },
    // 默认选中菜单
    defaultActive: {
      type: String,
      default: "",
    },
    // 是否是路由模式
    router: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, ctx){
    const renderMenu = (data: MenuItem[]) => {
      return data.map((item: MenuItem) => {
        item.i = (Icons as any)[item.icon!]
        const slots = {
          title: () => {
            return (<>
              <item.i></item.i>
              <span>{item.name}</span>
            </>)
          }
        }
        if(item.children && item.children.length){
          return (
            <el-sub-menu index={item.index} v-slots={slots}>
              {renderMenu(item.children)}
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={item.index}>
            <item.i></item.i>
            <span>{item.name}</span>
          </el-menu-item>
        )
      })
    }

    const attrs = useAttrs()
    
    return () => {
      return (
        <el-menu 
          default-active={props.defaultActive} 
          router={props.router}
          {...attrs}
        >
          {renderMenu(props.data)}
        </el-menu>
      )
    }
  }
})
