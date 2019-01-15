<template>
	<div>
		<div class="banner" @click="clickBanner">
			<img src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg" class="banner-img"/>
			<div class="banner-info">
				<div class="banner-text">大连圣亚海洋世界(AAAA景区)</div>
				<div class="banner-num">
					<i class="iconfont banner-icon">&#xe606;</i>
					39
				</div>
			</div>
		</div>
		<gallary :imgs="imgs" v-show="isGallary" @changeGallary="hideGallary"></gallary>
</div>
</template>
<script>
	import Gallary from '@common/gallary/Gallary'
	export default {
		name:'Banner',
		props:{
			imgs:Array
		},
		components:{
			Gallary
		},
		data (){
			return {
				isGallary:false
			}
		},
		methods:{
			clickBanner (){
				this.isGallary=true;
			},
			hideGallary (){
				this.isGallary=false;
			}
		}
	}
</script>
<style lang="stylus" scoped>
	.banner
		overflow:hidden
		height:0
		padding-bottom:55%
		position:relative
		.banner-img
			width:100%
		.banner-info
			display:flex
			position:absolute
			left:0
			right:0
			bottom:0
			height:.6rem
			line-height:.6rem
			background:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.7))
			color:#fff
			.banner-text
				padding:0 .2rem
				flex:1
			.banner-num
				height:.32rem
				line-height:.32rem
				border-radius:.2rem
				margin-top:.12rem
				padding:0 .4rem
				background:rgba(0,0,0,0.6)
				font-size:.24rem
				.banner-icon
					font-size:.24rem
</style>