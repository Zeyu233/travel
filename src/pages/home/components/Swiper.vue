<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img
          class="swiper-img"
          :src="item.imgUrl"
        />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
          pagination:'.swiper-pagination',
          loop:true
      },
      swiperList: [{
          id: '0001',
          imgUrl: "//imgs.qunarzz.com/vs_ceph_vcimg/569cae4ae98e9793f7341e85eed73c54.jpeg"
      },
      {
          id: '0002',
          imgUrl:"//imgs.qunarzz.com/vs_ceph_vcimg/f7813c9431796cc32ae7b7a78447342e.jpeg"
      }]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
      background : #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 30%
    background-color :#cccccc
    .swiper-img
      width: 100%;
</style>
