<template>
  <div id="app">
    <el-row>
      <el-col :span="5" class="left-containner border">
        <div class>
          <span class="logo">Saltu</span>
          <el-input
            class="search-input"
            :model="input"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
          ></el-input>
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
      </el-col>
      <el-col :span="12" class="center-containner border">
        <router-view></router-view>
      </el-col>
      <el-col :span="7" class="right-containner border">
        <rightview />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import RightView from '@/components/RightView.vue'
export default {
  name: 'app',
  components: {
    rightview: RightView
  },
  render: h => h(RightView),
  data: () => {
    return {
      input: ''
    }
  },
  methods: {
    leftLink: function (params) {
      alert(params)
    }
  }
}
</script>

<style scoped>
#app {
}

.border {
  border-style: solid;
  border-color: gray;
  border-width: 1px;
}

.left-containner {
  background-color: rgb(21, 32, 43);
  height: 1000px;
  padding: 20px;
}
.center-containner {
  background-color: rgb(21, 32, 43);
  height: 1000px;
}
.right-containner {
  background-color: rgb(21, 32, 43);
  height: 1000px;
}

.logo {
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}

.search-input {
  margin-bottom: 20px;
}

.left-icon {
  margin-bottom: 30px;
  color: white;
  font-size: 1.5rem;
  display: block;
}
</style>
