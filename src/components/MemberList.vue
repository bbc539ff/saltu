<template>
  <div>
    <div>
      <el-row>
        <!-- Avatar -->
        <el-col :span="3">
          <el-avatar size="large" :src="member.memberPic"></el-avatar>
        </el-col>
        <!-- Detail -->
        <el-col :span="21">
          <!-- Name/Button -->
          <div>
            <span>{{ member['memberName'] }}</span>
            <span>
              <el-button :type="isFollowed?'primary':''" round style="float: right; margin-right: 10px;">{{ isFollowed ? '已关注' : '关注' }}</el-button>
            </span>
          </div>
          <!-- Bio -->
          <div>
            <span>{{ member['memberBio'] }}</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    member: {}
  },
  mounted: function () {
    var that = this
    // Init opotion button.
    var userid = this.$cookies.get('userid')
    this.axios.get(this.$addr.user + '/follow', {
      params: {
        memberId: userid,
        followingId: that.member['memberId']
      }
    })
      .then(function (response) {
        if (response.data.data['isFollowed'] === 1) {
          that.isFollowed = true
        } else {
          that.isFollowed = false
        }
      })
  },
  data: function () {
    return {
      isFollowed: false
    }
  }
}
</script>

<style scoped>
</style>
