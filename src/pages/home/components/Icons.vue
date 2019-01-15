<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(iconList,index) of slideList" :key="index">
		<div class="icon" v-for="item of iconList" :key="item.id">
			<div class="icon-img">
			   <img :src="item.imgUrl" class="image"/>
		   </div>
			<p class="desc">{{item.desc}}</p>
		</div>
		</swiper-slide>
		</swiper>
	</div>
</template>
<script>
	export default{
		name:'Icons',
		props:{
			iconList:Array
		},
		data (){
			return {
				swiperOption:{}
			}
		},
		// data (){
		// 	return {
		// 		swiperOption:{},
		// 		iconList: [{
		// 	        "id": "0001",
		// 	        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/54/ace00878a52d9702.png",
		// 	        "desc": "景点门票"
		// 	      }, {
		// 	        "id": "0002",
		// 	        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1711/df/86cbcfc533330d02.png",
		// 	        "desc": "滑雪季"
		// 	      }, {
		// 	        "id": "0003",
		// 	        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1710/a6/83f636bd75ae6302.png",
		// 	        "desc": "泡温泉"
		// 	      }, {
		// 	        "id": "0004",
		// 	        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/35/2640cab202c41b02.png",
		// 	        "desc": "动植园"
		// 	      }, {
		// 	        "id": "0005",
		// 	        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/d0/e09575e66f4aa402.png",
		// 	        "desc": "游乐园"
		// 	      }, {
		// 	        "id": "0006",
		// 	        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/59/569d3c096e542502.png",
		// 	        "desc": "必游榜单"
		// 	      }, {
		// 	        "id": "0007",
		// 	        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/17/4bd370f3eb1acd02.png",
		// 	        "desc": "演出"
		// 	      }, {
		// 	        "id": "0008",
		// 	        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/7f/b1ea3c8c7fb6db02.png",
		// 	        "desc": "城市观光"
		// 	      }, {
		// 	        "id": "0009",
		// 	        "imgUrl": "http://img1.qunarzz.com/piao/fusion/1611/a9/ffc620dbda9b9c02.png",
		// 	        "desc": "一日游"
		// 	      }],
		// 	}
		// 	},
			computed:{
				slideList:function(){
					var slideList=[];
					//var allPage=Math.ceil(this.iconList.length/8);
					// for(var i=0;i<allPage;i++){
					// 	slideList.push([]);
					// }
					this.iconList.forEach((item,index)=>{
						var nowIndex=Math.floor(index/8);
						if(!slideList[nowIndex]){
							slideList[nowIndex]=[];
						}
						slideList[nowIndex].push(item);
					})
					 return slideList
					//二维数组  [[],[],[]]
					
				}
		
	}
}

</script>
<style lang="stylus" scoped>
  @import '~@styles/varibles.styl'
  @import '~@styles/mixins.styl'
	.icons >>> .swiper-container
		//width:100%
		height:0
		//overflow:hidden
		padding-bottom:50%
		// display:flex
		// flex-direction:row
		// flex-wrap:wrap
		.icon
			width:25%
			position:relative
			height:0
			padding-bottom:25%
			text-align:center
			display:inline-block
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:.44rem
				box-sizing:border-box
				padding:.1rem
				.image
					display:block
					margin:0 auto
					height:100%
			.desc
				position:absolute
				left:0
				right:0
				bottom:0
				text-align:center
			    line-height:.44rem
				color:$fontColor
				ellipsis()
</style>