<template>
  <div class="tl">
    <div class="home-header component-border">
      <i class="left-icon el-icon-s-home">主页</i>
    </div>
    <post />
    <div class="component-hr" />
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
    if (this.$cookies.get('token') != null) {
      this.axios.defaults.headers.common['token'] = this.$cookies.get('token')
    }

    this.getTimelineData()

    this.eventBus.$on('updatepost', () => {
      console.log('updatepost')
      this.getTimelineData()
    })
  },
  data: function () {
    return {
      posts: []
    }
  },
  methods: {
    deletePost: function (postId) {
      console.log(postId)
      for (var i = 0; i < this.posts.length; i++) {
        if (postId === this.posts[i].postId) {
          this.posts.splice(i, 1)
          break
        }
      }
    },
    getTimelineData: function () {
      var that = this
      // Get timeline post data.
      this.axios.get(this.$addr.post + '/post/timeline/' + this.$cookies.get('userid'))
        .then(function (response) {
          that.posts = response.data.data
          console.info(that.posts)
        })
        .catch(function (error) {
          console.info(error)
        })
    },
    updatePost: function () {
      this.getTimelineData()
    }
  },
  components: {
    post: Post,
    postcontent: PostContent
  },
  render: h => h(Post, PostContent)
}
</script>

<style scoped>
</style>
