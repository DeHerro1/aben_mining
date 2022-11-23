<template>
  <div>
    <section class="about_header">
      <div class="about_header_text">
        <h2>Air Freight</h2>
      </div>
    </section>
    <div class="air_freight_container section pt-20">
      <div class="air_freight_text">
        <div>
          <div class="pr-20">
            <h3 class="pb-10">How It Works?</h3>
            <p class="pb-10">
              At Access Group Security, we can meet all your global
              transportation needs by our best Air Freight Services. Whether
              you’re shipping medical supplies to Haiti, or Precious metals to
              Europe or Handicrafts supplies to Australia, or general goods to
              any part of the globe etc. you can count on us to get your freight
              where it’s going or coming from on time.
            </p>
            <p class="pb-10">
              When your time-definite or hazardous goods demand extra care, we
              have the talented people backed by powerful information visibility
              tools to optimize carrier schedules and see your most important
              shipments move door-to-door almost anywhere in the world on time
              and intact. Forecast Logistics offers you reliable air freight
              services for all your high priority consignments – completely
              according to your personal needs
            </p>
            <p class="pb-10">
              We provide you with comprehensive service for airfreight
              solutions: standardized products, charter of less-than-container
              and full-container loads, door-to-door deliveries. Heavy loads,
              transportation of hazardous goods, as well as special solutions
              for automotive, fashion, healthcare and food are all part of our
              product portfolio.
            </p>
          </div>
          <div class="pt-20">
            <img
              src="../../assets/img/air_freight.jpg"
              alt=""
              height="400px"
              width="100%"
            />
          </div>
        </div>
        <div class="pt-20">
          <h3 class="pb-10">Access Group Air Freight Direct</h3>
          <p>
            Combine speed, flexibility, and value with our global
            airport-to-airport service available worldwide
          </p>
          <div class="list_styling">
            <p>
              <i class="el-icon-right right_icon"></i>Send and receive freight
              worldwide
            </p>
            <p>
              <i class="el-icon-right right_icon"></i>Ideal for shipments over
              150 pounds
            </p>
            <p>
              <i class="el-icon-right right_icon"></i>Convenient and easy
              shipment processing for palletized and non-palletized freight
            </p>
            <p>
              <i class="el-icon-right right_icon"></i>Optional services include
              pickup, delivery, and customs clearance
            </p>
          </div>
        </div>
        <div class="pt-20">
          <h3 class="pb-10">Access® Air Freight Premium Direct</h3>
          <p>
            Day-specific scheduling, door-to-door service, with delivery within
            one to three days available in more than 50 countries and
            territories
          </p>
          <div class="list_styling">
            <p>
              <i class="el-icon-right right_icon"></i>Door-to-door service with
              routine customs clearance included
            </p>
            <p>
              <i class="el-icon-right right_icon"></i>Ideal for shipments over
              150 pounds
            </p>
            <p>
              <i class="el-icon-right right_icon"></i>Convenient and easy
              shipment processing for palletized and non-palletized freight
            </p>
          </div>
        </div>
      </div>

      <Enquiry />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Enquiry from '../../components/Enquiry.vue'

export default Vue.extend({
  name: 'AirFreightPage',
  components: {
    Enquiry,
  },
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
  methods: {},
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;
$medium_screen: 769px;
$laptop_screen: 1024px;
.about_header {
  height: 350px;
  margin-bottom: 30px;
  background-image: url('../../assets/img/plan_slider1.jpg');
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
.air_freight_container {
  display: flex;
  width: 80%;
  margin: 0 auto;
  margin-bottom: 20px;
  @media (max-width: $laptop_screen) {
    width: 100%;
  }
  @media (max-width: $medium_screen) {
    flex-direction: column;
  }

  .air_freight_text {
    h3 {
      color: var(--color-primary);
    }
  }
  .support_container {
    height: 250px;
    padding: 40px 20px;
    background: var(--color-primary);
    margin-left: 20px;
    width: 80%;
    @media (max-width: $medium_screen) {
      width: 50%;
      margin: 20px auto;
    }
    @media (max-width: $small_screen) {
      width: 100%;
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
.list_styling {
  margin-top: 5px;
  p {
    margin-bottom: 5px;
  }
}
</style>
