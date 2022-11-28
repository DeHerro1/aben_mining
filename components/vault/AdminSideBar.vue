<template>
  <el-aside class="sidebar_container">
    <el-drawer
      :append-to-body="true"
      size="50%"
      :visible.sync="drawer"
      direction="ltr"
    >
      <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#000"
        active-text-color="#ff6a3e"
        @select="handleSelect"
      >
        <el-menu-item index="1" @click="$router.push('/depositors')">
          <i class="el-icon-goods mr-5"></i>
          Depositors
        </el-menu-item>
        <el-menu-item
          index="2"
          @click="$router.push('/depositors/deposit-form')"
        >
          <i class="el-icon-user-solid mr-5"></i>
          New Deposit Form
        </el-menu-item>
        <!-- <el-menu-item index="3" @click="$router.push('/depositors/users')">
          <i class="el-icon-goods mr-5"></i>
          Users
        </el-menu-item> -->
        <!-- <el-menu-item
          index="3"
          @click="$router.push('/depositors/manage_password')"
        >
          <i class="el-icon-goods mr-5"></i>
          Manage Password
        </el-menu-item> -->
        <el-menu-item index="4" @click="open">
          <i class="el-icon-coin mr-5"></i> Logout
        </el-menu-item>
      </el-menu>
    </el-drawer>
    <div class="mobile_nav hidden-sm-and-up" @click="drawer = true">
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="sidebar hidden-xs-only">
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
        <el-menu-item index="1" @click="$router.push('/depositors')">
          <i class="el-icon-goods mr-5"></i>
          Depositors
        </el-menu-item>
        <el-menu-item
          index="2"
          @click="$router.push('/depositors/deposit-form')"
        >
          <i class="el-icon-user-solid mr-5"></i>
          New Deposit Form
        </el-menu-item>
        <el-menu-item
          index="3"
          @click="$router.push('/depositors/manage_password')"
        >
          <i class="el-icon-edit mr-5"></i>
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
  name: 'AdminSideBar',
  data() {
    return {
      user: null,
      activeIndex: '1' as any,
      dialogVisible: false as boolean,
      drawer: false as boolean,
    }
  },
  watch: {
    $route(to) {
      if (to.fullPath === '/depositors/deposit-form') {
        this.activeIndex = '2'
      }
    },
  },
  methods: {
    handleSelect(key: number) {
      // sessionStorage.setItem('dashkey', key.toString())
      this.activeIndex = key.toString()
      this.drawer = false
    },
    open() {
      this.$confirm('Do you want to logout?', 'Warning', {
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        type: 'warning',
      })
        .then(() => {
          localStorage.removeItem('5%5od4pogift')
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
  @media (max-width: $laptop_screen) {
    width: 200px !important;
  }
  @media (max-width: $small_screen) {
    // display: none;
    width: 50px !important;
    position: absolute;
    margin-top: 10px;
    left: 10px;
    background: none;
    height: fit-content;
    z-index: 10;
  }
}
.mobile_nav {
  background: var(--color-primary);
  // border: 1px solid var(--color-primary);
  padding: 10px;
  margin-right: 10px;
  div {
    background: #fff;
    height: 3px;
    margin-top: 2px;
    width: 20px;
  }
}
.sidebar {
  height: 100%;
}
</style>
