export interface MenuItem {
  icon?: string // 图标
  name: string // title
  index: string // 标识
  i?: any
  children?: MenuItem[]
}