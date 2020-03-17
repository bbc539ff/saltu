<template>
  <div class="component-border">
    <div class="right-notification">
      <i class="el-icon-message-solid left-icon">通知</i>
      <div class="notification-content">
        <div>Hello Wellcome!</div>
      </div>
    </div>
    <div class="component-hr" />
    <div class="right-notification">
      <i class="el-icon-data-line left-icon">热门标签</i>
      <div class="notification-content">
        <div>
          <el-row v-for="h in hashtag" :key="h">
            <el-col :span="21">
              <span>{{ h }}</span>
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
  mounted: function () {
    var that = this
    if (this.$cookies.get('token') != null) {
      this.axios.defaults.headers.common['token'] = this.$cookies.get('token')
    }

    this.axios.get(this.$addr.post + '/post/hashtag')
      .then(function (response) {
        that.hashtag = response.data.data
      })
  },
  data: function () {
    return {
      hashtag: []
    }
  }
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
