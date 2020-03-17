<template>
  <div id="app-home">
    <div class="home-send-padding component-border">
      <el-row>
        <!-- Avator. -->
        <el-col :span="3">
          <el-avatar size="large" :src="memberPic"></el-avatar>
        </el-col>
        <!-- Textarea. -->
        <el-col :span="21">
          <el-form ref="form" :model="formData">
            <el-input
              class="send-textarea textarea-border"
              type="textarea"
              :rows="3"
              placeholder="发生了什么？"
              :autosize="{ minRows: 3 }"
              v-model="formData.postContent"
            ></el-input>
            <!-- Upload picture. -->
            <el-upload
              ref="upload"
              :class="{displaynone: displayPicButton}"
              action="http://127.0.0.1:9102/post/upload"
              :headers="token"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
              :limit="9"
              :before-upload="picNumInc"
              :on-change="hideButton"
              :on-success="remainNumDec"
              :disabled="displayPicButton"
              :auto-upload="false"
              :data="uploadData"
            >
              <i class="el-icon-picture"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt />
            </el-dialog>
            <div style="float: right;">
              <!-- Post button. -->
              <span class="send-option" :style="{ color: fontcolor }">{{ textCount }}</span>
              <el-button class="send-option" type="primary" round @click="sendPost()">发布！</el-button>
            </div>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    this.formData.memberId = this.$cookies.get('userid')
    this.memberPic = this.$cookies.get('memberPic')
    this.token = {
      'token': this.$cookies.get('token')
    }
  },
  data: () => {
    return {
      formData: {
        memberId: '',
        postContent: '',
        postPic1: '',
        postPic2: '',
        postPic3: '',
        postPic4: '',
        postPic5: '',
        postPic6: '',
        postPic7: '',
        postPic8: '',
        postPic9: ''
      },
      memberPic: '',
      token: {},
      dialogImageUrl: '',
      dialogVisible: false,
      displayPicButton: false,
      fileNum: 0,
      remainNum: 0,
      uploadData: {
        'postId': '',
        'picNum': 0
      }
    }
  },
  computed: {
    textCount: function () {
      var len = this.formData.postContent.length
      return len
    },
    // textCount color
    fontcolor: function () {
      if (this.textCount > 400) return 'red'
      else return 'black'
    }
  },
  methods: {
    sendPost: function () {
      for (var i = 1; i <= this.fileNum; i++) {
        this.formData['postPic' + i] = i + '.jpg'
      }
      this.remainNum = this.fileNum
      var that = this
      this.axios.post(this.$addr.post + '/post', this.formData)
        .then(function (response) {
          that.uploadData['postId'] = response.data.data['postId']
          console.log('that.uploadData[postId]' + that.uploadData['postId'])
          if (that.uploadData['postId'] === '') return
          that.$refs.upload.submit()
        })
      this.eventBus.$emit('updatepost')
    },
    handleRemove: function (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview: function (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
      console.log(this.dialogImageUrl)
    },
    hideButton: function () {
      this.fileNum++
      console.log(this.fileNum)
      if (this.fileNum === 9) this.displayPicButton = true
    },
    picNumInc: function () {
      this.uploadData['picNum']++
      console.log('picNum:' + this.uploadData['picNum'])
    },
    remainNumDec: function () {
      this.remainNum--
      console.log('this.remainNum:' + this.remainNum)
      if (this.remainNum === 0) window.location.reload()
    }
  }
}
</script>

<style scoped>
.home-send-padding {
  padding: 12px;
}
.send-textarea {
  padding-bottom: 12px;
}
.textarea-border >>> textarea {
  border: 0;
}
.send-option {
  padding-right: 12px;
}
.displaynone >>> div {
  display: none;
}
</style>
