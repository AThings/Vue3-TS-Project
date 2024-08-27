import { defineStore } from 'pinia'
// 登录接口
import { reqLogin } from '@/api/user'
// 引入数据类型
import type { loginForm, loginResponseType } from '@/api/user/type.ts'
import type { UserState } from './types/type.ts'
// 引入工具方法
import { SET_TOKEN, GET_TOKEN } from '@/utils/token.ts'

//第一个参数:小仓库名字  第二个参数:小仓库配置对象
// 创建小仓库
const userInfoStore = defineStore('user', {
  state: (): UserState => {
    return {
      // 用户token
      token: GET_TOKEN(),
    }
  },
  actions: {
    // 用户登录的方法
    async userLogin(params: loginForm) {
      const res: loginResponseType = await reqLogin(params)
      console.log(res)
      // 登录失败 code:201
      // 登录成功 code：200
      if (res.code === 200) {
        this.token = res.data.token as string
        // 本地持久化存储token
        SET_TOKEN(res.data.token as string)
        return Promise.resolve()
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    },
  },
  getters: {},
})

export default userInfoStore
