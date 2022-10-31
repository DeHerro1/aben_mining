<template>
  <div class="support_more">
    <div class="support_container">
      <div class="support_inner">
        <h3>Need Support?</h3>
        <p>We provide first class freight services</p>

        <el-button class="contact_us_btn" @click="$router.push('/contactUs')">
          CONTACT US
        </el-button>
      </div>
    </div>
    <div class="support_container support_container_new">
      <div class="support_inner">
        <h3>For Any Enquiry</h3>
        <p>We are always available</p>
        <el-button
          class="contact_us_btn mt-20"
          @click="dialogFormVisible = true"
        >
          CONTACT US
        </el-button>
      </div>
    </div>
    <el-dialog
      title="Freight Details"
      width="60%"
      :visible.sync="dialogFormVisible"
    >
      <el-form :model="form">
        <!-- <el-form-item label="Zones" :label-width="formLabelWidth"> -->
        <div class="form_freight_select mb-10">
          <el-select v-model="form.freight_type" placeholder="Freight Type">
            <el-option
              v-for="type in freight_types"
              :key="type"
              :label="type"
              :value="type"
            >
              {{ type }}
            </el-option>
          </el-select>
          <el-select v-model="form.terms" placeholder="Incoterms">
            <el-option
              v-for="term in incoterms"
              :key="term"
              :label="term"
              :value="term"
            >
              {{ term }}
            </el-option>
          </el-select>
        </div>
        <!-- </el-form-item> -->
        <div>
          <el-input
            v-model="form.name"
            placeholder="City of departure"
            class="mb-10"
          ></el-input>
          <el-input
            v-model="form.name"
            placeholder="Delivery city"
            class="mb-10"
          ></el-input>
          <el-input
            v-model="form.name"
            placeholder="Total gross weight (KG)"
            class="mb-10"
          ></el-input>
          <el-input
            v-model="form.name"
            type="email"
            placeholder="Dimension"
            class="mb-10"
          ></el-input>
          <el-input
            v-model="form.name"
            placeholder="Dimension"
            class="mb-10"
          ></el-input>
          <el-input
            v-model="form.message"
            type="textarea"
            :rows="3"
            placeholder="MESSAGE"
          >
          </el-input>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Submit</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'EnquiryPage',
  data() {
    return {
      dialogFormVisible: false,
      user: 'login',
      form: {},
      freight_types: [
        'Road Transportation',
        'Air Transportation',
        'Sea Transportation',
        'Warehousing',
      ],
      incoterms: [
        'EXW',
        'FCA',
        'CPT',
        'CIP',
        'DAT',
        'DAP',
        'DDP',
        'FAS',
        'FOB',
        'CFR',
        'CIF',
      ],
    }
  },
  methods: {},
})
</script>
<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;
.support_container_new {
  @media (min-width: 1440px) {
    margin-top: 30px;
  }
}
.form_freight_select {
  //   display: flex;
  //   justify-content: space-between;
  .el-select {
    margin-right: 10px;
  }
  @media (max-width: $small_screen) {
    display: flex;
    flex-direction: column;
  }
}
.support_more {
  width: 100%;
  margin-left: 20px;
  @media (max-width: $medium_screen) {
    display: flex;
    // width: 80%;
    justify-content: space-around;
    margin: 20px auto;
  }
  @media (max-width: $small_screen) {
    display: block;
  }
  .support_container {
    height: 250px;
    padding: 40px 20px;
    background: var(--color-primary);
    margin-bottom: 30px;
    width: 340px;
    @media (max-width: $laptop_screen) {
      width: 300px;
    }
    @media (max-width: $medium_screen) {
      width: 40%;
      margin-bottom: 0;
    }
    @media (max-width: $small_screen) {
      width: 80%;
      // margin: 20px auto;
    }
    .support_inner {
      width: 90%;
      text-align: center;
      margin: 0 auto;
      h3 {
        padding-bottom: 10px;
        color: #fff;
      }
      p {
        color: #fff;
        padding-bottom: 50px;
      }
      .contact_us_btn {
        color: var(--color-primary);
      }
    }
  }
}
</style>
