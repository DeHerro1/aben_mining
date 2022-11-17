<template>
  <el-aside class="sidebar_container">
    <div class="sidebar">
      <div class="sidebar_logo_div">
        <img src="../../assets/img/security_logo.png" alt="logo" />
        <h4>Access Group Security</h4>
      </div>
      <br />
      <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#000"
        active-text-color="#ff6a3e"
        @select="handleSelect"
      >
        <el-menu-item index="1" @click="$router.push('/deposit_vault')">
          <i class="el-icon-shopping-cart-full"></i>
          Deposit Status</el-menu-item
        >
        <el-menu-item
          index="2"
          @click="$router.push('/deposit_vault/customer_information')"
        >
          <i class="el-icon-user-solid mr-5"></i>
          Customer information</el-menu-item
        >
        <el-menu-item
          index="3"
          @click="$router.push('/deposit_vault/manage_password')"
        >
          <i class="el-icon-goods mr-5"></i>
          Manage Password
        </el-menu-item>
        <el-menu-item index="4" @click="open">
          <i class="el-icon-coin mr-5"></i> Logout
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
    return {
      activeIndex: '1' as any,
      dialogVisible: false as boolean,
    }
  },
  methods: {
    handleSelect(key: number) {
      sessionStorage.setItem('dashkey', key.toString())
      this.activeIndex = key.toString()
    },
    open() {
      this.$confirm('Do you want to logout?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          // this.$message({
          //   type: 'success',
          //   message: 'Logout successful',
          // })
          this.$router.replace('/')
        })
        .catch(() => {})
    },
  },
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;
.sidebar_logo_div {
  display: flex;
  align-items: center;
  padding-top: 20px;
  img {
    width: 80px;
  }
}
.sidebar_container {
  background: #fff;
  //   height: 90vh;
  height: 90vh;

  position: fixed;
  @media (max-width: $medium_screen) {
    width: 200px !important;
  }
}
.sidebar {
  height: 100%;
}
</style>
