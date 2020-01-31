<template>
  <div id="app">
    <el-row>
      <el-col :span="5" class="left-containner component-color component-border">
        <leftview />
      </el-col>
      <el-col :span="12" class="center-containner component-color component-border">
        <router-view></router-view>
      </el-col>
      <el-col :span="7" class="right-containner component-color component-border">
        <rightview />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import LeftView from '@/components/LeftView.vue'
import RightView from '@/components/RightView.vue'
export default {
  name: 'app',
  components: {
    rightview: RightView,
    leftview: LeftView
  },
  render: h => h(RightView, LeftView),
  data: () => {
    return {
    }
  }
}
</script>

<style scoped>
#app {
}

.left-containner {
  height: 1000px;
  padding: 20px;
}
.center-containner {
  height: 1000px;
}
.right-containner {
  height: 1000px;
}

.logo {
  color: white;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
}
</style>
