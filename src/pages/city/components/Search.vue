<template>
	<div>
		<div class="search">
			<input type="text" placeholder="输入城市名或拼音" class="searchInput" v-model="inputVal"/>
		</div>
		<div class="search-cont" ref="searchBox" v-show="inputVal">
			<ul>
				<li v-for="item in list" :key="item.id" class="search-item border-bottom" @click="clickCity">{{item.name}}</li>
				<li class="search-item border-bottom" v-show="haslist">没有检索到数据</li>
			</ul>
		</div>
   </div>
</template>
<script>
	import BScroll from 'better-scroll'
	export default{
		name:'Search',
		props:{
			citys:{}
		},
		data (){
			return {
				inputVal:'',
				timer:null,
				list:[]
			}
		},
		methods:{
           clickCity (e){
			const city=e.target.innerText;
			//修改state的数据 
			this.$store.commit('changeCity',city);
			this.$router.push('/');
		    }
		},
		computed:{
           haslist (){
           	return !this.list.length
           	//数字转boolean 0为false  非0为true
           	//数字==boolean比较时  会把boolean转为数字 1==true/true   2==true/false 但是！2/true
           }
		},
		mounted (){
			this.scroll=new BScroll(this.$refs.searchBox,{click:true,tap:true});
			//传递给右侧 abc的组件
				this.bus.$emit('hideAlp',false);
		},
		watch:{
			inputVal (newval,oldval){
				if(newval==""){
					this.list=[];
					return //不执行后续的代码
				}
				
				//节流函数
				if(this.timer){
					clearTimeout(this.timer);
				}
				
				this.timer=setTimeout(()=>{
					this.list=[];//每次查询之前，要清空this.list 防止两次搜索的内容合并
                     //循环对象
                     for(let i in this.citys){
                     	 //循环数组
                     	 this.citys[i].forEach((item,index)=>{
                     	 	 if(item.spell.indexOf(this.inputVal)>-1||item.name.indexOf(this.inputVal)>-1){
                                     this.list.push(item)
                     	 	 }
                     	 })
                     }
                    // console.log(this.list)
				},100)
			}
		}
	}
</script>
<style lang="stylus" scoped>
   @import '~@styles/varibles.styl'
	.search
		height:.72rem
		background:$bgColor
		padding:0 .1rem
		.searchInput
			height:.62rem
			line-height:.62rem
			width:100%
			text-align:center
			border-radius:.1rem
			color:#666
			box-sizing:border-box
			padding:0 .1rem
	.search-cont
		z-index:1
		overflow:hidden
		position:absolute
		top:1.58rem
		left:0
		right:0
		bottom:0
		background:#eee
		.search-item
			line-height:.62rem
			color:#666
			padding-left:.2rem
			background:#fff
</style>