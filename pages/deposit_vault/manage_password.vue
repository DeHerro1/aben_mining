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
          <el-button type="primary">Change Password</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import SideBar from '../../components/vault/sidebar.vue'

export default Vue.extend({
  name: 'ManagePassword',
  // components: { SideBar },
  layout: 'dashboard',

  data() {
    return {}
  },
  methods: {},
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
  // overflow-y: scroll;
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
