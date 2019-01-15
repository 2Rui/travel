<template>
	<ul class="alphabet" v-show="isShow">
		<li class="item" v-for="item of list"
		@click="handleClick"
		@touchstart.prevent="handleStart"
		@touchmove="handleMove"
		@touchend="handleEnd"
		:ref="item"
		>{{item}}</li>
		<!-- <li class="item">A</li>
		<li class="item">A</li>
		<li class="item">A</li> -->
	</ul>
</template>
<script>
	export default {
		name:'Alphabet',
		props:['citys'],
		data () {
			return {
				isShow:true,
				isStart:false,
				startY:'',
				timer:null
			}
		},
		computed:{
          list (){
          	const alphabet=[];
          	for(var i in this.citys){
          		alphabet.push(i)
          	}
          	return alphabet
          }
		},
		mounted (){
			const that=this;
			this.bus.$on('hideAlp',function(isShow){
				alert(isShow)
				if(!isShow){
                    that.isShow=false; 
				}
			})
		},
		updated (){//数据发生变化，接收到父级传来的数据，重新渲染完成 循环的项中加属性ref 得到的是数组，要[0]
           this.startY=this.$refs['A'][0].offsetTop;
		},
		methods:{
			handleClick (e){
             var alp=e.target.innerText;//想要把这个值传递给兄弟组件 List.vue,bus/先传父再传，父再传兄弟 this.bus.$on('事件名',参数) 另一个兄弟组件 mounted this.bus.$on('事件名',function(参数){})
              this.bus.$emit('getalp',alp);
			},
			handleStart () {
              this.isStart=true;
			},
			handleMove (e) {
             if(this.isStart){//
             	 //const startY=this.$refs['A'][0].offsetTop;
             	 if(this.timer){
             	 	clearTimeout(this.timer)
             	 }
             	 	this.timer=setTimeout(()=>{
                         const moveY=e.touches[0].clientY-79;
		                 const index=Math.floor((moveY-this.startY)/20);
		                 if(index>=0&&index<=this.list.length){
		                 	this.bus.$emit('getalp',this.list[index])
		                 }
             	 	},16)
             }
			},
			handleEnd () {
            this.isStart=false
			},
		}
	}
</script>
<style lang="stylus" scoped>
@import '~@styles/varibles.styl'
	.alphabet
		display:flex
		flex-direction:column
		justify-content:center
		position:fixed
		top:1.58rem
		right:0
		bottom:0
		width:.4rem
		.item
			line-height:.4rem
			text-align:center
			color:$bgColor
</style>