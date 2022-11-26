<template>
  <div>
    <div class="deposit_vault_container">
      <el-main>
        <AdminSideBar />
        <Nuxt />
        <Footer />
      </el-main>

      <!-- <div class="dash_footer"> -->

      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import Footer from '../components/layout/Footer.vue'
import AdminSideBar from '../components/vault/AdminSideBar.vue'
// import Vue from 'vue'
// import global from '~/mixins/global.ts'

// Vue.mixin(global)
export default {
  name: 'AdminLayout',
  components: {
    Footer,
    AdminSideBar,
  },
}
</script>
<style lang="scss" scoped>
.deposit_vault_container {
  // height: 80vh;
}
@media (min-width: 1024px) {
  // .dash_footer {
  //   position: absolute;
  //   bottom: 0;
  // }
}
.dash_footer {
  width: 100%;
  margin-top: 20px;
}
</style>
