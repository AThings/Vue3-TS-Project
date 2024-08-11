import { defineStore } from 'pinia'
// 登录接口
import { reqLogin } from '@/api/user'
// 引入数据类型
import { loginForm } from '@/api/user/type.ts'

//第一个参数:小仓库名字  第二个参数:小仓库配置对象
// 创建小仓库
const userInfoStore = defineStore('user', {
  state: () => {
    return {
      // 用户token
      token: localStorage.getItem('token') || '',
    }
  },
  actions: {
    // 用户登录的方法
    async userLogin(params: loginForm) {
      const res = await reqLogin({ params })
      const result = res.data
      // 登录失败 code:201
      // 登录成功 code：200
      if (result.code === 200) {
        this.token = result.data.token
        // 本地持久化存储token
        localStorage.setItem('token', result.data.token)
        return Promise.resolve()
      } else {
        return Promise.reject(new Error(result.data.message))
      }
    },
  },
  getters: {},
})

export default userInfoStore
