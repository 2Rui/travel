<template>
	<div class="home-header">
		<div class="home-left">
			<i class="iconfont">&#xe624;</i>
		</div>
		<div class="home-center">
			<i class="iconfont">&#xe632;</i>
		请输入最热的景区</div>
		<router-link to="/city" tag="div" class="home-right">
		<!-- <div class="home-right"> -->
			<!-- 有mapState配合计算属性简写 否则要写this.$store.state.city -->
			{{currentCity}}
			<i class="iconfont arrow-icon">&#xe64a;</i>
		<!-- </div> -->
	</router-link>
	</div>
</template>
<script>
	import {mapState,mapGetters} from 'vuex'
	export default{
		name:'HomeHeader',
		mounted (){
			console.log(this.$store);
		},
		computed:{
			//...mapState(['city']);
			//或者 
			...mapState({
				currentCity:'city'
			}),
			//...mapGetters(['doubleCity'])
		}
	}
</script>

<style lang="stylus" scoped>
    @import '~@styles/varibles.styl'
	.home-header
	  height:.86rem
	  background:$bgColor
	  display:flex
	  flex-direction:row
	  color:#fff
	  line-height:.86rem
	  .home-left
	  	width:.64rem
	  	text-align:center
	  .home-center
	  	flex:1
	  	height:.62rem
	  	border-radius:.1rem
	  	padding-left:.2rem
	  	margin-top:.12rem
	  	margin-left:.2rem
	  	background:#fff
	  	color:#ccc
	  	line-height:.62rem
	  .home-right
	  	min-width:1.2rem
	  	text-align:center
	  	.arrow-icon
	  		font-size:.24rem
    
</style>