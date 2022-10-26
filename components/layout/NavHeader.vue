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
      >
        <NuxtLink to="/"
          ><el-menu-item index="1" class="side_nav_item"
            >Home</el-menu-item
          ></NuxtLink
        >
        <el-submenu index="2">
          <template slot="title">Our Services</template>
          <el-menu-item index="2-1"
            ><span class="p-10">Air Freight</span></el-menu-item
          >
          <el-menu-item index="2-2"
            ><span class="p-10">Chain Management</span></el-menu-item
          >
          <el-menu-item index="2-3"
            ><span class="p-10">Counter Surveillance</span></el-menu-item
          >
          <el-menu-item index="2-4"
            ><span class="p-10">Mineral Refinery</span></el-menu-item
          >
          <el-menu-item index="2-4"
            ><span class="p-10">Ocean Freight</span></el-menu-item
          >
          <el-menu-item index="2-4"
            ><span class="p-10">Storage Facility</span></el-menu-item
          >
        </el-submenu>

        <NuxtLink to="/aboutUs"
          ><el-menu-item index="3" class="side_nav_item"
            >About Us</el-menu-item
          ></NuxtLink
        >
        <el-menu-item index="4" class="side_nav_item">Contact Us</el-menu-item>
        <el-menu-item index="5" class="side_nav_item">Storage</el-menu-item>
        <el-menu-item index="6" class="side_nav_item"
          >Track Shipment</el-menu-item
        >
      </el-menu>
    </el-drawer>
    <div class="section d-flex justify_between">
      <NuxtLink to="/">
        <div class="header_logo">
          <img
            src="https://usercontent.one/wp/www.abenmining.com/wp-content/uploads/2021/03/cropped-aben_mininglogo-1.png"
            alt="aben mining logo"
          />
        </div>
      </NuxtLink>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo hidden-sm-and-down"
        mode="horizontal"
        background-color="#54595f"
        text-color="#fff"
        menu-trigger="hover"
        active-text-color="#ff6a3e"
        @select="handleSelect"
      >
        <el-menu-item index="1"><NuxtLink to="/">Home</NuxtLink></el-menu-item>
        <el-submenu index="2">
          <template slot="title">Our Services</template>
          <el-menu-item index="2-1"
            ><span class="p-10">Air Freight</span></el-menu-item
          >
          <el-menu-item index="2-2"
            ><span class="p-10">Chain Management</span></el-menu-item
          >
          <el-menu-item index="2-3"
            ><span class="p-10">Counter Surveillance</span></el-menu-item
          >
          <el-menu-item index="2-4"
            ><span class="p-10">Mineral Refinery</span></el-menu-item
          >
          <el-menu-item index="2-4"
            ><span class="p-10">Ocean Freight</span></el-menu-item
          >
          <el-menu-item index="2-4"
            ><span class="p-10">Storage Facility</span></el-menu-item
          >
        </el-submenu>

        <el-menu-item index="3"
          ><NuxtLink to="/aboutUs">About Us</NuxtLink></el-menu-item
        >
        <el-menu-item index="4">
          <NuxtLink to="/conactUs">Contact Us</NuxtLink></el-menu-item
        >
        <el-menu-item index="5"
          ><NuxtLink to="/storage">Storage</NuxtLink></el-menu-item
        >
        <el-menu-item index="6"
          ><NuxtLink to="/track_shipment"
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
      activeIndex: '1',
      drawer: false,
    }
  },

  created() {},
  methods: {
    handleSelect(key: number, keyPath: any) {
      console.log(key, keyPath)
    },
  },
})
</script>
<style lang="scss" scoped>
$small_screen: 426px;
$laptop_screen: 1024px;
.header {
  background: #54595f;
  position: sticky;
  top: 0;
  z-index: 100;
  .header_logo > img {
    height: 50px;
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
</style>
