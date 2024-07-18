<script setup lang="ts">
import { ref } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import SvgIcon from '@/components/SvgIcon/index.vue'
const currentPage4 = ref(1)
const pageSize4 = ref(1)
const size = ref(1)
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
</style>
