export interface TableOptions {
  label: string // 表头
  prop?: string
  width?: string | number
  align?: 'left' | 'center' | 'right'
  slot?: string
  action?: boolean
  editable?: boolean
}