<template>
  <div>
    <span class="logo">Saltu</span>
    <el-input class="search-input" placeholder="请输入内容" prefix-icon="el-icon-search"></el-input>
    <el-link
      class="el-icon-s-home left-icon"
      @click="leftLink('home')"
      type="info"
      :underline="false"
    >主页</el-link>
    <el-link
      class="el-icon-message-solid left-icon"
      @click="leftLink('notification')"
      type="primary"
      :underline="false"
    >通知</el-link>
    <el-link
      class="el-icon-message left-icon"
      @click="leftLink('message')"
      type="primary"
      :underline="false"
    >消息</el-link>
    <el-link
      class="el-icon-star-on left-icon"
      @click="leftLink('star')"
      type="primary"
      :underline="false"
    >收藏</el-link>
    <el-link
      class="el-icon-user-solid left-icon"
      @click="leftLink('profile')"
      type="primary"
      :underline="false"
    >个人信息</el-link>
  </div>
</template>

<script>
export default {
  methods: {
    leftLink: function (params) {
      alert(params)
    }
  }
}
</script>

<style scoped>
.left-icon {
  margin-bottom: 30px;
  color: white;
  font-size: 1.5rem;
  display: block;
}
.search-input {
  margin-bottom: 20px;
}
</style>
