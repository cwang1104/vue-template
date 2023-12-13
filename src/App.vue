<template>
  <div class="jck">
    <h1>first app</h1>
    <el-button :icon="Check">ddddd</el-button>
    <Abc></Abc>
  </div>
</template>

<script setup lang="ts">
import { Check } from '@element-plus/icons-vue'
import Abc from '@/components/Abc.vue'

console.log(import.meta.env)
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
