<template>
  <div class="vault_content_container">
    <h3>Customer Information</h3>
    <el-card class="box-card vault_content">
      <h4>Depositor's Details</h4>
      <div class="vault_content_header">
        <p><b>Deposit Code: </b> *****</p>
        <p><b>Deposit Date:</b> 04 May 2022</p>
      </div>
      <div class="vault_deposit_status">
        <section class="deposit_text">
          <p>Name:</p>
          <p>Dwayne</p>
        </section>
        <section>
          <p>Date Deposited:</p>
          <p>20 October 2022</p>
        </section>
        <section class="deposit_text">
          <p>Goods/Item Deposited:</p>
          <p>Gold bars</p>
        </section>
        <section>
          <p>Quantity:</p>
          <p>500kg</p>
        </section>

        <section class="deposit_text">
          <p>Purpose:</p>
          <p>Safety</p>
        </section>
        <section>
          <p>Next of Kin:</p>
          <p>Hennessy</p>
        </section>
        <section class="deposit_text">
          <p>Relationship with Kin:</p>
          <p>Son</p>
        </section>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import SideBar from '../../components/vault/sidebar.vue'

export default Vue.extend({
  name: 'CustomerInformation',
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
  @media (max-width: $medium_screen) {
    margin-left: 210px;
  }
  .vault_content {
    margin-top: 20px;
    padding: 20px;
    padding-bottom: 40px;
    .vault_content_header {
      width: 90%;
      margin: 20px auto;
      display: flex;
      justify-content: space-between;
    }
    .vault_deposit_status {
      width: 80%;
      margin: 0 auto;
      section {
        margin-bottom: 10px;
        display: flex;
        // justify-content: space-between;
        p {
          width: 50%;
          color: #000 !important;
          margin-right: 5px;
          padding: 5px;
        }
      }
      .deposit_text {
        p {
          background: rgba(255, 106, 62, 0.7);
        }
      }
    }
  }
}
</style>
