<template>
  <div>
    <section class="about_header">
      <div class="about_header_text">
        <h2>Mineral Refinery</h2>
      </div>
    </section>
    <div class="air_freight_container section pt-20">
      <div class="air_freight_text">
        <div>
          <div class="pr-20">
            <h3>How It Works?</h3>
            <p class="pb-10 pt-10">
              Aben Logistics is an International licensed GOLD Refinery
              registered in the world with registration ID
              <span>CA-134,457</span>. It operates as a limited liability
              company limited by shares. The Company refines gold for the local
              and international gold markets. Forecast Logistics has an initial
              installed refining capacity of 500kg of gold per month.
            </p>
            <p class="pb-10">
              The Company purchases gold primarily from the small scale mining
              sector. Mission Our mission is to provide reliable, efficient and
              time bound products and services in the precious metals-gold and
              silver, industry.
            </p>
            <p class="pb-10">
              Our vision is to be the foremost International supplier of refined
              gold and gold alloy products to local and international markets.
            </p>
            <p class="pb-10">
              As part of its strategic objectives, our Gold Refinery prides
              itself in providing superior customer service, superior product
              quality and a differentiated customer interaction guaranteed to
              enhance the image and businesses of our esteemed clients.
            </p>
            <p class="pb-10">
              We are equipped to provide assaying, refining, bullion trading,
              gold jewellery manufacturing and wholesaling. With an initial
              expectant production capacity of 100 metric tons as well as 20
              tons of jewellery on an annual basis, Aben Mining is positioned to
              be a first class contender in the mining industry.
            </p>
            <p class="pb-10">
              Aben Mining is well equipped to provide assaying, refining,
              bullion trading, gold jewellery manufacturing and wholesaling.
              With an initial expectant production capacity of 100 metric tons
              as well as 20 tons of jewellery on an annual basis, Forecast
              Logistics is positioned to be a first class contender in the
              mining industry.
            </p>
          </div>
          <div class="pt-20">
            <img
              src="../../assets/img/mineral_refinning.jpg"
              alt=""
              height="400px"
              width="100%"
            />
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
  name: 'TrackingPage',
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
  background-image: url('../../assets/img/truch_slider1.jpg');
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
        line-height: 1.2em;
        text-align: center;
      }
    }
  }
}
.air_freight_container {
  display: flex;
  width: 80%;
  margin: 0 auto;
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
    ul {
      list-style-type: decimal;
      padding-left: 30px;
    }
  }
  .right_icon {
    background: var(--color-primary);
    border-radius: 50%;
    color: #fff;
    padding: 2px;
    margin-right: 4px;
  }
}
</style>
