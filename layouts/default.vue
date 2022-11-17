<template>
  <el-container style="height: 100vh">
    <el-main style="display: flex; flex-direction: column; padding: 0">
      <TopHeader />
      <NavHeader />
      <Nuxt />
      <Footer />
    </el-main>
  </el-container>
</template>

<script>
import Footer from '../components/layout/Footer.vue'
import NavHeader from '../components/layout/NavHeader.vue'
import TopHeader from '../components/layout/TopHeader.vue'
// import Vue from 'vue'
// import global from '~/mixins/global.ts'

// Vue.mixin(global)
export default {
  name: 'App',
  components: {
    Footer,
    NavHeader,
    TopHeader,
  },
}
</script>
