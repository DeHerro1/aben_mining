<template>
  <div>
    <section class="about_header">
      <div class="about_header_text">
        <h2>Ocean Freight</h2>
      </div>
    </section>
    <div class="air_freight_container section pt-20">
      <div class="air_freight_text">
        <div>
          <div class="pr-20">
            <h3 class="pb-10">
              IS PRICE YOUR MAIN THOUGHT? THEN CHOOSE STALWART SECURITY AND
              LOGISTICS SEA FREIGHT
            </h3>

            <p class="pb-10 pt-10">
              Our sea freight services are your best choice when price is one of
              your main criteria. Sea freight is the slowest method of
              transport, but if time is not a factor for you then a ship wins
              every time. And of course, some goods simply cannot go by air due
              to their size or weight or the fact that they are not permitted on
              board an aircraft.
            </p>
            <p class="pb-10">
              Our expert freight forwarders will help you navigate regulations
              and ports as well as local pickup and last mile delivery. And if
              you need logistics support or warehouse management for your supply
              chain, we can handle that for you too. By sea, air, road, rail or
              barge – whether your needs are straightforward or complex,
              out-of-gauge or containers or your goods are hazardous, let us
              offer you:
            </p>
            <div class="what_to_offer">
              <section>
                <p>
                  <i class="el-icon-right right_icon"></i>650+ owned/operated
                  trucks
                </p>
                <p>
                  <i class="el-icon-right right_icon"></i>20+ warehouses in
                  strategic locations
                </p>
                <p>
                  <i class="el-icon-right right_icon"></i>20+ container depots
                </p>
                <p>
                  <i class="el-icon-right right_icon"></i>55+ offices worldwide
                </p>
                <p>
                  <i class="el-icon-right right_icon"></i>Full Service, Licensed
                  NVOCC
                </p>
                <p>
                  <i class="el-icon-right right_icon"></i>Refrigerated cargo
                </p>
              </section>
              <section>
                <p>
                  <i class="el-icon-right right_icon"></i>Licensed and Bonded,
                  Asset-Based Freight
                </p>
                <p><i class="el-icon-right right_icon"></i>Forwarder</p>
                <p>
                  <i class="el-icon-right right_icon"></i>Customs House
                  Brokerage
                </p>
                <p><i class="el-icon-right right_icon"></i>FCL and LCL</p>
                <p><i class="el-icon-right right_icon"></i>FCL and LCL</p>
              </section>
            </div>
          </div>
          <div class="pt-20">
            <img
              src="../../assets/img/sea_freight.jpg"
              alt=""
              height="500px"
              width="100%"
            />
          </div>
        </div>
        <div class="ocean_freight_second">
          <section>
            <h3>Retail logistics solutions</h3>
            <p class="pb-10 pt-10">
              The retail world is changing as you read this. A conscious
              consumer, omnichannel sales and digitisation are shaping the
              industry and driving complexity into retail supply chains. As a
              retailer, this makes it vital for you to relook at the way you do
              business. Every single day. With Access's retail solutions, that’s
              exactly what we’ll enable you to do
            </p>
            <p class="pb-10 pt-10">
              Our flexible suite of innovative and integrated supply chain
              solutions is designed to help your business adapt quickly to
              rapidly changing retail trends. So that it’s business as usual for
              you, no matter what the next challenge will be.
            </p>
            <p class="pb-10 pt-10">
              React quickly to demand fluctuations by slowing down or speeding
              up the flow of goods, strike a balance between long sourcing
              cycles and short sales cycles, and synchronize your upstream &
              downstream operations. Our retail logistics solutions are here to
              make your supply chain more resilient and help you manage changes
              in the retail landscape including the continuing trend towards
              omnichannel solutions.
            </p>
          </section>
          <section>
            <h3>Automotive logistics solutions</h3>
            <p class="pb-10 pt-10">
              The automotive industry is undergoing a radical transformation.
              The advent of mobility advancements such as electric and connected
              cars has put the industry on a high-speed expressway, propelling
              it to a future that is shrouded in complexity.
            </p>
            <p class="pb-10 pt-10">
              With increasing customer demands and expectations in terms of
              configurations and user experience, more parts are going into
              vehicles than before. That’s why, as a component manufacturer, you
              face an inherent need to produce more components than the OEMs
              themselves.
            </p>
            <p class="pb-10 pt-10">
              While manufacturing auto components is one thing, delivering them
              to your world markets on time is another. Increasing political
              unrest, the recent coronavirus outbreak, increased protectionism
              and tariffs are all potential road bumps on this journey.
            </p>
          </section>
          <section>
            <h3>Industry overview</h3>
            <p class="pb-10 pt-10">
              The automotive industry is undergoing a radical transformation.
              The advent of mobility advancements such as electric and connected
              cars has put the industry on a high-speed expressway, propelling
              it to a future that is shrouded in complexity.
            </p>
            <p class="pb-10 pt-10">
              With increasing customer demands and expectations in terms of
              configurations and user experience, more parts are going into
              vehicles than before. That’s why, as a component manufacturer, you
              face an inherent need to produce more components than the OEMs
              themselves.
            </p>
            <p class="pb-10 pt-10">
              While manufacturing auto components is one thing, delivering them
              to your world markets on time is another. Increasing political
              unrest, the recent coronavirus outbreak, increased protectionism
              and tariffs are all potential road bumps on this journey.
            </p>
          </section>
          <section></section>
          <section></section>
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
  name: 'OceanFreightPage',
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
  background-image: url('../../assets/img/shipping1.jpg');
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
      line-height: 1.2em;
    }
    .what_to_offer {
      display: flex;
      justify-content: space-between;
      font-size: 15px;
      p {
        padding-top: 5px;
      }
      @media (max-width: $small_screen) {
        flex-direction: column;
      }
    }
    .ocean_freight_second {
      margin-top: 40px;
    }
  }
}
</style>
