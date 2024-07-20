<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import { reqLogin } from '@/api/user'
// import SvgIcon from '@/components/SvgIcon/index.vue'
const currentPage4 = ref(1)
const pageSize4 = ref(1)
const size = ref(1)
const handleTestMock = () => {
  const params = {
    username: 'admin',
    password: '111111',
  }
  reqLogin({ params }).then((res) => {
    console.log(res, 'res')
  })
}
</script>

<template>
  <div class="box">
    <el-button type="primary" size="default" :icon="Plus">12</el-button>
    <el-pagination
      v-model:current-page="currentPage4"
      v-model:page-size="pageSize4"
      :page-sizes="[100, 200, 300, 400]"
      :size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
    <svg-icon name="phone" width="60px" height="60px" color="red"></svg-icon>
    <h1 class="scssStyle">全局样式测试</h1>
    <el-button type="primary" @click="handleTestMock">mock接口测试</el-button>
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.scssStyle {
  padding: 10px 8px;
  border: 1px solid black;
  background: green;
  color: $color;
  font-size: 20px;
  font-weight: bold;
}
.routerView {
  margin: 20px;
  border: 1px solid black;
}
</style>
