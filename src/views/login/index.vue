<template>
  <el-row class="login_container">
    <el-col :span="12" :xs="0" />
    <el-col :span="12" :xs="24" class="login_form_col">
      <div class="login_form_container">
        <p class="login_form_title">Hello</p>
        <p class="login_form_title2">欢迎来到硅谷甄选</p>
        <el-form class="login_form">
          <el-form-item>
            <el-input
              placeholder="请输入用户名"
              :prefix-icon="User"
              v-model="loginFrom.username"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              placeholder="请输入密码"
              :prefix-icon="Lock"
              v-model="loginFrom.password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="btnLoading"
              type="primary"
              style="width: 100%"
              @click="handleLogin"
            >
              登录
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-col>
  </el-row>
</template>

<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { reactive, ref } from 'vue'
import userInfoStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
// 收集账号和密码的数据
const loginFrom = reactive({
  username: 'admin',
  password: '111111',
})
const storeInfo = userInfoStore()
// 获取路由
const $router = useRouter()

// 按钮加载标志位
const btnLoading = ref(false)

// 登录事件
const handleLogin = async () => {
  // 按钮加载
  btnLoading.value = true
  // 请求成功 跳转到首页
  // 请求失败 提示错误信息
  try {
    await storeInfo.userLogin(loginFrom)
    $router.push('/')
    ElNotification({
      type: 'success',
      message: '登录成功',
    })
    btnLoading.value = false
  } catch (error) {
    ElNotification({
      title: '登录失败',
      type: 'error',
      message: error.message,
    })
    btnLoading.value = false
  }
}
</script>

<style lang="scss" scoped>
.login_container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  .login_form_col {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .login_form_container {
    width: 100%;
    margin: 11.5%;
    padding: 20px;
    color: white;
    background: #0000a0;
  }
  .login_form_title {
    font-size: 40px;
  }
  .login_form_title2 {
    font-size: 20px;
    margin: 20px 0;
  }
  .login_form {
    padding: 0 50px;
  }
}
</style>
