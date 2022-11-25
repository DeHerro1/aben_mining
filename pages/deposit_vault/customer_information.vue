<template>
  <div class="vault_content_container" v-loading="loading">
    <!-- <h3>Customer Information</h3> -->
    <h3 class="depositor_details_header">Depositor's Details</h3>
    <el-card class="box-card vault_content">
      <div class="vault_content_header">
        <p><b>Deposit Code: </b> *****</p>
        <p>
          <b>Deposit Created:</b>
          {{ $moment(depositor.createdAt).format('DD MMM, YY') }}
        </p>
      </div>
      <div class="vault_deposit_status">
        <section class="deposit_text">
          <p>Name:</p>
          <p v-if="depositor">
            {{ depositor.firstName }} {{ depositor.lastName }}
          </p>
        </section>

        <section>
          <p>Date Deposited:</p>
          <p v-if="depositor">
            {{ $moment(depositor.deposit_date).format('DD MMM, YY') }}
          </p>
        </section>
        <section class="deposit_text">
          <p>Country:</p>
          <p v-if="depositor">{{ depositor.country }}</p>
        </section>
        <section>
          <p>Date of birth:</p>
          <p v-if="depositor">
            {{ depositor.dob }}
          </p>
        </section>
        <section class="deposit_text">
          <p>Email:</p>
          <p v-if="depositor">{{ depositor.email }}</p>
        </section>
        <section>
          <p>Gender:</p>
          <p v-if="depositor">{{ depositor.gender }}</p>
        </section>
        <section class="deposit_text">
          <p>ID Number:</p>
          <p v-if="depositor">{{ depositor.id_number }}</p>
        </section>
        <section>
          <p>Phone Number:</p>
          <p v-if="depositor">{{ depositor.phone }}</p>
        </section>
        <section class="deposit_text">
          <p>Goods/Item Deposited:</p>
          <p v-if="depositor">{{ depositor.item_type }}</p>
        </section>
        <section>
          <p>Goods/Item Value:</p>
          <p v-if="depositor">{{ depositor.item_value }}</p>
        </section>

        <section class="deposit_text">
          <p>Quantity:</p>
          <p v-if="depositor">{{ depositor.quantity }}</p>
        </section>
        <section>
          <p>Description:</p>
          <p v-if="depositor">{{ depositor.item_description }}</p>
        </section>
        <section class="deposit_text">
          <p>Next of Kin:</p>
          <p v-if="depositor">{{ depositor.next_of_kin }}</p>
        </section>
        <section>
          <p>Relationship with Kin:</p>
          <p v-if="depositor">{{ depositor.relationship }}</p>
        </section>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CustomerInformation',
  layout: 'dashboard',

  data() {
    return {
      loading: false,
      depositorID: 0,
      depositor: {},
    }
  },
  async mounted() {
    this.loading = true
    try {
      const id = localStorage.getItem('5%5od4po43')
      const deposits = await this.$axios.get('/deposits')
      const deposit = deposits.data.data.find((depo: any) => depo._id === id)

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
  min-height: 700px;
  overflow-y: scroll;
  margin: 20px 20px 40px 310px;
  @media (max-width: $laptop_screen) {
    margin-left: 210px;
  }
  @media (max-width: $small_screen) {
    margin-left: 10px;
  }
  .vault_content {
    margin-top: 20px;
    margin-bottom: 40px;
    padding: 20px;
    // overflow-y: scroll;
    // height: 700px;
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
      @media (max-width: $small_screen) {
        width: 100%;
      }
      section {
        margin-bottom: 10px;
        display: flex;
        // justify-content: space-between;
        p {
          width: 50%;
          color: #000 !important;
          margin-right: 5px;
          padding: 5px;
          @media (max-width: $small_screen) {
            width: 100%;
            margin-right: 0;
          }
        }
      }
      .deposit_text {
        p {
          background: rgba(255, 106, 62, 0.7);
        }
      }
    }
  }
  .depositor_details_header {
    @media (max-width: $small_screen) {
      margin-top: 20px;
    }
  }
}
</style>
