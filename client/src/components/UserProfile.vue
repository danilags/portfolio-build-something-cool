<template lang="html">
  <div class="profile">


    <h3>Welcome {{ users.name }}</h3>
    <div class="userprofile">
    <router-link :to="'/user/'+ profile_id + '/new-article'"><el-button type="primary" icon="edit">Create</el-button></router-link>

    <p>Username : {{ users.username }}</p>
    <p>Password : {{ users.email }}</p>
    <p>Article yang telah Anda Buat : </p>
    <div class="article-user" v-for="article in users.article">
      <h3>{{ article.title }}</h3>
      <p>{{ article.content }}</p>

      <!-- edit modal -->
      <el-button type="text" @click="dialogVisible = true">Edit</el-button>
      <el-button type="text" size="10" @click="deleteArticle(article)">Delete</el-button>

      <el-dialog title="Tips" v-model="dialogVisible" size="small">
        <p>Edit Article</p>
        <el-form ref="ruleForm2" label-width="80px" class="demo-ruleForm">

          <el-form-item label="Title" prop="title">
            <el-input type="text" v-model="article.title"></el-input>
          </el-form-item>

          <el-form-item label="Description" prop="title">
            <el-input type="textarea" v-model="article.content"></el-input>
          </el-form-item>

        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">Cancel</el-button>
          <el-button type="primary" @click="updateArticle(article)">Confirm</el-button>
        </span>
      </el-dialog>

    </div><!-- batas perulangan -->

  </div>
  </div>

</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      dialogVisible: false,
      profile_id: this.$route.params.id,
      users: ''
    }
  },
  methods: {
    getUser() {
      let self = this
      axios.get(`http://localhost:3000/users/${this.profile_id}`)
        .then(function(res) {
          // console.log(res.data);
          self.users = res.data.data
          console.log("------- +++ jhdjhsdh",self.users);
        }).catch(function(err) {
          console.log(err);
        })
    },
    updateArticle(newData) {
      // console.log("hdsidaisdiasd ------", newData);
      axios.put(`http://localhost:3000/articles/${newData._id}`, {
        title: newData.title,
        content: newData.content,
        updateAt: new Date
      })
        .then(function(res) {
          console.log("-------- ++++ ",res);
          window.alert('Data updated !')
        }).catch(function(err) {
          console.log(err);
        })
        this.dialogVisible = false
    },
    deleteArticle(data) {
      console.log("-------- + ", data);
      axios.delete(`http://localhost:3000/articles/${data._id}`)
           .then(function(res) {
             window.alert('Anda yakin akan menghapus Article ini?')
             window.location.reload();
           }).catch(function(err) {
             console.log(err);
           })
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>

<style lang="css">
.userprofile {
    text-align: left;
    padding: 0 20px;
}

.article-user p {
    width: 500px;
    text-align: justify;
}

.article-user {
    border: 1px solid #ccc;
    padding: 20px;
    width: 600px;
    margin: 10px 0;
}
</style>
