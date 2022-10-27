<template>
  <div class="support_more">
    <el-dialog title="Shipping address" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="Promotion name" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Zones" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="Please select a zone">
            <el-option label="Zone No.1" value="shanghai"></el-option>
            <el-option label="Zone No.2" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
    <div class="support_container">
      <div class="support_inner">
        <h3>Need Support?</h3>
        <p>We provide first class freight services</p>

        <el-button class="contact_us_btn" @click="$router.push('/contactUs')">
          CONTACT US
        </el-button>
      </div>
    </div>
    <div class="support_container mt-20">
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
    }
  },
  methods: {},
})
</script>
<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;
.support_more {
  width: 100%;
  @media (max-width: $medium_screen) {
    display: flex;
  }
  @media (max-width: $small_screen) {
    display: block;
  }
  .support_container {
    height: 250px;
    padding: 40px 20px;
    background: var(--color-primary);
    width: 340px;
    @media (max-width: $laptop_screen) {
      width: 300px;
    }
    @media (max-width: $medium_screen) {
      width: 40%;
      margin: 20px auto;
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
