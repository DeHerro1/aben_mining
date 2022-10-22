<template>
  <div class="home_container">
    <div class="card_container">
      <el-card shadow="always" class="slider_card">
        <el-carousel
          indicator-position="outside"
          height="500px"
          arrow="never"
          :interval="10000"
        >
          <el-carousel-item
            v-for="item in cardContent"
            :key="item.text"
            class="carousel_item"
          >
            <div class="slider_content">
              <div class="w-50 pr-10">
                <img :src="item.img" alt="" width="100%" height="100%" />
                <!-- :style="{ backgroundImage: 'url(' + item.img + ')' }"
                class="slider_img w-50" -->
              </div>
              <div class="w-50 pl-10 pt-30">
                <h2 class="pt-20 pl-20" style="color: #ff6a3e">
                  {{ item.text }}
                </h2>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </el-card>
    </div>
    <div>
      <section class="logistic_header_container">
        <!-- <el-divider > -->
        <h2 class="logistic_header">Logistics Solutions</h2>
        <!-- </el-divider> -->
      </section>
      <section class="d-flex justify_center">
        <p class="center w-50">
          From the farm to your refrigerator, or the factory to your wardrobe.
          Aben is developing solutions that meet customer needs from one end of
          the supply chain to the other.
        </p>
      </section>
      <el-row class="home_page_cards mt-30">
        <el-col v-for="(o, index) in 3" :key="o" :span="7">
          <el-card :body-style="{ padding: '0px' }" style="height: 400px">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
              width="100%"
              height="200px"
            />
            <div style="padding: 14px; height: 50%">
              <h3>Supply Chain Management</h3>
              <p>
                Learn more about our shipping services from 300 ports around the
                world. Aben Mining can connect your business globally and we
                make shipping simple.
              </p>
              <div class="bottom clearfix">
                <el-button type="text" class="button">Operating</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      cardContent: [
        {
          img: 'https://www.abenmining.com/wp-content/uploads/2021/03/1.jpg',
          text: 'PROVIDING FIRST CLASS FREIGHT SERVICES',
        },
        {
          img: 'https://www.abenmining.com/wp-content/uploads/2021/03/4.jpg',
          text: 'WE HELP YOU ACHIEVE YOUR BUSINESS GOALS',
        },
        {
          img: 'https://www.abenmining.com/wp-content/uploads/2021/03/2.jpg',
          text: 'Motor Transport Of Any Kind & carrying capacity',
        },
      ],
    }
  },
  methods: {
    getImg(img: string) {
      return require(`${img}`)
    },
  },
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;
$laptop_screen: 1024px;
.home_container {
  // min-height: 900px;
  .card_container {
    padding-top: 20px;
    margin: 30px auto;
    width: 90%;
    .slider_img {
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 100%;
      height: 500px;
    }
  }
  .logistic_header_container {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    padding-top: 20px;
    padding-bottom: 20px;
    .logistic_header {
      font-size: 2.2rem;
    }
  }
  .home_page_cards {
    display: flex;
    justify-content: space-evenly;
  }
  .carousel_item {
    height: 500px;
    padding: 40px 30px;
    .slider_content {
      display: flex;
      height: 100%;
      img {
        border-radius: 30px;
      }
    }
  }
}
</style>
