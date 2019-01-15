<template>
	<div>
		<!-- <div>Detail</div> -->
		<detail-banner :imgs="imgs"></detail-banner>
		<detail-header></detail-header>
		<div class="cont">
			<detail-list :list="list"></detail-list>
		</div>
	</div>
	
</template>
<script>
	import DetailBanner from './components/Banner'
	import DetailHeader from './components/Header'
	import DetailList from './components/List'
	import axios from 'axios'
	import router from '@/router/index'
	export default {
		name:'Detail',
		data (){
			return {
				imgs:[],
				list:[]
			}
		},
		components:{
			DetailBanner,
			DetailHeader,
			DetailList
		},
		mounted (){
             this.getDetailInfo();
		},
		methods:{
			//获取动态路由后面的参数
			//routes:[{name:'Detail',path:'/detail/:id',component:}]
             getDetailInfo (){
                 // axios.get('/api/detail.json?id='+this.$route.params.id)
                 //       .then(this.getDetailSuc);
                 axios.get('/api/detail.json',{
                 	 params:{
                 	 	id:this.$route.params.id
                 	 }
                 }).then(this.getDetailSuc);
             },
             getDetailSuc (res){
               if(res.data.ret&&res.data.data){
               	console.log(res)
                   const data=res.data.data;
                   this.imgs=data.gallaryImgs;
                   this.list=data.categoryList;
               }
             }
		}
	}
</script>
<style lang="stylus" scoped>
	.cont
		height:17rem
</style>