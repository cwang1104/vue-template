<template>
  <div class="login-container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>标题1</h1>
          <h2>次级标题2</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"/>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" :show-password="true"/>
          </el-form-item>
          <el-form-item >
            <el-button class="login_btn"  type="primary" :disabled="btnDis">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
  import {
    User,Lock
} from '@element-plus/icons-vue'

import { ref,reactive } from 'vue'
let loginForm = reactive({username:'',password:''})
const btnDis =ref(true)



</script>

<style lang="scss">
.login-container {
  width: 100%;
  // width: 100vh;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login_form {
    position: relative;
    width: 80%;
    top: 30vh;
    background: url("@/assets/images/login_form.png") no-repeat;
    background-size: cover;
    padding: 40px;


    h1 {
      color: white;
      font-size: 40px;
    }

    h2 {
      font-size: 20px;
      color: white;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .login_btn {
      width: 100%;
    }
  }
}
</style>
