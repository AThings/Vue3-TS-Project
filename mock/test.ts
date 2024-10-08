import { MockMethod } from 'vite-plugin-mock'
// 用户信息数据
function createUserList() {
  return [
    {
      userId: 1,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'admin',
      password: '111111',
      desc: '平台管理员',
      roles: ['平台管理员'],
      buttons: ['cuser.detail'],
      routes: ['home'],
      token: 'Admin Token',
    },
    {
      userId: 2,
      avatar:
        'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      username: 'system',
      password: '111111',
      desc: '系统管理员',
      roles: ['系统管理员'],
      buttons: ['cuser.detail', 'cuser.user'],
      routes: ['home'],
      token: 'System Token',
    },
  ]
}
export default [
  // 用户登录接口
  {
    url: '/api/user/login',
    method: 'post',
    response: ({ body }) => {
      // 获取请求体携带过来的用户名和密码
      const { username, password } = body
      // 调用获取用户信息函数，用于判断是否有此用户
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password,
      )
      // 没有返回失败信息
      if (!checkUser) {
        return {
          code: 201,
          data: {
            message: '账号或密码不正确',
          },
        }
      }
      // 有返回成功信息
      const { token } = checkUser
      return { code: 200, data: { token } }
    },
  },
  // 获取用户信息
  {
    url: '/api/user/info',
    method: 'get',
    response: (request) => {
      // 获取请求头携带token
      const token = request.headers.token
      // 查看用户信息是否包含有次token用户
      const checkUser = createUserList().find((item) => item.token === token)
      // 没有返回失败信息
      if (!checkUser) {
        return {
          code: 201,
          data: {
            message: '获取用户信息失败！',
          },
        }
      }
      // 有返回成功信息
      return { code: 200, data: { checkUser } }
    },
  },
  // 404请求
  {
    url: '/api/not-found',
    method: 'get',
    statusCode: 404,
    response: (request) => {
      return {
        code: 404,
        data: '404 not found',
      }
    },
  },
] as MockMethod[]
