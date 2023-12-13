<template>
  <!-- <div class="jck">
    <h1>first app</h1>
    <el-button :icon="Check">ddddd</el-button>
    <Abc></Abc>
  </div>

  <div>

  </div> -->
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
// import { Check } from '@element-plus/icons-vue'
// import Abc from '@/components/Abc.vue'
console.log('环境变量')

console.log(import.meta.env)
console.log(import.meta.env.VITE_APP_TITLE)
</script>
<style scoped lang="scss">
.jck {
  background-color: aquamarine;
}

div {
  width: 100px;
  height: 200px;
  h1 {
    font-size: large;
    color: $base-color;
  }
}
</style>
