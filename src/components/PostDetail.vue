<template>
  <div>
    <div class="home-header component-border">
      <i class="left-icon el-icon-back" @click="back()">正文</i>
    </div>
    <postcontent :post="post" />
  </div>
</template>

<script>
import PostContent from '@/components/PostContent'

export default {
  mounted: function () {
    if (this.$cookies.get('token') != null) {
      this.axios.defaults.headers.common['token'] = this.$cookies.get('token')
    }
    var postId = this.$route.params.post_id
    var that = this
    this.axios.get(this.$addr.post + '/post/' + postId)
      .then(function (response) {
        that.post = response.data.data
        console.log(that.post)
      })
  },
  data: function () {
    return {
      post: {
        memberId: '',
        member: ''
      }
    }
  },
  methods: {
    back: function () {
      this.$router.back()
    }
  },
  components: {
    postcontent: PostContent
  },
  render: h => h(PostContent)
}
</script>

<style scoped>
</style>
