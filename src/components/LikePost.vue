<template>
  <div>
    <!-- Title. -->
    <div class="home-header component-border">
      <i class="left-icon el-icon-back" @click="$router.back()">
        <b>Like</b>
      </i>
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

    // Get prifile timeline data.
    this.axios.get(this.$addr.post + '/like/i-like/' + this.$cookies.get('userid'))
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

<style scoped>
</style>
