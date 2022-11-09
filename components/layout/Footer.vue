<template>
  <footer class="footer">
    <div class="section">
      <div class="footer_content">
        <p>Copyright © Access Group Security 2021. All Right Reserved</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FooterPage',
  data() {
    return {
      user: 'login',
    }
  },
  methods: {
    showLoginModal(): void {
      ;(this as any).$refs.loginAction.showLogin(this.user)
    },
  },
})
</script>
<style lang="scss" scoped>
.footer {
  // margin-top: 50px;
  background: #1d1a1a;
  position: relative;
  z-index: 100;
}
.footer_content {
  color: #fff;
  padding: 20px 0;
  p {
    font-size: 16px;
    @media (max-width: 425px) {
      font-size: 14px;
    }
  }
}
</style>
