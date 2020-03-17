<template>
  <div class="ho-nav">
    <span class="logo">Saltu</span>
    <el-input
      class="search-input search-border"
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      v-model="search_content"
    ></el-input>
    <el-link
      class="el-icon-s-home left-icon"
      :type="compName()=='timeline' ? 'primary' : undefined"
      :underline="false"
      href="/#/home"
    >主页</el-link>
    <el-link
      class="el-icon-message-solid left-icon"
      :type="compName()=='notification' ? 'primary' : undefined"
      :underline="false"
    >通知</el-link>
    <el-link class="el-icon-message left-icon" :underline="false">消息</el-link>
    <el-link
      class="el-icon-star-on left-icon"
      :type="compName()=='LikePost' ? 'primary' : undefined"
      :underline="false"
      href="/#/like"
    >收藏</el-link>
    <el-link
      class="el-icon-user-solid left-icon"
      :type="compName()=='Profile' ? 'primary' : undefined"
      :underline="false"
      href="/#/profile"
    >个人信息</el-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      search_content: ''
    }
  },
  methods: {
    compName: function () {
      return this.$route.name
    }
  }
}
</script>

<style scoped>
.logo {
  display: flex;
  font-size: 2rem;
  color: black;
  justify-content: center;
  padding-bottom: 20px;
}
.left-icon {
  margin-bottom: 30px;
  color: white;
  font-size: 1.5rem;
  display: block;
}
.search-input {
  margin-bottom: 20px;
}

.search-border >>> input {
  border-radius: 30px;
  background-color: #e6ecf0;
  border: 0;
}
.ho-nav {
  padding: 30px 40px;
}
</style>
