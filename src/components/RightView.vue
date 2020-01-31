<template>
  <div>
    <div class="right-notification">
      <i class="el-icon-message-solid left-icon">通知</i>
      <div class="notification-content component-border">
        <div>Hello Wellcome!</div>
      </div>
    </div>
    <div class="right-notification">
      <i class="el-icon-data-line left-icon">热门标签</i>
      <div class="notification-content component-border">
        <div>
          <el-row>
            <el-col :span="21">
              <span>#Hello Wellcome!</span>
            </el-col>
            <el-col :span="3">
              <el-button type="primary" icon="el-icon-edit" size="small"></el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.left-icon {
  margin: 12px;
  font-size: 1rem;
}

.notification-content {
  padding: 20px;
}
</style>
