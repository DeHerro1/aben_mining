<template>
  <div class="deposit_details">
    <div class="d-flex pb-20">
      <NuxtLink to="/depositors"
        ><span class="backDirection"><i class="el-icon-back"></i> </span
      ></NuxtLink>
      <h4 class="pt-5 pl-20">Depositor Details</h4>
    </div>
    <div class="d-flex justify_around pt-20">
      <section class="listing_bar">
        <p>Depositor name</p>
        <p class="pt-10">
          <b>{{ depositor.firstName }} {{ depositor.lastName }} </b>
        </p>
      </section>
      <section class="listing_bar">
        <p>Depositor Email</p>
        <!-- <el-input
            v-if="listing.listing_detail"
            v-model="listing.listing_detail.price"
          /> -->
        <p class="pt-10">
          <b>{{ depositor.email }} </b>
        </p>
      </section>
      <section class="listing_bar">
        <p>Depositor Phone number</p>
        <!-- <el-input
            v-if="listing.listing_detail"
            v-model="listing.listing_detail.price"
          /> -->
        <p class="pt-10">
          <b>{{ depositor.phone }} </b>
        </p>
      </section>
    </div>
    <div class="d-flex justify_around pt-30">
      <section class="">
        <p>Date of birth</p>
        <p class="pt-10">
          <b>{{ $moment(depositor.dob).format('DD MMM, YY') }} </b>
        </p>
      </section>
      <section class="">
        <p>Location</p>
        <p class="pt-10">
          <b
            >{{ depositor.city }} {{ depositor.state }},
            {{ depositor.country }}
          </b>
        </p>
      </section>
      <section class="">
        <p>Created Date</p>
        <p class="pt-10">
          <!-- <b>
                {{
                  listing && $moment(listing.created_at).format('MMM DD, YY')
                }}
              </b> -->
          <b> {{ depositor.createdAt }} </b>
        </p>
      </section>
    </div>
    <el-divider></el-divider>
    <section class="pt-30">
      <h4 class="pb-20">Item Details</h4>
      <!-- <el-input
        v-if="listing.listing_detail"
        v-model="listing.listing_detail.description"
        type="textarea"
        :rows="2"
      /> -->
      <div class="d-flex justify_around">
        <section class="">
          <p class="pr-20">Item Type</p>
          <p class="">
            <b>{{ depositor.item_type }} </b>
          </p>
        </section>
        <section class="">
          <p>Item Value</p>
          <p class="pt-10">
            <b>{{ depositor.item_value }} </b>
          </p>
        </section>
        <section class="">
          <p>Deposit Date</p>
          <p class="pt-10">
            <b>{{ depositor.deposit_date }} </b>
          </p>
        </section>
        <section class="">
          <p>Item Quantity</p>
          <p class="pt-10">
            <b>{{ depositor.quantity }} </b>
          </p>
        </section>
      </div>
    </section>
    <section class="pt-30" style="width: 85%; margin: 0 auto">
      <section>
        <p>Item Description</p>
        <p class="pt-10">
          <b> {{ depositor.item_description }} </b>
        </p>
      </section>
    </section>
    <el-divider></el-divider>
    <section class="pt-30 mb-20">
      <h4 class="pb-20">Next of Kin</h4>
      <div class="d-flex justify_around" style="width: 50%">
        <section class="">
          <p class="pr-20">Kin Name</p>
          <p class="">
            <b>{{ depositor.next_of_kin }} </b>
          </p>
        </section>
        <section class="">
          <p class="pr-20">Relationship with Kin</p>
          <p class="">
            <b>{{ depositor.relationship }} </b>
          </p>
        </section>
      </div>
    </section>

    <div class="d-flex justify_end pt-30 mr-20">
      <el-button
        type="secondary"
        :loading="deleteLoading"
        class="mr-10"
        style="color: red"
        @click="open(depositor._id)"
      >
        <i class="el-icon-close pr-10"></i>Delete Depositor</el-button
      >
      <el-button type="primary" class="mr-10" @click="updateDeposit">
        <i class="el-icon-check pr-10"></i>Save Changes</el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'DepositorDetails',
  layout: 'adminDash',
  data() {
    return {
      activeName: 'first' as string,
      imageErr: '' as string,
      image: '' as any,
      approvalLoader: false,
      deleteLoading: false,
      listing_id: this.$route.params.id,
      newOtherSpec: {
        name: '',
        number: 0,
      } as any,
      listing: {} as any,
      loading: false as boolean,
      depositorID: this.$route.query.id,
      depositor: {},
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      const depositorsResponse = await this.$axios.get('/deposits')

      const depositors = depositorsResponse.data.data
      this.depositor = depositors.find(
        (depo: any) => depo._id === this.depositorID
      )
      console.log(this.depositor)
    },
    open(id: string) {
      // const h = this.$createElement
      this.$confirm('Are you sure you want to delete?', {
        cancelButtonText: 'No, i want to keep',
        confirmButtonText: 'Yes,I want to Delete',
      })
        .then(() => {
          this.deleteDepositor(id)
        })
        .catch((err: any) => {
          console.log(err)
        })
    },
    async updateDeposit() {
      // const deposits = await this.$axios.update('/deposits', )
    },

    async deleteDepositor(id: string) {
      this.deleteLoading = true
      console.log(id)
      try {
        const ListingResponse = await this.$axios.delete('/deposits')

        console.log(ListingResponse)

        this.deleteLoading = false
        this.fetchData()
        //  this.
        this.$router.replace('/deposit_vault/depositors')
      } catch (error) {
        this.deleteLoading = false
        console.log(error, 'error')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
.btn_small {
  padding: 5px !important;
}
.deposit_details {
  padding-top: 20px;
  height: 700px;
  overflow-y: scroll;
  padding-bottom: 50px;
  margin: 20px 20px 0 310px;
}
.backDirection {
  color: black;
  i {
    font-size: 30px;
  }
}
</style>
