<template>
	<div class="list" ref="wraper">
		<div>
			<div class="area">
			<div class="title border-topbottom" >当前城市</div>
			
			<div class="btnlist">
				<div class="btn-wrap">
					<div class="btn">{{city}}</div>
				</div>
			</div>
		</div>
		<div class="area">               
			<div class="title border-topbottom
			">热门城市</div>
			<div class="btnlist">
				<div class="btn-wrap" v-for="item of hotCities" :key="item.id" @click="clickCity">
					<div class="btn">{{item.name}}</div>
				</div>
				
			</div>
		</div>
		<div class="area">
			<div v-for="(value,key) of citys" :key="key" :ref="key">
					<div class="title border-topbottom" >{{key}}</div>
					<div class="itemlist">
						<div class="item border-bottom" v-for="item of value" :key="item.id" @click="clickCity">{{item.name}}</div>
			   </div>
			</div>
		</div>
		</div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default{
	name:'List',
	props:{
		citys:Object,
		hotCities:Array
	},
	data (){
		return {
			alphabet:'',
			nowCity:'北京'
		}
	// 	computed:{
	// 		nowCity (){
	// 			return 
	// 		}
	// 	}
	 },
	 methods:{
		clickcity (e){
			console.log(e)
             const city=e.target.innerText;
             this.nowCity=city;
             localStorage.setItem('city',city);
		}
	},
	computed:{
	    ...mapState(['city'])
	},
	methods:{
		clickCity (e){
			const city=e.target.innerText;
			//修改state的数据 
			//因为这次修改数据简单，没有异步操作，可以不用dispatch actions直接commit mutationn就行
			//this.$store.dispatch('changeCity',city);
			//this.$store.commit('changeCity',city);
			//!!!!!!!!!mapState(['city']) mapState({变量:'city'}) 是一个展开的对象后面写,不能写;
			//mapState通过扩展运算符,将this.$store.state下的变量映射到，配合computed使用，方法中要用到这个变量，则this.变量!直接映射到当前Vue的this对象上
			//简写
			this.changeCity(city);
			this.$router.push({name:'Home',params:{id:'123'}});
		},
		...mapMutations(['changeCity'])
	},
	mounted (){

		this.scroll=new BScroll(this.$refs.wraper,{click:true,tap:true});
		var that=this;
		this.bus.$on('getalp',function(alp){
            that.alphabet=alp;
		})
	},
	watch:{
		alphabet (){
			if(this.alphabet){
				const element=this.$refs[this.alphabet][0];
				this.scroll.scrollToElement(element)
			}
		}
	}
	
}
</script>
<style lang="stylus" scoped>
    .border-topbottom
    	&:before
    		border-color:#ccc
		&:after
			border-color:#ccc
	.border-bottom
		&:before
			border-color:#ccc
	.list
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		overflow:hidden
		.title
			line-height:.54rem
			background:#eee
			padding-left:.2rem
			color:#666
			font-size:.26rem
		.btnlist
			padding:.1rem
			overflow:hidden
			padding:.1rem .6rem .1rem .1rem
			.btn-wrap
				float:left
				width:33.33%
				.btn
					margin:.1rem
					padding:.1rem 0
					text-align:center
					border:.02rem solid #ccc
					border-radius:.06rem
		.itemlist
			width:100%
			padding-right:.6rem
			.item
				padding-left:.2rem
				color:#666
				line-height:.76rem
</style>