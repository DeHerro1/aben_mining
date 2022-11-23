<template>
  <div>
    <section class="about_header">
      <div class="about_header_text">
        <h2>Chain Management</h2>
      </div>
    </section>
    <div class="air_freight_container section pt-20">
      <div class="air_freight_text">
        <div>
          <div class="pr-20">
            <p class="pb-10 pt-10">
              Supply chains can be complicated. That’s why we have designed our
              Supply Chain Management (SCM) services to help cater to your
              logistics complexities. Our local expertise along with our global
              infrastructure provides you with a strong supply chain backbone
              that will help you grow your business and exceed customer
              expectations.
            </p>
            <p class="pb-10">
              The SCM services broad range of value-added capabilities can help
              achieve your business objectives with reliability, speed, agility,
              resilience, cost efficiencies and sustainability. Our expert
              supply chain teams can handle your logistics process, allowing you
              more time to concentrate on your core business.
            </p>
            <p class="pb-10">
              We have innovated our supply chain management solutions to enable
              our customers to stay ahead every time. Access Group Security SCM
              solutions combine shipment data and stakeholder management systems
              to streamline your logistics end-to-end. The solutions are
              digitally enabled by modern technology platforms making supply
              chains simpler and better connected all the way.
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
        <section class="mt-30">
          <h3>MyAccessSupplychain</h3>
          <p class="pb-10">
            In an increasingly complex world, keeping track of all your
            shipments around the world is not simple. The right tools can make
            it easier.<br />
            MyAccessSupplychain was developed to save you time, enabling you to
            manage your entire supply chain whenever necessary. The interactive
            SCM dashboard can help you control, manage and monitor your supply
            chains in just a few clicks.
          </p>
        </section>
        <div class="ocean_freight_second">
          <section>
            <h3>The result</h3>
            <div>
              <p class="pb-10">
                As a direct result of the Access Group Security SCM services,
                the customer’s supplier performance improved significantly after
                just one year of having the program in place. The new process
                also showed multiple benefits to the customer, such as
              </p>
              <ul>
                <li>
                  Exceeding the 90% target set for on-time documentation,
                  booking and delivery
                </li>
                <li>Reducing variability across the supply chain</li>
                <li>
                  Reduced expedited freight costs paid by the customer or
                  suppliers
                </li>
                <li>
                  Improving origin dwell time and promoting on-time departure
                </li>
                <li>Improving product availability performance</li>
                <li>Driving positive vendor behaviour in the long run</li>
              </ul>
            </div>
          </section>
          <section class="mt-20">
            <h3>The challenge</h3>
            <div>
              <p class="pb-10">
                In an increasingly competitive lifestyle and fashion market, the
                customer continued to face concerns in its sourcing process.
                With multiple moving parts involved in sourcing from several
                international vendors, the lifestyle company was facing several
                challenges, including
              </p>
              <ul>
                <li>
                  The lack of an effective management process to keep track of
                  their suppliers’ performances
                </li>
                <li>
                  Distance, language barriers and culture differences causing
                  issues for the customer’s supply chain
                </li>
                <li>
                  Multiple touchpoints in their sourcing process that gave rise
                  to sub-optimal consolidation, creating additional costs.
                </li>
              </ul>
            </div>
          </section>
          <section class="mt-20">
            <h3>The customer</h3>
            <p class="pb-10">
              Our customer is one of the world’s largest apparel companies. The
              company designs and markets jeans, casual wear and related
              accessories for men, women and children. They sell their products
              in over 110 countries with a global footprint of more than 3,000
              retail stores and shop-in-shops.
            </p>
          </section>
          <section class="mt-20">
            <h3>Flexibility to shape your lifestyle supply chain</h3>
            <p class="pb-10">
              Access's integrated approach to ocean and logistics services
              provides us with a unique advantage – the ability to tailor
              logistics solutions according to your business requirements. It
              includes our expertise to handle your entire supply chain
              end-to-end, along with every disruption if needed.
            </p>
          </section>
          <section class="mt-20">
            <h3>More visibility to clear supplier compliance hurdles</h3>
            <p class="pb-10">
              As a company grows, sourcing becomes a make or break area in its
              path to success. Monitoring, evaluating and assessing suppliers
              from multiple sources can weigh on their overall goals. Here’s how
              we helped a global lifestyle brand standardise their supply chain
              processes to monitor and help keep suppliers’ activities under
              control and aid in global expansion ambitions.
            </p>
          </section>
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
  name: 'ChainManagementPage',
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
  background-image: url('../../assets/img/chain_manage2.jpg');
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
    .ocean_freight_second {
      margin-top: 20px;
    }
    ul {
      list-style-type: decimal;
      padding-left: 30px;
    }
  }
}
</style>
