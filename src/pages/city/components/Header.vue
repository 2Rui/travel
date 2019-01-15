<template>
	<div class="header">
		<router-link tag="i" class="iconfont back" to="/">
			&#xe624;
		</router-link>
		<!-- <i class="iconfont back"></i> -->
		城市选择
	</div>
</template>
<script>
	export default{
		name:'Header'
	}
</script>
<style lang="stylus" scoped>
   @import '~@styles/varibles.styl'
	.header
		height:.86rem
		line-height:.86rem
		overflow:hidden
		text-align:center
		color:#fff
		font-size:.32rem
		background:$bgColor
		z-index:3
		.back
			display:inline-block
			float:left
			font-size:.4rem
			width:.64rem
</style>