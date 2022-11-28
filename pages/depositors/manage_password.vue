<template>
  <div class="vault_content_container">
    <h3>Change Password</h3>
    <el-card class="box-card vault_content">
      <div class="password_content">
        <!-- <div class="pt-10">
          <label for="old_password">Old Password</label>
          <el-input></el-input>
        </div> -->
        <div class="pt-20">
          <label for="old_password">New Password</label>
          <el-input v-model="code.passcode" class="pt-5"></el-input>
        </div>
        <div class="pt-20">
          <label for="old_password">New Transaction Code</label>
          <el-input v-model="code.transaction_code" class="pt-5"></el-input>
        </div>
        <div class="change_pass_btn">
          <el-button
            type="primary"
            :loading="changeLoader"
            @click="changePassword"
            >Change Password</el-button
          >
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import SideBar from '../../components/vault/sidebar.vue'

export default Vue.extend({
  name: 'AdminManagePassword',
  // components: { SideBar },
  layout: 'adminDash',

  data() {
    return {
      admin: {} as any,
      changeLoader: false as boolean,
      code: {
        passcode: '' as string,
        transaction_code: '' as string,
      },
    }
  },
  async created() {
    try {
      const id = localStorage.getItem('5%5od4pogift')
      const users = await this.$axios.get(`/users`)

      const admin = users.data.data.find((user: any) => user._id === id)
      console.log(admin)
      this.admin = admin
    } catch (error) {}
  },
  methods: {
    open2(message: string, type: any) {
      this.$message({
        message,
        type,
      })
    },
    async changePassword() {
      this.changeLoader = true
      try {
        const depositorsResponse = await this.$axios.put(
          `/users/${this.admin._id}`,
          this.code
        )
        console.log(depositorsResponse)
        this.open2('Admin updated successful!', 'success')
        this.changeLoader = false
      } catch (error) {
        this.changeLoader = false
        console.error(error)
      }
    },
  },
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;

.vault_content_container {
  padding-top: 20px;
  height: 100vh;
  margin: 20px 20px 0 310px;
  @media (max-width: $laptop_screen) {
    margin-left: 210px;
  }
  @media (max-width: $small_screen) {
    width: 100%;
    margin: 0;
    margin-top: 40px;
  }
  h3 {
    padding: 10px;
  }
  .vault_content {
    margin-top: 20px;
    padding: 20px;
    padding-bottom: 40px;
    height: 350px;
    width: 60%;
    margin: 0 auto;
    @media (max-width: $medium_screen) {
      margin: 10px;
      width: 100%;
    }
    @media (max-width: $small_screen) {
      margin: 0;
      // width: 100%;
    }
    .password_content {
      width: 80%;
      margin: 0 auto;
      .change_pass_btn {
        padding-top: 40px;
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>
