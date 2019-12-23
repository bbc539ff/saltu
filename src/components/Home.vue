<template>
  <div id="app-home">
    <div class="home-header">
      <i class="el-icon-s-home left-icon">主页</i>
    </div>
    <hr class="hr-border" />
    <div class="home-send">
      <el-row>
        <el-col :span="3">
          <el-avatar size="large" :src="circleUrl"></el-avatar>
        </el-col>
        <el-col :span="21">
          <el-input class="send-textarea" type="textarea" :rows="3" placeholder="请输入内容"></el-input>
          <el-row class="send-option">
            <el-col :span="2">
              <i class="el-icon-picture left-icon"></i>
            </el-col>
            <el-col :span="2">
              <span>{{ textCount }}</span>
            </el-col>
            <el-col :span="5">
              <el-button type="primary" round>主要按钮</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <hr class="hr-border" />
    <div class="home-timeline"></div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      circleUrl: require('@/assets/logo.png'),
      textCount: 0
    }
  }
}
</script>

<style scoped>
.hr-border {
  margin: 0;
}
.home-header {
}
.home-send {
  margin: 12px;
}
.send-textarea {
  margin-bottom: 12px;
  color: rgb(21, 32, 43);
}
.send-option {
  color: white;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  justify-content: flex-end;
}
.left-icon {
  margin: 12px;
  color: white;
  font-size: 1rem;
}
</style>
