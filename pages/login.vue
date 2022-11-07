<template>
  <div class="login_main_container">
    <div class="login_container">
      <h3 class="center py-20" style="font-size: 30px">Login</h3>
      <div>
        <div class="pb-20">
          <label for="security_code">Security Code</label>
          <el-input id="security_code" class="mt-5"></el-input>
        </div>
        <div class="pt-10 pb-20">
          <label for="transaction_code">Transaction Code</label>
          <el-input id="transaction_code" class="mt-5"></el-input>
        </div>
        <div class="pb-20">
          <el-checkbox v-model="checked">Remember Me</el-checkbox>
        </div>
        <div class="px-20">
          <el-button type="primary" style="width: 100%">Login</el-button>
        </div>
        <div class="pt-20 pl-10">
          <p style="color: #de0b0b; cursor: pointer">
            Forgotten Transaction Code ?
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
  data() {
    return {
      checked: false,
    }
  },
  methods: {},
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;
.login_main_container {
  width: 100%;
  height: 640px;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_container {
    padding: 20px;
    width: 40%;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    @media (max-width: $small_screen) {
      width: 100%;
      box-shadow: none;
    }
  }
  @media (max-width: $medium_screen) {
    padding-top: 20px;
  }
  @media (max-width: $small_screen) {
    min-height: 400px;
  }
}
</style>
