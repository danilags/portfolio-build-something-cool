<template lang="html">
  <div class="beranda">
    <el-row>
      <el-col :span="24">
        <slider-custom></slider-custom>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
        <div class="list-article">
          <ul v-for="article in articles">
            <li class="title-wrap"><el-button type="text" size="10"><h1>{{ article.title }}</h1></el-button></li>
            <li class="content-wrap"><p>{{ article.content }}</p></li>
            <li><p>{{ article.createdAt }}</p></li>
            <li><span>By: {{ article.author.name }}</span></li>
            <li><el-button type="text" size="10" v-if="adminLogin == true" @click="deleteArticle(article)">DELETE</el-button></li>
          </ul>
        </div>
      </el-col>

      <el-col :span="5">
        <admin-nav v-if="username == 'admin'"></admin-nav>
      </el-col>

    </el-row>
    <div class="create-article">
    </div>

  </div>

</template>

<script>
import axios from 'axios'
import AdminNav from './admin/AdminNav'
import SliderCustom from './SliderCustom'

export default {
  data() {
    return {
      articles : [],
      adminLogin : false,
      username: localStorage.getItem('username')
    }
  },
  components: {
    AdminNav,
    SliderCustom
  },
  methods: {
    getArticles() {
      let self = this
      axios.get('http://localhost:3000/articles')
            .then(function(res) {
              res.data.forEach(function(data) {
                self.articles.push(data)
              })
            }).catch(function(err) {
              console.log(err);
            })
    },
    cekAdmin() {
      if (window.localStorage.getItem('token') && window.localStorage.getItem('username') == 'admin') {
        this.adminLogin = true
      } else {
        this.adminLogin = false
      }
    },
    deleteArticle(data) {
      console.log("-------- + ", data);
      axios.delete(`http://localhost:3000/articles/${data._id}`)
           .then(function(res) {
             window.alert('Admin yakin akan menghapus Article ini?')
             window.location.reload();
           }).catch(function(err) {
             console.log(err);
           })
    }
  },
  mounted() {
    this.cekAdmin()
    this.getArticles()
  }
}
</script>

<style lang="css">
p {
    font-family: 'Source Sans Pro', sans-serif;
}
.list-article ul {
    list-style: none;
    text-align: left;
}

.list-article {
    margin: 0 10px;
    text-align: justify;
}

li.content-wrap {
    background: #f8f8f8;
    padding: 15px;
}
li.title-wrap h1 {
    font-weight: 400;
    color: #2B2B2B;
    font-size: 25px;
    font-family: 'Source Sans Pro', sans-serif;
}

/**/

</style>
