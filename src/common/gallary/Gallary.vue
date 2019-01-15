<template>
	<div class="container" @click="handeGallary">
		<div class="wrapper">
			<!-- swiper插件 -->
			<swiper :options="swiperOption" ref="mySwiper">
		    
				    <swiper-slide v-for="item of imgs" :key="item">
				    	<img :src="item"/>
				    </swiper-slide>
				    <!-- <swiper-slide>
				    	<img src="http://img1.qunarzz.com/sight/p0/1709/76/7691528bc7d7ad3ca3.img.png_800x800_9ef05ee7.png"/>
				    </swiper-slide> -->
				    <!-- Optional controls -->
				    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
		</div>
	</div>
</template>
<script>
	export default{
		name:'Gallary',
		props:{
			imgs:{
				type:Array,
				default (){
					return ['http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_800x800_70debc93.jpg']
				}
			}
		},
		data (){
			return {
				swiperOption:{
					pagination : '.swiper-pagination',
					paginationType : 'fraction',
                    // loop:true,
                    observer:true,
					observeParents:true
				}
			}
		},
		methods:{
			handeGallary (){
			   this.$emit('changeGallary');
			}
		}
	}
</script>
<style lang="stylus" scoped>
// .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
// 	color:#fff!important
    .container >>>.swiper-container
    	overflow:inherit
	.container
		display:flex
		flex-direction:column
		justify-content:center
		position:fixed
		top:0
		left:0
		right:0
		bottom:0
		background:#000
		z-index:99
		.wrapper
			width:100%
			height:0
			padding-bottom:100%
			background:#fff
			img
				width:100%
			.swiper-pagination
				color:#fff
				bottom:-1rem
</style>