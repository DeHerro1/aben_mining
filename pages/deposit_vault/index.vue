<template>
  <div class="vault_content_container" v-loading="loading">
    <h3>Deposit Summary</h3>
    <el-card class="box-card vault_content">
      <h4>Deposit Status</h4>
      <div class="vault_content_header">
        <p>
          {{ depositor && depositor.firstName }}
          {{ depositor && depositor.lastName }}
        </p>
        <p><b>Deposit Serial NO:</b>*****v443</p>
        <p><b>Current Value:</b> {{ depositor && depositor.item_value }}</p>
      </div>
      <div class="vault_content_header">
        <p><b>Deposit Code: </b> *****</p>
        <p>
          <b>Deposit Date:</b>
          {{ $moment(depositor.createdAt).format('DD MMM, YY') }}
        </p>
      </div>
      <div class="vault_deposit_status">
        <section class="deposit_text">
          <p>Depositor Name:</p>
          <p>{{ depositor.firstName }} {{ depositor.lastName }}</p>
        </section>
        <section>
          <p>Date Deposited:</p>
          <p>{{ $moment(depositor.createdAt).format('DD MMM, YY') }}</p>
        </section>
        <section class="deposit_text">
          <p>Goods/Item Deposited:</p>
          <p>{{ depositor.item_type }}</p>
        </section>
        <section>
          <p>Quantity:</p>
          <p>{{ depositor.quantity }}</p>
        </section>

        <section class="deposit_text">
          <p>Purpose:</p>
          <p>{{ depositor.item_description }}</p>
        </section>
        <section>
          <p>Next of Kin:</p>
          <p>{{ depositor.next_of_kin }}</p>
        </section>
        <section class="deposit_text">
          <p>Relationship with Kin:</p>
          <p>{{ depositor.relationship }}</p>
        </section>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import SideBar from '../../components/vault/sidebar.vue'

export default Vue.extend({
  name: 'DepositVault',
  // components: { SideBar },
  layout: 'dashboard',

  data() {
    return {
      loading: false as boolean,
      depositor: {},
    }
  },
  async mounted() {
    this.loading = true
    try {
      const id = localStorage.getItem('5%5od4po43')
      const deposits = await this.$axios.get('/deposits')
      const deposit = deposits.data.data.find((depo: any) => depo._id === id)
      console.log(deposit)
      this.depositor = deposit
      this.loading = false
    } catch (error) {
      this.loading = false
    }
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
  margin: 20px 20px 0 310px;
  min-height: 500px;
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
        // margin-bottom: 10px;
        padding: 5px;
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
