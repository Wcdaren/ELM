<template>
  <div>

    <div class="header">
    <v-header :seller="seller"></v-header>
    </div>
    
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods" id="tab-item-sub">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings" id="tab-item-sub">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller" id="tab-item-sub">商家</router-link>
      </div>

    </div>

    <div class="content">
    </div>

    <router-view/>

  </div>
</template>

<script>
import Header from "@/components/header/Header.vue";

const ERR_OK = 0;

export default {
  data() {
    return {
      seller: {}
    };
  },
  created() {
    // GET /api/seller

    this.$http.get("/api/seller").then(
      response => {
        //get body data
        response = response.body;

        if (response.errno === ERR_OK) {
          this.seller = response.data;
          console.log(this.seller.bulletin);
          
        }
      },
      response => {
        // error callback
      }
    );
  },
  components: {
    "v-header": Header
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app, .tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7.17 0.17 0 0.1);

  .tab-item {
    flex: 1;
    text-align: center;

    & > a {
      display: block;
      text-decoration: none;
      font-size: 14px;
      color: rgb(77, 85, 93);

      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
