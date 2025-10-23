const INFO_KEY = 'shopping_mall_userinfo'
const HISTORY_KEY = 'history_list'
// 获取信息
export const getInfo = () => {
  const defaultInfo = { userId: '', token: '' }
  const result = localStorage.getItem(INFO_KEY)
  return result ? JSON.parse(result) : defaultInfo
}
// 存储信息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
// 删除信息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
// 获取搜索历史
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  return result ? JSON.parse(result) : []
}
// 设置搜索历史
export const setHistoryList = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
