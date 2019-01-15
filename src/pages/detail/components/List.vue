<template>
	<div>
	<div v-for="(item,index) in list">
		<div class="title border-bottom">{{item.title}}</div>
		<!-- 递归组件 -->
		<div v-if="item.children" class="children">
			<detail-list :list="item.children"></detail-list>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		name:'DetailList',
		props:{
			list:Array
		}
	}
</script>
<style lang="stylus" scoped>
	.title
		padding:.2rem
	.children
		padding-left:.3rem
</style>