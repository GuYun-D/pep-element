/**
 * 大驼峰转换成-链接
 * @param value 
 * @returns 
 */
export const toLine = (value: string) => {
  return value.replace(/(A-Z)g/, '-$1').toLocaleLowerCase()
}