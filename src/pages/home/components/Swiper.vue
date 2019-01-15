<template>
	<div class="wrapper">
		<!--  -->
	<swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
		<swiper-slide v-for="item of swiperList" :key="item.id">
			<img :src="item.imgUrl" class="swiper-img"/>
		</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!-- 左右箭头及下方的滚动条 -->
   <!--  <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
</div>
</template>
<script>
	export default{
		name:'HeaderSwiper',
    props:{
      swiperList:Array
    },
		data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
           loop: true,
           autoplay:3000
          // 所有的参数同 swiper 官方 api 参数
          // ...
        },
      //   swiperList: [{
      //   "id": "0001",
      //   "imgUrl": "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
      // },{
      //   "id": "0002",
      //   "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
      // },{
      //   "id": "0003",
      //   "imgUrl": "http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg"
      // },{
      //   "id": "0004",
      //   "imgUrl": "http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg"
      // }]
  
      }
    },
    computed:{//解决当请求的数据还没请求道，传来的是空数组，然后再有完整数据，则会最后一张在最前面
      showSwiper (){
        return this.swiperList.length
      }
    }
    // computed: {
    //   swiper() {
    //     return this.$refs.mySwiper.swiper
    //   }
    // }
    // mounted() {
      
    //   // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    //   console.log('this is current swiper instance object', this.swiper)
    //   this.swiper.slideTo(3, 1000, false)
    // }
	}
	
</script>
<style lang="stylus" scoped>
     .wrapper >>> .swiper-pagination-bullet-active
      background: #fff
	 .wrapper
	 	width:100%
	 	overflow:hidden
	 	height:0
	 	padding-bottom:31.25%
	 	background:#eee
	 	.swiper-img
	 		width:100%
</style>
