<template lang="html">
  <div class="navigasi-admin">
    <el-row>
      <el-col :span="24">
        <div class="nav-sides">
          <el-row class="tac">
            <el-col :span="24">
              <h5>Dasboard</h5>
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-submenu index="1">
                  <template slot="title"><i class="el-icon-message"></i>Manage</template>
                  <el-menu-item-group title="Group One">
                    <el-menu-item index="1-1">Users</el-menu-item>
                    <el-menu-item index="1-2">Articles</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <router-link to="/"><el-menu-item index="2"><i class="el-icon-menu"></i>Beranda</el-menu-item></router-link>
                <router-link to="/admin"><el-menu-item index="2"><i class="el-icon-caret-right"></i>Admin</el-menu-item></router-link>
                <el-menu-item index="3" @click="logout()" v-if="statusLogin == true"><i class="el-icon-setting"></i>Logout</el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data() {
    return {
      statusLogin : false
    }
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      logout() {
        localStorage.clear()
        window.location.reload()
        window.location.href = 'http://localhost:8080/'
      }
    },
    mounted() {
      if (window.localStorage.getItem('token')) {
        this.statusLogin = true
      } else {
        this.statusLogin = false
      }
    }
}
</script>

<style lang="css">
</style>
