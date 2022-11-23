<template>
  <div>
    <div class="landing_page_head">
      <div class="landing_page_content_container">
        <div class="landing_page_content">
          <h1>Access Group Security</h1>
          <p>
            Explore modern ways to become more efficient, learn more about our
            shipping services from 300 ports around the world.
          </p>
          <div class="landing_page_tracking">
            <el-input
              v-model="tracking_id"
              placeholder="TRACKING ID"
            ></el-input>
            <div class="tracking_btn_container">
              <el-button
                type="danger"
                class="tracking_btn"
                :loading="loading"
                @click="showTracking"
                >TRACKING</el-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="home_container section">
      <div class="card_container">
        <el-card shadow="always" class="slider_card">
          <el-carousel
            indicator-position="outside"
            arrow="never"
            class="el_carousel_outer"
            :interval="50000"
            height="500px"
            trigger="click"
          >
            <el-carousel-item
              v-for="(content, index) in carouselContent"
              :key="index"
              class="carousel_item"
            >
              <div class="slider_content">
                <div class="slider_content_img pr-10">
                  <img
                    :src="getImg(content.img)"
                    alt=""
                    width="100%"
                    height="100%"
                  />
                  <!-- :style="{ backgroundImage: 'url(' + item.img + ')' }"
                class="slider_img w-50" -->
                </div>
                <div class="slider_content_text pl-10 pt-30">
                  <h2 class="pt-20 pl-20" style="color: #ff6a3e">
                    {{ content.text }}
                  </h2>
                  <p>{{ content.content }}</p>
                </div>
              </div>
            </el-carousel-item>
          </el-carousel>
        </el-card>
      </div>
      <div class="logistics_container">
        <section class="logistic_header_container">
          <!-- <el-divider > -->
          <h2 class="logistic_header">Logistics Solutions</h2>
          <!-- </el-divider> -->
        </section>
        <section class="d-flex justify_center">
          <p class="center w-50">
            From the farm to your refrigerator, or the factory to your wardrobe.
            Access Group Security is developing solutions that meet customer
            needs from one end of the supply chain to the other.
          </p>
        </section>
        <div class="home_page_cards mt-30">
          <div
            v-for="(item, index) in transport"
            :key="index"
            class="solution_cover"
          >
            <el-card :body-style="{ padding: '0px' }" shadow="hover">
              <img
                :src="getImg(item.img)"
                class="image"
                width="100%"
                height="200px"
              />
              <!-- src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" -->

              <div style="padding: 14px; height: 50%" class="solution_content">
                <div class="joiner">
                  <i :class="item.icon"></i>
                </div>
                <h3 class="mt-30 mb-10">{{ item.title }}</h3>
                <p>
                  {{ item.text }}
                </p>
                <div class="bottom clearfix">
                  <el-button
                    type="text"
                    class="button read_more"
                    @click="
                      $router.push('/services/air-freight-transportation')
                    "
                    >Read more</el-button
                  >
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
      <div class="home_office_container">
        <div
          v-for="(office, index) in homeOffice"
          :key="index"
          class="home_office"
        >
          <section class="home_office_icon">
            <i :class="office.icon"></i>
          </section>
          <section>
            <h3>{{ office.title }}</h3>
            <div>
              <p>{{ office.main_text }}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      loading: false as boolean,
      transport: [
        {
          title: 'Supply Chain Management',
          icon: 'el-icon-link',
          img: 'chain_manage1.jpg',
          text: 'Learn more about our shipping services from 300 ports around the world. Access Group Security can connect your business globally and we make shipping simple.',
        },
        {
          title: 'Air Freight Transportation ',
          icon: 'el-icon-truck',
          img: 'plan_slider.jpg',
          text: 'At Access Group Security, we can meet all your global transportation needs by our best Air Freight Services. Whether you’re shipping medical supplies to Haiti,',
        },
        {
          title: 'Storage Facility',
          img: 'storage.jpg',
          icon: 'el-icon-takeaway-box',
          text: 'Our safety Vaults was established with the purpose of renting safe deposit boxes, bullion safes and strong rooms for the safe guarding...',
        },
      ],
      carouselContent: [
        {
          img: 'airplane_cargo.jpg',
          text: 'PROVIDING FIRST CLASS FREIGHT SERVICES',
          content:
            'Access delivery is an innovative service is effective logistics solution for the delivery of small cargo. This service is useful for companies of various effective logistics scale.',
        },
        {
          img: 'container2.png',
          text: 'WE HELP YOU ACHIEVE YOUR BUSINESS GOALS',
          content:
            'You can rely on our tailored solutions to be certain your goods will arrive at their destination on time. Let us help you take the steps needed to ship your cargo the best way possible.',
        },
        {
          img: 'truck.png',
          text: ' MOTOR TRANSPORT OF ANY KIND & CARRYING CAPACITY',
          content:
            'Forwarding cargo by haulage solutions such as road and rail offer faster time-to-market than ocean shipping at a lower cost than air shipping.',
        },
      ],
      homeOffice: [
        {
          main_text: 'accessgroups2@gmail.com',
          title: 'Email Address',
          icon: 'el-icon-message',
        },
        {
          main_text:
            '800 W 1st St Suite 401, Los Angeles, CA 90012, United States',
          title: 'Main Office',
          icon: 'el-icon-location',
        },
        {
          main_text:
            'Level 1, Devonshire House One Mayfair Place London UK W1J 8AJ',
          title: 'UK Branch',
          icon: 'el-icon-place',
        },
      ],
      tracking_id: '' as string,
    }
  },
  methods: {
    getImg(img: string) {
      return require(`../assets/img/${img}`)
    },
    open2(message: string) {
      this.$message({
        message,
        type: 'error',
      })
    },
    async showTracking() {
      this.loading = true
      try {
        const deposits = await this.$axios.get('/deposits')
        const deposit = deposits.data.data.find(
          (depo: any) => depo.password === this.tracking_id
        )
        if (deposit) {
          // await this.$store.dispatch('getDepositId', this.tracking_id)
          // await this.$store.dispatch('getDepositor', deposit)
          localStorage.setItem('5%5od4po43', deposit._id)
          this.$router.push({
            name: 'deposit_vault',
            query: {
              id: deposit._id,
            },
          })
        } else {
          this.open2('Incorrect tracking ID')
        }
        this.loading = false
      } catch (error) {
        console.log(error)
        this.loading = false
      }
    },
  },
})
</script>

<style lang="scss" scoped>
$small_screen: 426px;

$medium_screen: 769px;
$laptop_screen: 1024px;
.landing_page_head {
  background-image: url('../assets/img/home_page_bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  .landing_page_content_container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    .landing_page_content {
      height: 50%;
      h1 {
        font-size: 6.8rem;
        color: #fff;
        padding-bottom: 50px;
        text-align: center;
        @media (max-width: $laptop_screen) {
          line-height: 1em;
          padding-bottom: 20px;
          font-size: 6rem;
        }
        @media (max-width: $medium_screen) {
          font-size: 5rem;
          padding-bottom: 30px;
        }
        @media (max-width: $small_screen) {
          font-size: 3.4rem;
          line-height: 1em;
          padding-bottom: 0;
        }
      }
      p {
        color: #fff;
        padding: 20px 0;
        font-size: 20px;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        line-height: 1.5em;
        @media (max-width: $small_screen) {
          font-size: 16px;
          width: 100%;
          line-height: 1.2em;
          padding-bottom: 10px;
        }
      }
      .landing_page_tracking {
        display: flex;
        width: 50%;
        margin: 20px auto;
        @media (max-width: $small_screen) {
          flex-direction: column;
          width: 80%;
        }
        .tracking_btn_container {
          @media (max-width: $small_screen) {
            display: flex;
            justify-content: center;
          }
          .tracking_btn {
            margin-left: 10px;
            @media (max-width: $small_screen) {
              margin-left: 0;
              margin-top: 10px;
              // width: fit-content;
              padding: 10px;
            }
          }
        }
      }
    }
    // @media (max-width: $laptop_screen) {
    //   height: 80%;
    // }
  }
}
.home_container {
  z-index: 4;
  position: relative;
  top: -150px;
  .card_container {
    width: 100%;
  }
  .logistics_container {
    padding-top: 70px;

    .logistic_header_container {
      width: 80%;
      margin: 0 auto;
      text-align: center;
      // padding-top: 10px;
      padding-bottom: 20px;
      @media (max-width: $small_screen) {
        width: 100%;
        margin: 0;
      }
      .logistic_header {
        font-size: 2.2rem;
      }
    }
  }
  .home_page_cards {
    // display: flex;
    // justify-content: space-evenly;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    @media (max-width: $medium_screen) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: $small_screen) {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .solution_cover {
      width: 100%;
      margin-bottom: 20px;
      @media (max-width: $small_screen) {
        width: 100%;
        margin-top: 20px;
      }
    }
  }
  .el_carousel_outer {
    .carousel_item {
      // height: 550px;
      padding: 102px 55px;
      @media (max-width: $laptop_screen) {
        // height: 400px;
        padding: 55px;
      }
      @media (max-width: $small_screen) {
        padding: 20px;
      }
      .slider_content {
        display: flex;
        // min-height: 460px;
        .slider_content_img {
          width: 60%;
          border-radius: 30px;
          @media (max-width: $small_screen) {
            width: 100%;
          }
        }
        .slider_content_text {
          width: 40%;
          h2 {
            font-size: 2.4rem;
            line-height: 1.2em;
            padding-top: 10px;
            @media (max-width: $medium_screen) {
              font-size: 1.3rem;
            }
            @media (max-width: $small_screen) {
              font-size: 1.2rem;
              padding-left: 0;
            }
          }
          p {
            padding: 30px 20px 0;
            @media (max-width: $medium_screen) {
              padding-top: 20px;
            }
            @media (max-width: $small_screen) {
              padding: 0;
              padding-top: 10px;
            }
          }
          @media (max-width: $small_screen) {
            padding-top: 10px;
            width: 100%;
          }
        }
        @media (max-width: $small_screen) {
          flex-direction: column;
        }
      }
    }
  }
  .solution_content {
    position: relative;
    .joiner {
      width: 80px;
      position: absolute;
      top: -30px;
      // left: -2px;
      margin-left: 10px;
      height: 70px;
      background: #fff;
      display: flex;
      justify-content: center;
      border-radius: 50%;
      padding: 20px;
      z-index: 3;
      color: var(--color-primary);
      i {
        font-size: 2.4rem;
        font-weight: 600;
      }
      @media (max-width: $small_screen) {
        // width: 50px;
        position: absolute;
        // height: 50px;
        // padding: 10px;
        // top: -50px;
      }
    }
  }
  .home_office_container {
    margin: 30px auto;
    width: 90%;
    display: grid;

    grid-template-columns: repeat(3, 1fr);
    @media (max-width: $small_screen) {
      display: flex;
      margin: 30px 0;
      width: 100%;
      flex-direction: column;
    }
    .home_office {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 230px;
      width: 100%;
      text-align: center;
      @media (max-width: $small_screen) {
        height: 200px;
      }
      p {
        width: 90%;
        margin: 10px auto;
        @media (max-width: $small_screen) {
          width: 100%;
        }
      }
      .home_office_icon {
        margin-bottom: 20px;
        background-color: #54595f;
        width: 80px;
        height: 80px;
        padding: 20px;
        display: flex;
        justify-content: center;
        border-radius: 50%;

        i {
          font-size: 3rem;
          color: #fff;
        }
      }
    }
  }
}
</style>
