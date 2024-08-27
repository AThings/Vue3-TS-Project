// 封装本地存储token方法
export const SET_TOKEN = (token: string) => {
  localStorage.setItem('token', token)
}
export const GET_TOKEN = () => {
  return localStorage.getItem('token') || ''
}
