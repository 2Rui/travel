<template>
  <div id="app">

  	<!-- 除了detail这个页面不被缓存，每次进入这个页面都会执行mounted钩子函数 -->
  	<keep-alive exclude="Detail">
  		 <router-view/>
  	</keep-alive>
   
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
