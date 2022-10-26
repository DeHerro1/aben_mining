<template>
  <div>
    <section
      :style="{
        backgroundImage: 'url(' + getImg(about_img) + ')',
      }"
      class="about_header"
    >
      <div class="about_header_text">
        <h2>About Us</h2>
      </div>
    </section>
    <div class="section pt-30">
      <div class="about_first">
        <div class="about_first_img">
          <img :src="getImg(about1)" alt="" />
        </div>
        <div class="about_first_text">
          <h3>Our Core Values</h3>
          <p>
            Our company builds on an impressive heritage of pioneering success
            and growth. Our long legacy and our Values guide our business every
            day and also ensure that we can do business tomorrow.
          </p>
        </div>
      </div>
      <div class="pt-20">
        <h3>Constant care</h3>
        <p>
          Take care of today, actively prepare for tomorrow. What it means as a
          core value: Forward thinking, planning and execution. Being informed,
          innovative and seeking out new ideas. Looking for changes in the
          environment.
        </p>
      </div>
      <div class="about_second">
        <div class="about_first_img">
          <img :src="getImg(about2)" alt="" />
        </div>
        <div class="about_first_text">
          <h3>Sustainability</h3>
          <p>
            Aben Mining is committed to ensuring that our business practices are
            safe, responsible and transparent, in accordance with our Core
            Values and the principles of the UN Global Compact on human rights,
            labour rights, environment and anti-corruption, and contributing to
            the UN Sustainable Development Goals.
          </p>
        </div>
      </div>
      <div class="about_mission_container">
        <div class="about_mission_text">
          <p>
            <span>OUR MISSION</span> – We believe to continuously provide
            leadership in the areas of Business process, Strategy, General
            Service, Mining Service, Travel and Tourism Services, Security and
            Safe Keeping Services, Shipping Cargo Handling Services, Legal
            Services and Mining Explorations, Country Surveillance, Country
            Surveillance, Closed Circuit TV (CCTV) Surveillance, delivering
            measurable and quantifiable results to customers,corporate
            organizations and government officials.
          </p>
        </div>
        <div class="about_mission_list">
          <ul>
            <li>Deliver Environmentally Responsible Client Services</li>
            <li>Provide Employees with an Attractive Working Environment</li>
            <li>Be an Active Community Partner</li>
            <li>Maintain High Ethical Standards</li>
            <li>Drive Continuous Improvement</li>
            <!-- </ul>
          <ul> -->
            <li>Freight Security</li>
            <li>Air & Ocean Cargo Insurance</li>
            <li>Our highly efficient customs brokerage</li>
            <li>Clearance and compliance service</li>
            <li>We ensure complete security</li>
          </ul>
        </div>
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
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &::after {
    content: '';
    position: relative; /* Sit on top of the page content */
    width: 100%; /* Full width (cover the whole page) */
    height: 300px; /* Full height (cover the whole page) */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
  }
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
      font-size: 2.2rem;
      font-weight: 800;
    }
  }
}
.about_first {
  padding-top: 20px;
  display: flex;
  @media (max-width: $small_screen) {
    flex-direction: column;
  }
  .about_first_img {
    width: 50%;
    padding-right: 20px;
    @media (max-width: $small_screen) {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-right: 0;
    }
    img {
      width: 90%;
      height: 300px;
      @media (max-width: $small_screen) {
        width: 100%;
      }
    }
  }
  .about_first_text {
    width: 50%;
    padding-left: 10px;
    padding-top: 20px;
    @media (max-width: $small_screen) {
      width: 100%;
    }
    h3 {
      color: var(--color-primary);
      font-weight: 700;
      font-size: 1.8rem;
      padding-bottom: 20px;
    }
  }
}
.about_second {
  padding-top: 20px;
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: $small_screen) {
    flex-direction: column;
  }
  .about_first_img {
    width: 50%;
    display: flex;
    justify-content: flex-end;
    @media (max-width: $small_screen) {
      width: 100%;
      justify-content: center;
    }
    img {
      width: 90%;
      height: 300px;
      @media (max-width: $small_screen) {
        width: 100%;
      }
    }
  }
  .about_first_text {
    width: 50%;
    padding-right: 20px;
    padding-top: 30px;
    @media (max-width: $small_screen) {
      width: 100%;
    }
    h3 {
      color: var(--color-primary);
      font-weight: 700;
      font-size: 1.8rem;
      padding-bottom: 20px;
    }
  }
}
.about_mission_container {
  margin: 20px auto;
  padding-top: 20px;
  width: 80%;
  .about_mission_text {
    span {
      color: var(--color-primary);
      font-weight: 700;
    }
  }
  .about_mission_list {
    width: 80%;
    margin: 10px auto;
    @media (max-width: $medium_screen) {
      width: 90%;
    }

    ul {
      width: 80%;
      list-style-type: decimal;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 10px;
      li {
        margin-bottom: 7px;
      }
      @media (max-width: $medium_screen) {
        width: 100%;
      }
      @media (max-width: $small_screen) {
        display: flex;
        flex-direction: column;
      }
    }
  }
  @media (max-width: $medium_screen) {
    width: 100%;
    margin: 20px 0;
    padding-right: 10px;
    padding-left: 10px;
  }
}
</style>
