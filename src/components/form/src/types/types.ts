import { CSSProperties } from "vue"
import { RuleItem } from "./rule"
export type FormType = 'cascader' | 'checkbox' | 'radio' | 'checkbox-group' |
  'checkbox-button' | 'color-picker' |
  'date-picker' | 'input' | 'input-number' |
  'radio-button' | 'radio-group' | 'rate' |
  'select' | 'option' | 'slider' | 'switch' | 'time-picker' |
  'time-select' | 'transfer' | 'upload'

export interface FormOptions {
  type: FormType
  value?: any
  label?: string
  prop?: string
  rules?: RuleItem[]
  placeholer?: string
  // 表单特有的属性
  attrs?: {
    clearable?: boolean
    showPassword?: boolean
    disabled?: boolean
    style?: CSSProperties
  },
  children?: FormOptions[],
  uploadAttrs?: {
    actions: string // 上传地址
    headers?: Object // 请求头
    method?: 'post' | 'put' | 'patch'
    multiple?: boolean
    data?: any
    name?: string // 上传文件字段名
    withCredentials?: boolean // 是否支持发送cookie凭证
    showFileList?: boolean // 是否显示已上传的文件列表
    drag?: boolean // 是否允许拖拽
    thumbnailMode?: boolean // 是否显示缩略图
    fileList?: any[] // 上传文件的列表
    listType?: 'text' | 'picture' | 'picture-card' // 文件列表类型
    antuUpload?: boolean // 是否自动上传
    disabled?: boolean // 是否禁用
    limit?: number // 允许上传的最大文件数
  }
}