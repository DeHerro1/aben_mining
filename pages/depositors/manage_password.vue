<template>
  <div class="vault_content_container">
    <h3>Change Password</h3>
    <el-card class="box-card vault_content">
      <div class="password_content">
        <div class="pt-10">
          <label for="old_password">Old Password</label>
          <el-input></el-input>
        </div>
        <div class="pt-20">
          <label for="old_password">New Password</label>
          <el-input></el-input>
        </div>
        <div class="change_pass_btn">
          <el-button type="primary" @click="changePassword"
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
      admin: '',
    }
  },
  async created() {
    try {
      const id = localStorage.getItem('5%5od4pogift')
      const users = await this.$axios.get(`/users`)

      const admin = users.data.data.find((user) => user._id === id)
      console.log('user', admin)
      this.admin = admin
    } catch (error) {}
  },
  methods: {
    //  async changePassword() {
    //     try {
    //     } catch (error) {
    //     }
    //   }
  },
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;

.vault_content_container {
  padding-top: 20px;
  height: 500px;
  margin: 20px 20px 0 310px;
  @media (max-width: $medium_screen) {
    margin-left: 210px;
  }
  .vault_content {
    margin-top: 20px;
    padding: 20px;
    padding-bottom: 40px;
    height: 350px;
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
