<template lang="html">
  <div class="new-aricle">
    <el-form ref="ruleForm2" label-width="120px" class="demo-ruleForm">
      <el-form-item label="Title" prop="pass">
        <el-input type="text" auto-complete="off" v-model="dataArticle.title"></el-input>
      </el-form-item>
      <el-form-item label="Content/Post" prop="checkPass">
        <el-input type="textarea" auto-complete="off" class="article" v-model="dataArticle.content"></el-input>
      </el-form-item>
      <el-form-item label="Image Article" prop="checkPass">
        <div id="image-upload">
          <div v-if="!data_image.image">
            <h2>Select an image</h2>
            <input type="file" @change="onFileChange()">
          </div>
          <div v-else>
            <img :src="data_image.image" />
            <button @click="removeImage">Remove image</button>
          </div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="createArticle()">Submit</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import axios from 'axios'

export default {

  data() {
    return {
      profile_id: localStorage.getItem('id'),
      data_image: {
        image: ''
      },
      dataArticle: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    createArticle() {
      let newArticle = {
        title: this.dataArticle.title,
        content: this.dataArticle.content,
        author: localStorage.getItem('id')
      }
      axios.post('http://localhost:3000/articles', newArticle, {
        headers: {'token' : window.localStorage.getItem('token')}
      }).then(function(res) {
        // console.log(res.data._id);
        window.location.href = `http://localhost:8080/`;
      }).catch(function(err) {
        console.log(err);
      })
    }
  },
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      this.image = '';
    }
}
</script>

<style lang="css">
.new-aricle {
    text-align: center;
    width: 800px;
    margin: 30px 0px;
}

textarea.el-textarea__inner {
    height: 200px;
}
</style>
