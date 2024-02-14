<template>
  <div>
    <div class="home_office_container">
      <div
        v-for="(office, index) in homeOffice"
        :key="index"
        class="home_office"
      >
        <section class="home_office_icon">
          <i :class="office.icon"></i>
        </section>
        <section>
          <h3>{{ office.title }}</h3>
          <div>
            <p>{{ office.main_text }}</p>
          </div>
        </section>
      </div>
    </div>
    <footer class="footer">
      <div class="section">
        <div class="footer_content">
          <p>Copyright © Access Group Security 2024. All Right Reserved</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FooterPage',
  data() {
    return {
      user: 'login',
      homeOffice: [
        {
          main_text: 'security@accessgroupsecurity.com',
          title: 'Email Address',
          icon: 'el-icon-message',
        },
        {
          main_text: '88 Kingsway, London WC2B 6AA, United Kingdom',
          title: 'Main Address',
          icon: 'el-icon-location',
        },
        {
          main_text: '88 Kingsway, London WC2B 6AA, United Kingdom',
          title: 'UK Branch',
          icon: 'el-icon-place',
        },
      ],
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
$small_screen: 426px;

$medium_screen: 769px;
$laptop_screen: 1024px;

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

.home_office_container {
  margin: 30px auto;
  width: 90%;
  display: grid;

  grid-template-columns: repeat(3, 1fr);
  @media (max-width: $small_screen) {
    display: flex;
    margin: 30px 0;
    width: 100%;
    flex-direction: column;
  }
  .home_office {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 230px;
    width: 100%;
    text-align: center;
    @media (max-width: $small_screen) {
      height: 200px;
    }
    p {
      width: 90%;
      margin: 10px auto;
      @media (max-width: $small_screen) {
        width: 100%;
      }
    }
    .home_office_icon {
      margin-bottom: 20px;
      background-color: #54595f;
      width: 80px;
      height: 80px;
      padding: 20px;
      display: flex;
      justify-content: center;
      border-radius: 50%;

      i {
        font-size: 3rem;
        color: #fff;
      }
    }
  }
}
</style>
