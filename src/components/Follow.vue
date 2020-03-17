<template>
  <div>
    <!-- Title. -->
    <div class="home-header component-border">
      <i class="left-icon el-icon-back" @click="$router.back()">
        <b>{{ member['memberName'] }}</b>
      </i>
    </div>

    <!-- Tab -->
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="关注" name="Following" :stretch="true">
        <memberlist v-for="member in followingList" :key="member['memberId']" :member="member" />
      </el-tab-pane>
      <el-tab-pane label="粉丝" name="Follower" :stretch="true">
          <memberlist v-for="member in followerList" :key="member['memberId']" :member="member" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import MemberList from './MemberList.vue'
export default {
  mounted: function () {
    var that = this

    if (this.$cookies.get('token') != null) {
      this.axios.defaults.headers.common['token'] = this.$cookies.get('token')
    }

    this.activeName = this.$router.currentRoute.name

    // Get user detail.
    var userid = this.$cookies.get('userid')
    this.axios.get(this.$addr.user + '/member/c/' + userid)
      .then(function (response) {
        that.member = response.data.data
        console.log(that.member)
      })

    // Get followerList.
    this.axios.get(this.$addr.user + '/follow/follower/' + userid)
      .then(function (response) {
        that.followerList = response.data.data
        console.log(that.followerList)
      })
    // Get followingList.
    this.axios.get(this.$addr.user + '/follow/following/' + userid)
      .then(function (response) {
        that.followingList = response.data.data
        console.log(that.followingList)
      })
  },
  data () {
    return {
      activeName: '',
      member: {},
      followerList: [],
      followingList: []
    }
  },
  methods: {
    handleClick: function (tab, event) { }
  },
  components: {
    memberlist: MemberList
  }
}
</script>

<style>
.el-tabs__nav {
  width: 100%;
}
.el-tabs__item {
  width: 50%;
  text-align: center;
}
</style>
