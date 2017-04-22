<template lang="html">
  <div class="">
    <el-row>
      <el-col :span="19">
        <div class="">
          <h2>Welcome Admin</h2>
        </div>
      </el-col>
      <el-col :span="4">
        <admin-nav></admin-nav>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AdminNav from './AdminNav'

export default {
  components: {
    AdminNav
  }
}
</script>

<style lang="css">
</style>
