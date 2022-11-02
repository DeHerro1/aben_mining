<template>
  <div>
    <section class="about_header">
      <div class="about_header_text">
        <h2>Contact Us</h2>
      </div>
    </section>
    <div class="section">
      <div class="contact_sub_header">
        <h3>GET IN TOUCH</h3>
        <p>We’re here to help and answer any question you might have.</p>
      </div>
      <div class="contact_content_container">
        <div class="contact_content">
          <el-input
            v-model="contact_info.first_name"
            placeholder="First Name *"
            type="text"
            class="contact_info"
          ></el-input>
          <el-input
            v-model="contact_info.last_name"
            placeholder="Last Name *"
            type="text"
            class="contact_info"
          ></el-input>
          <el-input
            v-model="contact_info.email"
            placeholder="Your E-mail "
            type="email"
            class="contact_info"
          ></el-input>
          <el-input
            v-model="contact_info.website"
            placeholder="Website"
            type="website"
            class="contact_info"
          ></el-input>
        </div>
        <div>
          <el-input
            v-model="contact_info.message"
            type="textarea"
            :rows="4"
            :minlength="400"
            placeholder="Message"
          >
          </el-input>
        </div>
      </div>
      <div class="d-flex justify_center mt-20">
        <el-button type="danger" class="submit_touch_btn p-20"
          >SUBMIT NOW</el-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'AboutUs',
  data() {
    return {
      contact_info: {
        first_name: '',
        last_name: '',
        website: '',
        email: '',
        message: '',
      },
      about_img: 'about_us_bg1.jpg',
      about1: 'about1.jpg',
      about2: 'about2.jpg',
    }
  },
  methods: {
    getImg(img: string) {
      return require(`../assets/img/${img}`)
    },
  },
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
}
.about_header {
  height: 350px;
  margin-bottom: 30px;
  background-image: url('../assets/img/contact_us.jpg');
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
    }
  }
}
.contact_sub_header {
  margin-top: 80px;
  text-align: center;
  h2 {
  }
}
.contact_content_container {
  margin-top: 30px;
  .contact_content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 20px;
    @media (max-width: $small_screen) {
      display: flex;
      flex-direction: column;
    }
    .contact_info {
      margin-bottom: 20px;
    }
  }
}
</style>
