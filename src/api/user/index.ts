// user 相关接口
import request from '@/utils/request.ts'
// 引入ts类型
import type {
  loginForm,
  loginResponseType,
  userInfoResponseType,
} from './type.ts'
enum API {
  USER_LOGIN_URL = '/user/login',
  USER_INFO_URL = '/user/info',
}

// 用户登录接口
export const reqLogin = (data: loginForm): Promise<loginResponseType> => {
  console.log(data, 'data')
  return request.post<loginResponseType>(API.USER_LOGIN_URL, data)
}
// 获取用户信息
export const reqUserInfo = () =>
  request.get<userInfoResponseType>(API.USER_INFO_URL)
