<template>
  <div>
    <div
      class="component-border component-padding hover-color"
      @click="postDetail"
      @mousedown.stop="onPostContentDown"
      @mouseup.stop="onPostContentUp"
    >
      <el-row>
        <el-col :span="3">
          <el-avatar size="large" :src="post.member.memberPic"></el-avatar>
        </el-col>
        <el-col :span="21">
          <span class="font-margin font-style-primary">{{ post.member.memberName }}</span>
          <!-- <span class="font-margin font-style-grey">{{ post.memberId }}</span> -->
          <span class="font-margin font-style-grey">·</span>
          <span class="font-margin font-style-grey">{{ postDate }}</span>

          <span @click.stop>
            <el-dropdown style="float: right; padding-right: 5px;" @command="handleCommand">
              <span class="el-dropdown-link">
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="delete" :style="myPostStyle">删除</el-dropdown-item>
                <el-dropdown-item command="unfollow" :style="followerPostStyle">取消关注</el-dropdown-item>
                <el-dropdown-item command="follow" :style="unFollowerPostStyle">关注</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
          <el-row>
            <el-col>
              <div>{{ post.postContent }}</div>
              <el-row>
                <el-col>
                  <div :style="{ display: isPic1Set } " @click.stop>
                    <el-image
                      ref="image"
                      style="width: 100px; height: 100px"
                      :src="$addr.post+'/'+post.postPic1"
                      :preview-src-list="[$addr.post+'/'+post.postPic1]"
                      fit="fill"
                      class="pic-round pic-margin"
                    ></el-image>
                  </div>
                  <div :style="{ display: isPic2Set }" @click.stop>
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="$addr.post+'/'+post.postPic2"
                      :preview-src-list="[$addr.post+'/'+post.postPic2]"
                      fit="fill"
                      class="pic-round pic-margin"
                    ></el-image>
                  </div>
                  <div :style="{ display: isPic3Set }" @click.stop>
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="$addr.post+'/'+post.postPic3"
                      :preview-src-list="[$addr.post+'/'+post.postPic3]"
                      fit="fill"
                      class="pic-round pic-margin"
                    ></el-image>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <div :style="{ display: isPic4Set }" @click.stop>
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="$addr.post+'/'+post.postPic4"
                      :preview-src-list="[$addr.post+'/'+post.postPic4]"
                      fit="fill"
                      class="pic-round pic-margin"
                    ></el-image>
                  </div>
                  <div :style="{ display: isPic5Set }" @click.stop>
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="$addr.post+'/'+post.postPic5"
                      :preview-src-list="[$addr.post+'/'+post.postPic5]"
                      fit="fill"
                      class="pic-round pic-margin"
                    ></el-image>
                  </div>
                  <div :style="{ display: isPic6Set }" @click.stop>
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="$addr.post+'/'+post.postPic6"
                      :preview-src-list="[$addr.post+'/'+post.postPic6]"
                      fit="fill"
                      class="pic-round pic-margin"
                    ></el-image>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <div :style="{ display: isPic7Set }" @click.stop>
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="$addr.post+'/'+post.postPic7"
                      :preview-src-list="[$addr.post+'/'+post.postPic7]"
                      fit="fill"
                      class="pic-round pic-margin"
                    ></el-image>
                  </div>
                  <div :style="{ display: isPic8Set }" @click.stop>
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="$addr.post+'/'+post.postPic8"
                      :preview-src-list="[$addr.post+'/'+post.postPic8]"
                      fit="fill"
                      class="pic-round pic-margin"
                    ></el-image>
                  </div>
                  <div :style="{ display: isPic9Set }" @click.stop>
                    <el-image
                      style="width: 100px; height: 100px"
                      :src="$addr.post+'/'+post.postPic9"
                      :preview-src-list="[$addr.post+'/'+post.postPic9]"
                      fit="fill"
                      class="pic-round pic-margin"
                    ></el-image>
                  </div>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="6">
              <el-link
                class="el-icon-chat-round icon-size"
                @click.stop="commitDialogVisible = true"
                type="info"
                :underline="false"
              >
                <span style="font-size: 0.9em;padding-left: 6px;">{{this.post.postCommentNumber}}</span>
              </el-link>
            </el-col>
            <el-col :span="6">
              <el-link
                class="iconfont icon-forward-null"
                @click.stop="repostDialogVisible = true"
                type="info"
                :underline="false"
              >
                <span style="font-size: 20px;padding-left: 6px;">{{this.post.postRepostNumber}}</span>
              </el-link>
            </el-col>
            <el-col :span="6">
              <el-link
                class="iconfont"
                :class="[isLike]"
                @click.stop="likePost"
                type="info"
                :underline="false"
              >
                <span style="font-size: 20px;padding-left: 6px;">{{this.post.postLikeNumber}}</span>
              </el-link>
            </el-col>
            <el-col :span="6">
              <el-link
                class="el-icon-share icon-size"
                @click.stop="commentPost"
                type="info"
                :underline="false"
              ></el-link>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
    <el-dialog :visible.sync="commitDialogVisible" width="40%">
      <post />
    </el-dialog>
  </div>
</template>

<script>
import Post from '@/components/Post'
export default {
  mounted: function () {
    var that = this

    // Hide deleted post.
    if (this.post.postId === undefined) {
      this.$emit('deletepost', this.post.postId)
      return
    }

    // Init opotion button.
    var userid = this.$cookies.get('userid')
    if (userid === this.post.memberId) {
      this.myPostStyle['display'] = 'block'
    } else {
      this.axios.get(this.$addr.user + '/follow', {
        params: {
          memberId: userid,
          followingId: that.post.memberId
        }
      })
        .then(function (response) {
          if (response.data.data['isFollowed'] === 1) {
            that.followerPostStyle['display'] = 'block'
          } else {
            that.unFollowerPostStyle['display'] = 'block'
          }
        })
    }

    //  Init isLike.
    this.axios.get(this.$addr.post + '/like', {
      params: {
        postId: this.post.postId,
        memberId: userid
      }
    })
      .then(function (response) {
        if (response.data.data['isLiked'] === 0) {
          that.isLike = 'icon-love1'
        } else {
          that.isLike = 'icon-love'
        }
      })
  },
  props: {
    post: {
      postId: String,
      memberId: String,
      postContent: String,
      postDate: Date,
      postOriginal: String,
      postRepostId: String,
      postRepostNumber: String,
      postCommentNumber: String,
      postLikeNumber: Number,
      postState: Number,
      postPic1: String,
      postPic2: String,
      postPic3: String,
      postPic4: String,
      postPic5: String,
      postPic6: String,
      postPic7: String,
      postPic8: String,
      postPic9: String,
      member: Map
    }
  },
  data: function () {
    return {
      downX: 0,
      downY: 0,
      isDrag: false,
      commitDialogVisible: false,
      repostDialogVisible: false,
      isLike: 'icon-love1',
      myPostStyle: {
        display: 'none'
      },
      followerPostStyle: {
        display: 'none'
      },
      unFollowerPostStyle: {
        display: 'none'
      }
    }
  },
  computed: {
    isPic1Set: function () {
      return this.post.postPic1 === '' ? 'none' : 'inline'
    },
    isPic2Set: function () {
      return this.post.postPic2 === '' ? 'none' : 'inline'
    },
    isPic3Set: function () {
      return this.post.postPic3 === '' ? 'none' : 'inline'
    },
    isPic4Set: function () {
      return this.post.postPic4 === '' ? 'none' : 'inline'
    },
    isPic5Set: function () {
      return this.post.postPic5 === '' ? 'none' : 'inline'
    },
    isPic6Set: function () {
      return this.post.postPic6 === '' ? 'none' : 'inline'
    },
    isPic7Set: function () {
      return this.post.postPic7 === '' ? 'none' : 'inline'
    },
    isPic8Set: function () {
      return this.post.postPic8 === '' ? 'none' : 'inline'
    },
    isPic9Set: function () {
      return this.post.postPic9 === '' ? 'none' : 'inline'
    },
    postDate: function () {
      function addZero (num) {
        if (parseInt(num) < 10) {
          num = '0' + num
        }
        return num
      }
      var oDate = new Date(parseInt(this.post.postDate))
      var oYear = oDate.getFullYear()
      var oMonth = oDate.getMonth() + 1
      var oDay = oDate.getDate()
      var oHour = oDate.getHours()
      var oMin = oDate.getMinutes()
      var oSen = oDate.getSeconds()
      var oTime = oYear + '-' + addZero(oMonth) + '-' + addZero(oDay) + ' ' + addZero(oHour) + ':' +
        addZero(oMin) + ':' + addZero(oSen)
      return oTime
    }
  },
  methods: {
    postDetail: function (event) {
      if (this.isDrag) return
      console.log(event)
      this.$router.push('/post/' + this.post.postId)
    },
    onPostContentDown: function (event) {
      this.downX = event.pageX
      this.downY = event.pageY
      this.isDrag = false
    },
    onPostContentUp: function (event) {
      if (Math.abs(this.downX - event.pageX) > 2 || Math.abs(this.downY - event.pageY) > 2) this.isDrag = true
    },
    commentPost: function () {
      alert('comment')
    },
    likePost: function () {
      var that = this
      var userid = this.$cookies.get('userid')
      // unliked.
      if (this.isLike === 'icon-love1') {
        this.axios.post(this.$addr.post + '/like', {
          postId: that.post.postId,
          memberId: userid
        })
          .then(function (response) {
            that.isLike = 'icon-love'
          })
          .catch(function (response) {
            console.log('like failed.')
          })
      } else {
        this.axios.delete(this.$addr.post + '/like', {
          params: {
            postId: that.post.postId,
            memberId: userid
          }
        })
          .then(function (response) {
            that.isLike = 'icon-love1'
          })
          .catch(function (response) {
            console.log('unlike failed.')
          })
      }
    },
    handleCommand: function (command) {
      var that = this
      var userid = this.$cookies.get('userid')
      console.log(command)
      // Delete post.
      if (command === 'delete') {
        this.axios.delete(this.$addr.post + '/post/' + this.post.postId)
          .then(function (response) {
            that.$emit('deletepost', that.post.postId)
          })
        // Follow member.
      } else if (command === 'follow') {
        this.axios.post(this.$addr.user + '/follow', {
          memberId: userid,
          followingId: that.post.memberId
        })
          .then(function (response) {
            // Change option.
            that.unFollowerPostStyle['display'] = 'block'
            that.followerPostStyle['display'] = 'none'
          })
        // Unfollow member.
      } else if (command === 'unfollow') {
        this.axios.delete(this.$addr.user + '/follow', {
          params: {
            memberId: userid,
            followingId: that.post.memberId
          }
        })
          .then(function (response) {
            // Change option.
            that.unFollowerPostStyle['display'] = 'none'
            that.followerPostStyle['display'] = 'block'
          })
      }
    }
  },
  components: {
    post: Post
  }
}
</script>

<style scoped>
.font-margin {
  margin-right: 5px;
}
.font-style-grey {
  color: gray;
  font-size: 0.9rem;
}
.font-style-primary {
  font-weight: bold;
}
.icon-size {
  font-size: 1.4rem;
}
.pointerevents {
  pointer-events: auto;
}
.pic-round >>> img {
  border-radius: 5px;
}
.pic-margin {
  margin-right: 5px;
}
</style>
