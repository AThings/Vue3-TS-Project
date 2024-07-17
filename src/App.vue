<script setup lang="ts">
const str = "123"
</script>

<template>
  <div class="box">
    <h1>根组件</h1>
  </div>
</template>

<style scoped lang="scss">
.box{
  width: 600px;
  height: 400px;
  background: black;
  h1{
    color: white;
  }
}
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
