<template>
  <div class="app-login">
    <el-row class="row-login-form" type="flex" justify="center" align="middle">
      <el-col class="col-login-form" :xs="20" :sm="14" :md="8">
        <span class="logo">Login to Saltu</span>
        <el-form v-model="formData" class="login-input">
          <el-form-item>
            <el-input
              type="text"
              v-model="formData.username"
              placeholder="用户名"
              prefix-icon="el-icon-user-solid
"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-input
              type="password"
              v-model="formData.password"
              placeholder="密码"
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-checkbox v-model="formData.rememberMe">记住我</el-checkbox>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      formData: {
        username: '',
        password: '',
        rememberMe: false
      }
    }
  },
  methods: {
    submitForm: async function () {
      const data = await this.axios.post('http://127.0.0.1:9001/login', {
        memberName: 'a',
        memberPassword: '1',
        rememberMe: 'true'
      })
      console.log(data)
    },
    resetForm: function () {
      this.formData['username'] = ''
      this.formData['password'] = ''
      this.formData['rememberMe'] = false
    }
  }
}
</script>

<style scoped>
.app-login {
  height: 100%;
  width: 100%;
  background-color: cadetblue;
}
.row-login-form {
  height: 100%;
}
.col-login-form {
  background-color: white;
}
.login-input {
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 20px;
}
.logo {
  display: flex;
  font-size: 2rem;
  color: white;
  justify-content: center;
  background-color: cadetblue;
  padding-bottom: 20px;
}
</style>
