import { RuleItem } from "./rule"
export type FormType = 'cascader' | 'checkbox' | 'radio' | 'checkbox-group' |
  'checkbox-button' | 'color-picker' |
  'date-picker' | 'input' | 'input-number' |
  'radio-button' | 'radio-group' | 'rate' |
  'select' | 'option' | 'slider' | 'switch' | 'time-picker' |
  'time-select' | 'transfer' | 'upload'

export interface FormOptions {
  type: FormType
  value: any
  label?: string
  prop?: string
  rule?: RuleItem
  placeholer?: string
  // 表单特有的属性
  attrs: {
    clearable?: boolean
    showPassword?: boolean
    disabled?: boolean
  }
}