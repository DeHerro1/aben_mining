<template>
  <div class="deposit_vault_container">
    <div>
      <SideBar />
    </div>
    <div class="vault_content_container">
      <el-card class="box-card vault_content">
        <h3>Deposit Status</h3>
        <div class="vault_content_header">
          <p><b>Deposit Code: </b> *****</p>
          <p><b>Deposit Date:</b> 04 May 2022</p>
        </div>
        <div class="vault_deposit_status">
          <section>
            <p>Depositor Name:</p>
            <p>Dwayne</p>
          </section>
          <section>
            <p>Date Deposited:</p>
            <p>20 October 2022</p>
          </section>
          <section>
            <p>Goods/Item Deposited:</p>
            <p>Gold bars</p>
          </section>
          <section>
            <p>Quantity:</p>
            <p>500kg</p>
          </section>

          <section>
            <p>Purpose:</p>
            <p>Safety</p>
          </section>
          <section>
            <p>Next of Kin:</p>
            <p>Hennessy</p>
          </section>
          <section>
            <p>Relationship with Kin:</p>
            <p>Son</p>
          </section>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SideBar from '../../components/vault/sidebar.vue'

export default Vue.extend({
  name: 'DepositVault',
  components: { SideBar },
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
.deposit_vault_container {
  height: 80vh;

  .vault_content_container {
    height: 500px;
    margin: 20px 20px 0 310px;
    // overflow-y: scroll;
    .vault_content {
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
        &:nth-child(1) {
          background: red;
        }
        section {
          margin-bottom: 10px;
          display: flex;
          // justify-content: space-between;
          p {
            width: 50%;
          }
        }
      }
    }
  }
}
</style>
