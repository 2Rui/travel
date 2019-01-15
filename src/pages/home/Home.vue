<template>
	<div>
		<home-header></home-header>
		<home-swiper :swiperList="swiperList"></home-swiper>
		<home-icons :iconList="iconList"></home-icons>
		<home-recommend :recommendList="recommendList"></home-recommend>
		<home-week :weekendList="weekendList"></home-week>
	</div>
</template>
<script>
	import HomeHeader from './components/HomeHeader'
	import HomeSwiper from './components/Swiper'
	import HomeIcons from './components/Icons'
	import HomeRecommend from './components/Recommend'
	import HomeWeek from './components/Week'
	import axios from 'axios'
	import {mapState} from 'vuex'
	export default{
		name:'Home',
		data (){
			return {
				lastCity:'',
				iconList:[],
				recommendList:[],
				weekendList:[],
				swiperList:[],
			}
		},
		computed:{
			...mapState(['city'])
		},
		components:{
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeek
		},
		mounted (){
			this.getHomeInfo();
			this.lastCity=this.city;//记录上一次的城市
		},
		activated (){//用<keep-alive>会多这个生命周期函数
			console.log(this.lastCity+';;'+this.city)
             if(this.lastCity!==this.city){
             	this.lastCity=this.city;
             	this.getHomeInfo();
             }
		},
		// beforeUpdate (){
  //           alert('beforeUpdate')
		// },
		// updated (){
		// 	alert('updated')
		// },
		methods:{
			getHomeInfo (){
               axios.get('/api/index.json?city='+this.city)
               .then(this.getHomeInfoSucc);
			},
			getHomeInfoSucc (res){
                 var data=res.data.data;
                 this.iconList=data.iconList;
                 this.recommendList=data.recommendList;
                 this.weekendList=data.weekendList;
                 this.swiperList=data.swiperList;
			}
		}
	}
</script>
<style>
	
</style>