<template>
  <div>
    <section class="about_header">
      <div class="about_header_text">
        <h2>Tracking Here</h2>
      </div>
    </section>
    <div class="section pt-20">
      <div class="tracking_main_content">
        <div class="tracking_content_container">
          <h3 class="py-20">Enter the Consignment No.</h3>
          <div class="tracking_content">
            <el-input
              v-model="tracking_id"
              placeholder="TRACKING ID"
              style="w-100"
            ></el-input>
            <div class="tracking_btn_container">
              <el-button type="danger" class="tracking_btn">TRACKING</el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TrackingPage',
  data() {
    return {
      tracking_id: '' as string,
    }
  },
  methods: {},
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;
h3 {
  color: var(--color-primary);
  font-weight: 700;
  font-size: 1.8rem;
  padding-bottom: 20px;
  @media (max-width: $small_screen) {
    font-size: 1.5rem;
    text-align: center;
    line-height: 1em;
  }
}
.about_header {
  height: 350px;
  margin-bottom: 30px;
  background-image: url('../assets/img/truch_slider1.jpg');
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  .about_header_text {
    position: relative;
    color: white;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    h2 {
      // font-size: 3rem;
      font-weight: 800;
      @media (max-width: $small_screen) {
        font-size: 2.6rem;
        font-weight: 800;
      }
    }
  }
}
.tracking_main_content {
  width: 80%;
  margin: 30px auto;
  min-height: 200px;
  .tracking_content_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .tracking_content {
      display: flex;
      width: 80%;
      @media (max-width: $small_screen) {
        flex-direction: column;
        width: 80%;
      }
    }

    .tracking_btn_container {
      margin-left: 10px;
      @media (max-width: $small_screen) {
        margin-left: 0;
        margin-top: 10px;
        display: flex;
        justify-content: flex-end;
      }
      .tracking_btn {
        height: 100%;
      }
    }
  }
}
</style>
