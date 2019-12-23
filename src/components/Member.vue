<template>
  <div id="app-member">
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">a</div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple">b</div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple">c</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: () => {
    return {

    }
  }
}
</script>

<style scoped>
.app-member{
  height: 100%;
}
.bg-purple {
  background: #d3dce6;
}
</style>
