<template lang="html">
  <div class="">
    <el-button type="text" @click="dialogVisible = true">Edit</el-button>

    <el-dialog title="Tips" v-model="dialogVisible" size="small">
      <p>Edit Article</p>
      <el-form ref="ruleForm2" label-width="80px" class="demo-ruleForm">

        <el-form-item label="Title" prop="age">
          <el-input type="text" v-model="dataArticle.title"></el-input>
        </el-form-item>

        <el-form-item label="Description" prop="age">
          <el-input type="textarea" v-model="dataArticle.content"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  promps: ['dataArticle'],
  data() {
    return {
      dialogVisible : false
    }
  }
}
</script>

<style lang="css">
</style>
