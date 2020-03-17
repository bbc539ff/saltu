<template>
  <div>
    <!-- Title. -->
    <div class="home-header component-border">
      <i class="left-icon el-icon-back" @click="$router.back()">
        <b>{{ member['memberName'] }}</b>
      </i>
    </div>
    <!-- Avatar. -->
    <div style="background-color: #ccd6dd; height: 200px; position:relative;">
      <span
        style="border-radius:50%; background-color:white; width: 130px; height: 130px; padding: 4px; margin: 8px;"
        class="avatar"
      >
        <el-avatar :size="130" :src="member['memberPic']"></el-avatar>
      </span>
    </div>
    <!-- padding -->
    <div style="height: 69px;background-color: white;"></div>

    <!-- Prifile detail. -->
    <div style="background-color: white; margin: 12px; font-size: 1.3em;">
      <!-- memberName -->
      <b>{{ member['memberName'] }}</b>
      <!-- bio -->
      <div
        class="profile-small-font"
        v-if="member['memberBio'] !== null && member['memberBio'] !== ''"
      >{{ member['memberBio'] }}</div>
      <!-- Website -->
      <div
        class="profile-small-font"
        v-if="member['memberWebsite'] !== null && member['memberWebsite'] !== ''"
      >
        <i class="el-icon-link"></i>
        {{ member['memberWebsite'] }}
      </div>
      <!-- BirthDate -->
      <div
        class="profile-small-font"
        v-if="member['memberBirthDate'] !== null && member['memberBirthDate'] !== ''"
      >
        <i class="el-icon-notebook-1"></i>
        {{ ' 生日：' + convertDate(member['memberBirthDate']) }}
      </div>
      <!-- memberCreate -->
      <div
        class="profile-small-font"
        v-if="member['memberCreate'] !== null && member['memberCreate'] !== ''"
      >
        <i class="el-icon-date"></i>
        {{ ' 注册时间：' + convertDate(member['memberCreate']) }}
      </div>
      <!-- follow -->
      <div class="profile-small-font">
        <el-link type="info" style="margin-right: 7px;" href="/#/following">
          关注
          <span style="color: black;">{{ member['memberFollowing'] }}</span>
        </el-link>
        <el-link type="info" href="/#/follower">
          粉丝
          <span style="color: black;">{{ member['memberFollowers'] }}</span>
        </el-link>
      </div>
    </div>

    <!-- profile timeline -->
    <postcontent
      v-for="post in posts"
      :key="post.postId"
      :post="post"
      v-on:deletepost="deletePost($event)"
    />
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import PostContent from '@/components/PostContent.vue'

export default {
  mounted: function () {
    var that = this

    if (this.$cookies.get('token') != null) {
      this.axios.defaults.headers.common['token'] = this.$cookies.get('token')
    }

    // Get user detail.
    var userid = this.$cookies.get('userid')
    this.axios.get(this.$addr.user + '/member/c/' + userid)
      .then(function (response) {
        that.member = response.data.data
        console.log(that.member)
      })

    // Get prifile timeline data.
    this.axios.get(this.$addr.post + '/post/profile/' + this.$cookies.get('userid'))
      .then(function (response) {
        that.posts = response.data.data
        console.info(that.posts)
      })
      .catch(function (error) {
        console.info(error)
      })
  },
  data: function () {
    return {
      member: {},
      posts: []
    }
  },
  methods: {
    convertDate: function (timestamp) {
      function addZero (num) {
        if (parseInt(num) < 10) {
          num = '0' + num
        }
        return num
      }
      var oDate = new Date(parseInt(timestamp))
      var oYear = oDate.getFullYear()
      var oMonth = oDate.getMonth() + 1
      var oDay = oDate.getDate()
      var oHour = oDate.getHours()
      var oMin = oDate.getMinutes()
      var oSen = oDate.getSeconds()
      var oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' +
        addZero(oMin) + ':' + addZero(oSen)
      return oTime
    },
    deletePost: function (postId) {
      console.log(postId)
      for (var i = 0; i < this.posts.length; i++) {
        if (postId === this.posts[i].postId) {
          this.posts.splice(i, 1)
          break
        }
      }
    }
  },
  components: {
    postcontent: PostContent
  },
  render: h => h(Post, PostContent)
}
</script>

<style>
.avatar {
  position: absolute;
  top: 131px;
}

.profile-small-font {
  color: gray;
  font-size: 0.9rem;
}
</style>
