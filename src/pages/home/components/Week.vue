<template>
	<div>
		<div class="title">周末去哪玩</div>
		<ul>
			<li v-for="item of weekendList" :key="item.id">
				<div class="img-wrap">
				<img :src="item.imgUrl" class="item-img"/>
			   </div>
				<div class="item-cont">
					<p class="cont-title">{{item.title}}</p>
					<p class="cont-desc">{{item.desc}}</p>
				</div>
			</li>
			
		</ul>
	</div>
</template>
<script>
	export default{
		name:'Week',
		props:{
			weekendList:{
				type:Array
			}
		}
		// data (){
		// 	return {
  //              weekendList: [{
		// 	        "id": "0001",
		// 	        "imgUrl": "http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg",
		// 	        "title": "北京温泉排行榜",
		// 	        "desc": "细数北京温泉，温暖你的冬天"
		// 	      }, {
		// 	        "id": "0002",
		// 	        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg",
		// 	        "title": "北京必游TOP10",
		// 	        "desc": "来北京必去的景点非这些地方莫属"
		// 	      }, {
		// 	        "id": "0003",
		// 	        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg",
		// 	        "title": "寻找北京的皇城范儿",
		// 	        "desc": "数百年的宫廷庙宇，至今依旧威严霸气"
		// 	      }, {
		// 	        "id": "0004",
		// 	        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg",
		// 	        "title": "学生最爱的博物馆",
		// 	        "desc": "周末干嘛？北京很多博物馆已经免费开放啦"
		// 	      }, {
		// 	        "id": "0005",
		// 	        "imgUrl": "http://img1.qunarzz.com/sight/source/1505/b2/fde1bfcd057a52.jpg_r_640x214_bbf3fa44.jpg",
		// 	        "title": "儿童剧场，孩子的乐园",
		// 	        "desc": "带宝贝观看演出，近距离体验艺术的无穷魅力"
		// 	      }]

		// 	}
		// }
	}

</script>
<style lang="stylus" scoped>
  @import '~@styles/mixins.styl'
	.title
		line-height:.8rem
		background:#eee
		text-indent:.1rem
	.img-wrap
		height:0
		overflow:hidden
		padding-bottom:37%
		.item-img
			width:100%
			display:block
			padding:.1rem
	.item-cont
		padding:.1rem
		pdding-left:.3rem
		.cont-title
			line-height:.54rem
			font-size:.32rem
			ellipsis()
		.cont-desc
			color:#ccc
			line-height:.4rem
			ellipsis()
		.cont-btn
			background:#ff9300
			padding:0 .2rem
			border-radius:.06rem
			color:#fff
			margin-top:.16rem
			line-height:.64rem
				
</style>
