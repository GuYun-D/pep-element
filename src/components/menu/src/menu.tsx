import { defineComponent, PropType, useAttrs } from 'vue'
import * as Icons from '@element-plus/icons-vue'
import './style/index.scss'

export default defineComponent({
  props: {
    data: {
      type: Array as PropType<any[]>,
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
    name: {
      type: String,
      default: "name",
    },
    index: {
      type: String,
      default: "index",
    },
    icon: {
      type: String,
      default: "icon",
    },
    children: {
      type: String,
      default: 'children',
    },
  },

  setup(props, ctx){
    const renderMenu = (data: any[]) => {
      return data.map((item: any) => {
        item.i = (Icons as any)[item[props.icon!]]
        const slots = {
          title: () => {
            return (<>
              <item.i></item.i>
              <span>{item[props.name]}</span>
            </>)
          }
        }
        if(item[props.children] && item[props.children].length){
          return (
            <el-sub-menu index={item[props.index]} v-slots={slots}>
              {renderMenu(item[props.children])}
            </el-sub-menu>
          )
        }
        return (
          <el-menu-item index={item[props.index]}>
            <item.i></item.i>
            <span>{item[props.name]}</span>
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
