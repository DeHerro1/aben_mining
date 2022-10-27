<template>
  <div>
    <section class="about_header">
      <div class="about_header_text">
        <h2>Counter Surveillance</h2>
      </div>
    </section>
    <div class="air_freight_container section pt-20">
      <div class="air_freight_text">
        <div>
          <div class="pr-20">
            <h3 class="pb-10">OUR THREE STEPS SWEEP PROCESS:</h3>
            <ul>
              <li>PHYSICAL SEARCH</li>
              <li>
                TRAINING OF SECURITY PERSONNEL TO PREVENT FUTURE ILLEGAL
                INTRUSIONS
              </li>
              <li>A CHECKLIST DESIGNED TO ENSURE FUTURE PRIVACY</li>
            </ul>
            <p class="pb-10 pt-10">
              Highly trained, well-equipped private security personnel are
              assigned to undertake close quarter protection upon a request from
              client. Our bodyguards are drawn from the appropriate backgrounds
              before being accepted and regardless of past experience, they all
              undergo complete a difficult, lengthy in house training period.
              They are therefore capable of performing at the highest commercial
              and personal levels. Absolute confidentiality is maintained with
              all clients!
            </p>
            <p class="pb-10">
              Our Counter Surveillance can easily replace an ordinary desktop
              stapler containing a transmitter, or attach a voice active bug
              under the desk, or place a drop in a microphone of a telephone in
              less than 20 seconds. Where competition exists or there is
              information that needs to be kept secret, there are likely to be
              some form of spying.
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
      </div>
      <div class="ml-20 w-100">
        <Enquiry />
      </div>
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
  .right_icon {
    background: var(--color-primary);
    border-radius: 50%;
    color: #fff;
    padding: 2px;
    margin-right: 4px;
  }
}
</style>
