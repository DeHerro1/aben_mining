<template>
  <div>
    <section class="about_header">
      <div class="about_header_text">
        <h2>Storage Facility</h2>
      </div>
    </section>
    <div class="air_freight_container section pt-20">
      <div class="air_freight_text">
        <div>
          <div class="pr-20">
            <h3 class="pb-10">PHYSICAL GOLD STORAGE SOLUTIONS</h3>

            <p class="pb-10">
              Aben Mining Vaults is a purpose built facility CBD built to hold
              the weight of bullion as well as any other items that you need to
              keep safe. As a subsidiary of Pallion, West Point Security Company
              Vaults is not only built on solid bedrock, but also on 40+ years
              of trusted experience in the bullion industry. Our Vaults has 4
              different size safety deposit boxes available: Envelope (15kg),
              Small (60kg), Medium (120kg) and Large (800kg). Specifically
              designed for the storage of bullion, we have boxes that will hold
              all types of bullion from single ounce coins all the way through
              to 15kg silver bars and monster boxes.
            </p>
            <p class="pb-10">
              Aben Vaults opened for business in 2002 and is the A privately
              owned and operated safe deposit box company with multiple high
              security vaults. Our safety Vaults was established with the
              purpose of renting safe deposit boxes, bullion safes and strong
              rooms for the safe guarding of Gold, Diamond and Silver, Money,
              Jewelry, personal irreplaceable items and Personal Valuable
              Documents. Our staff are committed and pride themselves on the
              per-eminent level of service we provide to each and every customer
              ensuring that the exceptional service represents the first class
              facilities and provides peace of mind to you, our customer, that
              your valuables are secure.
            </p>
            <p class="pb-10">
              Both the physical and electronic components are unsurpassed by any
              other facility. Also your product is insured and under no
              circumstance has any customer at all complained of misplacement or
              mishandling by our team. Products are been kept until anytime that
              the owners do need them and would be as safe as they have expect
              to have.
            </p>
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
        <div class="mt-10">
          <p class="pb-10">
            Your furniture is wrapped, protected and/or crated whether it needs
            to be loaded for short or long-term storage. This maximises the
            protection of stored furniture and simplifies matters when a stored
            consignment needs to be shipped on short notice or if there is any
            change in your initial plan. A packing list is completed and each
            box is identified and marked.Then your items are loaded in specific
            storage boxes or containers, sealed in your presence, and stored in
            our ultra-safe storage warehouse. The boxes available at West Point
            Security Company Vaults are designed so that they will not warp or
            become damaged by the weight of bullion storage.
          </p>
          <p class="pb-10">
            We are confident that our facility provides peace of mind to our
            clients where other facilities may not. Being partnered with ABC
            Bullion means we are well known in the industry and Forecast
            Logistics Company Vaults clients can have their bullion not only
            stored here safely, but also transported from our bullion partners
            around the world. We can also organise buy backs, SMSF Auditing and
            Valuations on your metals. Bullion acquisition, storage, valuation
            and auditing can be facilitated in the vault and is a convenient
            solution for anyone looking to store, collect or re-sell their
            metals.
          </p>
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
  background-image: url('../../assets/img/storage1.jpg');
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
