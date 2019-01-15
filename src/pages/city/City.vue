<template>
	<div>
		<city-header></city-header>
	    <city-search :citys="citys"></city-search>
	    <city-list :citys="citys" :hotCities="hotCities"></city-list>
	    <city-alphabet :citys="citys"></city-alphabet>
	</div>
	
</template>
<script>
	import CityHeader from './components/Header'
	import CitySearch from './components/Search'
	import CityList from './components/List'
	import CityAlphabet from './components/Alphabet'
	import axios from 'axios'
	export default{
		name:'City',
	    components:{
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data (){
           return {
              citys:{},
              hotCities:[]
           }
		},
		mounted (){
			this.getCityInfo();
		},
		methods:{
			getCityInfo (){
              axios.get('/api/city.json')
              .then(this.getCityInfoSucc);
			},
			getCityInfoSucc (res){
               var data=res.data.data;
               this.citys=data.cities;
               this.hotCities=data.hotCities;
			}
		}
	}
</script>
<style lang="stylus" scoped>
	
</style>