<template>
  <el-aside class="sidebar_container">
    <div class="sidebar">
      <div class="sidebar_logo_div">
        <!-- <img src="../../assets/img/logo.png" alt="logo" width="100px" /> -->
      </div>
      <br />
      <el-menu active-text-color="black">
        <el-menu-item index="1" :route="{ path: '/' }">
          <i class="el-icon-shopping-cart-full"></i>
          Deposit Status</el-menu-item
        >
        <el-menu-item index="2">
          <i class="el-icon-user-solid mr-5"></i>
          Customer information</el-menu-item
        >
        <el-menu-item index="3">
          <i class="el-icon-goods mr-5"></i>
          Manage Password
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-coin mr-5"></i>
          Logout
        </el-menu-item>
      </el-menu>
    </div>
  </el-aside>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SideBar',
  data() {
    return {}
  },
  methods: {},
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;
.sidebar_container {
  background: #fff;
  //   height: 90vh;
  height: 80vh;
  position: fixed;
}
.sidebar {
  height: 100%;
}
</style>
