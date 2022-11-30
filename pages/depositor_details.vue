<template>
  <div class="deposit_details">
    <div class="d-flex pb-20 backArrow">
      <NuxtLink to="/depositors"
        ><span class="backDirection ml-10"><i class="el-icon-back"></i> </span
      ></NuxtLink>
      <h3 class="pt-5 pl-20">Depositor Details</h3>
    </div>
    <div class="depo_details">
      <div class="pt-20">
        <section class="listing_bar">
          <p>Depositor name</p>
          <div class="pt-10 d-flex">
            <el-input
              v-model="depositor.firstName"
              placeholder="First name"
              class="mr-10"
            ></el-input>
            <el-input
              v-model="depositor.lastName"
              placeholder="Last name"
            ></el-input>
          </div>
        </section>
        <section class="pt-20">
          <p>Depositor Email</p>
          <el-input v-if="depositor" v-model="depositor.email" class="pt-10" />
        </section>
        <section class="pt-20">
          <p>Depositor Phone number</p>
          <el-input v-if="depositor" v-model="depositor.phone" class="pt-10" />
        </section>
      </div>
      <div class="pt-30">
        <section class="">
          <p>Date of birth</p>
          <div class="d-flex pt-10">
            <p class="pt-20 pr-10">
              <b>{{ depositor.dob }} </b>
            </p>
            <el-date-picker
              v-model="depositor.dob"
              type="date"
              class="pt-10"
              placeholder="Pick a day"
            >
            </el-date-picker>
          </div>
        </section>
        <section class="pt-20">
          <p>Country</p>
          <el-input
            v-if="depositor"
            v-model="depositor.country"
            class="pt-10"
          />
        </section>
        <section class="pt-20">
          <p>City</p>
          <el-input v-if="depositor" v-model="depositor.city" class="pt-10" />
        </section>
        <section class="pt-20">
          <p>State</p>
          <el-input v-if="depositor" v-model="depositor.state" class="pt-10" />
        </section>
      </div>
      <!-- <el-divider></el-divider> -->
      <section class="pt-30">
        <!-- <h4 class="pb-20">Item Details</h4> -->
        <div class="">
          <section class="pt-20">
            <p class="pr-20">Item Type</p>
            <el-input
              v-if="depositor"
              v-model="depositor.item_type"
              class="pt-10"
            />
          </section>
          <section class="">
            <p>Item Value</p>
            <el-input
              v-if="depositor"
              v-model="depositor.item_value"
              class="pt-10"
            />
          </section>
          <section class="">
            <p>Deposit Date</p>
            <el-date-picker
              v-model="depositor.deposit_date"
              type="date"
              class="pt-10"
              placeholder="Pick a day"
            >
            </el-date-picker>
          </section>
          <section class="">
            <p>Item Quantity</p>
            <el-input
              v-if="depositor"
              v-model="depositor.quantity"
              class="pt-10"
            />
          </section>
        </div>
      </section>
      <section class="pt-30">
        <section>
          <p>Item Description</p>
          <el-input
            v-if="depositor"
            v-model="depositor.item_description"
            class="pt-10"
          />
        </section>
        <section class="pt-20">
          <p>Tracking Status</p>
          <el-select
            v-model="depositor.status"
            class="mt-10"
            placeholder="Select"
          >
            <el-option label="Pending" value="pending"> </el-option>
            <el-option label="Delivered" value="delivered"> </el-option>
            <el-option label="In-transit" value="in-transit"> </el-option>
            <el-option label="Rejected" value="rejected"> </el-option>
            <el-option label="With customs" value="with-customs"> </el-option>
            <el-option label="On hold" value="on-hold"> </el-option>
          </el-select>
        </section>
      </section>
      <section class="pt-30 mb-20">
        <!-- <h4 class="pb-20">Next of Kin</h4> -->
        <div class="">
          <section class="">
            <p class="pr-20">Kin Name</p>
            <el-input
              v-if="depositor"
              v-model="depositor.next_of_kin"
              class="pt-10"
              style="width: 100%"
            />
          </section>
          <section class="pt-20">
            <p class="pr-20">Relationship with Kin</p>
            <el-input
              v-if="depositor"
              v-model="depositor.relationship"
              class="pt-10"
              style="width: 100%"
            />
          </section>
        </div>
      </section>
      <div class="details_btns pt-30">
        <el-button
          type="secondary"
          :loading="deleteLoading"
          class="deletebtn"
          style="color: red"
          @click="open(depositor._id)"
        >
          <i class="el-icon-close pr-10"></i>Delete Depositor</el-button
        >
        <el-button type="primary" class="submitbtn" @click="updateDeposit">
          <i class="el-icon-check pr-10"></i>Save Changes</el-button
        >
      </div>
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
      approvalLoader: false,
      deleteLoading: false,

      loading: false as boolean,
      depositorID: this.$route.query.id,
      depositor: {} as any,
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
    open2(message: string, type: any) {
      this.$message({
        message,
        type,
      })
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
      try {
        const deposits = await this.$axios.put(
          `/deposits/${this.depositor._id}`,
          this.depositor
        )
        this.open2('Depositor updated successful!', 'success')
        console.log(deposits)
      } catch (error) {
        this.open2('There is an error!', 'error')
        console.error(error)
      }
    },

    async deleteDepositor(id: string) {
      this.deleteLoading = true
      console.log(id)
      try {
        const ListingResponse = await this.$axios.delete(
          `/deposits/${this.depositor._id}`
        )
        this.open2('Depositor deleed successful!', 'success')
        console.log(ListingResponse)

        this.deleteLoading = false
        this.fetchData()
        //  this.
        this.$router.replace('/depositors')
      } catch (error) {
        this.deleteLoading = false
        console.error(error, 'error')
      }
    },
  },
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;
.btn_small {
  padding: 5px !important;
}
.deposit_details {
  padding-top: 20px;
  height: 800px;
  overflow-y: scroll;
  padding-bottom: 50px;
  margin: 20px 20px 0 310px;
  @media (max-width: $laptop_screen) {
    margin-left: 210px;
  }
  @media (max-width: $small_screen) {
    margin-left: 0;
  }
  .depo_details {
    width: 60%;
    margin: 0 auto;
    @media (max-width: $medium_screen) {
      width: 80%;
    }
  }
  .details_btns {
    display: flex;
    justify-content: flex-end;
    margin-right: 20px;
    .deletebtn {
      margin-right: 10px;
      @media (max-width: $small_screen) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
    .submitbtn {
      margin-left: 0;
    }
    @media (max-width: $medium_screen) {
      margin-right: 0;
    }
    @media (max-width: $small_screen) {
      flex-direction: column;

      width: 100%;
    }
  }
}
.backArrow {
  @media (max-width: $small_screen) {
    margin-top: 20px;
  }
}
.backDirection {
  color: black;
  i {
    font-size: 30px;
  }
}
</style>
