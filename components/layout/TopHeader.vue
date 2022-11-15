<template>
  <!-- style="background: #54595f" -->
  <div class="top_header">
    <div class="section top_header_sub">
      <div class="top_header_text">
        <p class="contact_top_header">
          <i class="el-icon-phone mr-5"></i>+44 7537 184028
        </p>
        <p class="contact_top_header">
          <i class="el-icon-phone mr-5"></i>+1 (252) 419-6679
        </p>
        <p><i class="el-icon-message mr-5"></i>accessgroups2@gmail.com</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/display.css'

export default Vue.extend({
  name: 'TopHeader',
  data() {
    return {}
  },
})
</script>
<style lang="scss" scoped>
$small_screen: 426px;
$laptop_screen: 1024px;
.top_header {
  // background: #54595f;
  background: rgb(21, 21, 133);
  position: sticky;
  color: #fff;
  top: 0;
  z-index: 100;
  padding-top: 20px;
  padding-bottom: 20px;
  .top_header_sub {
    .top_header_text {
      display: flex;
      flex-wrap: wrap;
      @media (max-width: $small_screen) {
      }
      p {
        color: #fff;
        margin-right: 10px;
        padding-right: 10px;
      }
      .contact_top_header {
        border-right: 1px solid #fff;
        @media (max-width: $small_screen) {
          border: none;
          margin-bottom: 3px;
        }
      }
    }
  }
}
.services_content {
  color: red !important;
}
</style>
