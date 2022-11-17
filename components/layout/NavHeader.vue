<template>
  <!-- style="background: #54595f" -->
  <div class="header py-10">
    <el-drawer
      :append-to-body="true"
      size="50%"
      :visible.sync="drawer"
      direction="rtl"
    >
      <el-menu
        :default-active="activeIndex"
        class="el-menu-vertical-demo"
        background-color="#fff"
        text-color="#000"
        active-text-color="#ff6a3e"
        @select="handleSelect"
      >
        <el-menu-item index="1" class="side_nav_item" @click="$router.push('/')"
          >Home</el-menu-item
        >
        <el-submenu index="2">
          <template slot="title">Our Services</template>
          <el-menu-item
            index="2-1"
            @click="$router.push('/services/air-freight-transportation')"
            ><span class="p-10">Air Freight</span></el-menu-item
          >
          <el-menu-item
            index="2-2"
            @click="$router.push('/services/chain-management')"
            ><span class="p-10">Chain Management</span></el-menu-item
          >
          <el-menu-item
            index="2-3"
            @click="$router.push('/services/counter-surveillance')"
            ><span class="p-10">Counter Surveillance</span></el-menu-item
          >
          <el-menu-item
            index="2-4"
            @click="$router.push('/services/mineral-refinery')"
            ><span class="p-10">Mineral Refinery</span></el-menu-item
          >
          <el-menu-item
            index="2-4"
            @click="$router.push('/services/ocean-freight')"
            ><span class="p-10">Ocean Freight</span></el-menu-item
          >
          <el-menu-item
            index="2-4"
            @click="$router.push('/services/storage-facility')"
            ><span class="p-10">Storage Facility</span></el-menu-item
          >
        </el-submenu>

        <NuxtLink to="/aboutUs"
          ><el-menu-item index="3" class="side_nav_item"
            >About Us</el-menu-item
          ></NuxtLink
        >
        <el-menu-item
          index="4"
          class="side_nav_item"
          @click="$router.push('/contactUs')"
          >Contact Us</el-menu-item
        >
        <el-menu-item
          index="5"
          class="side_nav_item"
          @click="$router.push('/login')"
          >Login</el-menu-item
        >
        <el-menu-item
          index="6"
          class="side_nav_item"
          @click="$router.push('/tracking')"
          >Track Shipment</el-menu-item
        >
      </el-menu>
    </el-drawer>
    <div class="section d-flex justify_between">
      <div class="header_logo" @click="$router.push('/')">
        <img src="../../assets/img/security_logo.png" alt="access logo" />
      </div>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo hidden-sm-and-down"
        mode="horizontal"
        background-color="#fff"
        text-color="#000"
        menu-trigger="hover"
        active-text-color="#ff6a3e"
        @select="handleSelect"
      >
        <el-menu-item index="1"><NuxtLink to="/">Home</NuxtLink></el-menu-item>
        <el-submenu index="2">
          <template slot="title">Our Services</template>
          <el-menu-item index="2-1"
            ><span class="p-10"
              ><NuxtLink to="/services/air-freight-transportation"
                ><span style="color: #000">Air Freight</span></NuxtLink
              ></span
            ></el-menu-item
          >
          <el-menu-item index="2-2"
            ><span class="p-10"
              ><NuxtLink to="/services/chain-management"
                ><span style="color: #000">Chain Management</span></NuxtLink
              ></span
            ></el-menu-item
          >
          <el-menu-item index="2-3"
            ><span class="p-10"
              ><NuxtLink to="/services/counter-surveillance"
                ><span style="color: #000">Counter Surveillance</span></NuxtLink
              ></span
            ></el-menu-item
          >
          <el-menu-item index="2-4"
            ><span class="p-10"
              ><NuxtLink to="/services/mineral-refinery"
                ><span style="color: #000">Mineral Refinery</span></NuxtLink
              ></span
            ></el-menu-item
          >
          <el-menu-item index="2-4"
            ><span class="p-10"
              ><NuxtLink to="/services/ocean-freight"
                ><span style="color: #000">Ocean Freight</span></NuxtLink
              ></span
            ></el-menu-item
          >
          <el-menu-item index="2-4"
            ><span class="p-10"
              ><NuxtLink to="/services/storage-facility"
                ><span style="color: #000">Storage Facility</span></NuxtLink
              ></span
            ></el-menu-item
          >
        </el-submenu>

        <el-menu-item index="3"
          ><NuxtLink to="/aboutUs">About Us</NuxtLink></el-menu-item
        >
        <el-menu-item index="4">
          <NuxtLink to="/contactUs">Contact Us</NuxtLink></el-menu-item
        >
        <el-menu-item index="5"
          ><NuxtLink to="/login">Login</NuxtLink></el-menu-item
        >
        <el-menu-item index="6"
          ><NuxtLink to="/track-shipment"
            >Track Shipment</NuxtLink
          ></el-menu-item
        >
      </el-menu>
      <div class="mobile_nav hidden-md-and-up" @click="drawer = true">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/display.css'

export default Vue.extend({
  name: 'NavHeader',
  data() {
    return {
      activeIndex: '1' as any,
      drawer: false,
    }
  },
  watch: {
    $route(to) {
      if (to.fullPath === '/') {
        sessionStorage.removeItem('key')
        sessionStorage.setItem('key', '1')
        this.activeIndex = '1'
      }
    },
  },
  created() {
    this.activeIndex = sessionStorage.getItem('key')
      ? sessionStorage.getItem('key')
      : '1'
  },
  methods: {
    handleSelect(key: number) {
      sessionStorage.setItem('key', key.toString())

      this.activeIndex = key.toString()
      this.drawer = false
    },
  },
})
</script>
<style lang="scss" scoped>
$small_screen: 426px;
$laptop_screen: 1024px;
.header {
  // background: #54595f;
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 100;
  .header_logo > img {
    height: 50px;
    cursor: pointer;
    width: 60px;
  }
  .service {
    padding: 10px;
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
}
.services_content {
  color: red !important;
}
</style>
