<template>
  <div class="tl">
    <post />
    <div class="component-hr" />
    <postcontent v-for="post in posts" :key="post.id" :content="post.content" />
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import PostContent from '@/components/PostContent.vue'

export default {
  mounted: function () {
    // this.axios.
  },
  data: function () {
    return {
      posts: [
        { id: 'a', content: 'svdfvdfd' },
        { id: 'a', content: 'svdfvdfd' },
        { id: 'a', content: 'svdfvdfd' },
        { id: 'a', content: 'svdfvdfd' }
      ]
    }
  },
  components: {
    post: Post,
    postcontent: PostContent
  },
  render: h => h(Post, PostContent)
}
</script>

<style>
</style>
