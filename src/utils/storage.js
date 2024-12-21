// 约定一个通用的键名
const INFO_KEY = 'lb_shop_info'
// 保存用户信息
export const getInfo = () => {
  const defaultInfo = {
    token: '',
    userId: ''
  }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultInfo
}
// 设置个人信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
// 删除个人信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
