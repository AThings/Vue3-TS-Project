// 用户接口ts类型

// 用户登录接口参数类型
export interface loginForm {
  username: string
  password: string
}
interface loginDataType {
  token?: string
  message?: string
}

// 用户登录接口返回值类型
export interface loginResponseType {
  code: number
  data: loginDataType
}

// 获取用户信息接口返回类型
// 用户信息类型
interface userInfoDataType {
  userId: string | number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
// 用户信息返回数据类型
interface userInfoDataType {
  message?: string
  checkUser?: userInfoDataType
}
export interface userInfoResponseType {
  code: number
  data: userInfoDataType
}
