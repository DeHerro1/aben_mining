<template>
  <div class="login_main_container">
    <div class="login_container">
      <h3 class="center py-20" style="font-size: 30px">Login</h3>
      <div>
        <div class="pb-20">
          <label for="security_code">Security Code</label>
          <el-input
            id="security_code"
            v-model="form.passcode"
            class="mt-5"
          ></el-input>
        </div>
        <div class="pt-10 pb-20">
          <label for="transaction_code">Transaction Code</label>
          <el-input
            id="transaction_code"
            v-model="form.transaction_code"
            class="mt-5"
          ></el-input>
        </div>
        <div class="pb-20">
          <el-checkbox v-model="checked">Remember Me</el-checkbox>
        </div>
        <div class="px-20" style="width: 50%; margin: 0 auto">
          <el-button
            type="primary"
            style="width: 100%"
            :loading="loading"
            @click="login"
            >Login</el-button
          >
        </div>
        <!-- <div class="pt-20 pl-10">
          <p style="color: #de0b0b; cursor: pointer">
            Forgotten Transaction Code ?
          </p>
        </div> -->
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
      form: {
        passcode: '' as string,
        transaction_code: '' as string,
      },
      loading: false as boolean,
    }
  },
  methods: {
    open2(message: string, messageType: any) {
      this.$message({
        message,
        type: messageType,
      })
    },
    async login() {
      this.loading = true
      try {
        const loginResponse = await this.$axios.get(
          `/users/login/${this.form.passcode}/${this.form.transaction_code}`
        )
        this.open2('Logged in successful!', 'success')
        this.loading = false
        localStorage.setItem('5%5od4pogift', loginResponse.data.data[0]._id)
        this.$router.push({
          name: 'depositors',
          query: {
            id: loginResponse.data.data[0]._id,
            name: loginResponse.data.data[0].name,
          },
        })
      } catch (error) {
        console.log(error)
        this.open2('Incorrect user credentials!', 'error')
        this.loading = false
      }
    },
  },
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;
.login_main_container {
  width: 100%;
  min-height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  .login_container {
    padding: 20px;
    width: 40%;
    height: 400px;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1),
      0 0 0 2px rgb(255, 255, 255), 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
    @media (max-width: $laptop_screen) {
      width: 50%;
    }
    @media (max-width: $medium_screen) {
      width: 50%;
    }
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
