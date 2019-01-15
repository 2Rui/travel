<template>
	<div>
		<router-link tag="div" to="/" class="detail-back" v-show="showIcon">
			<i class="iconfont detail-icon">&#xe624;</i>
		</router-link>
		<div class="detail-title" v-show="!showIcon" :style="styObj">
			<router-link tag="div" to="/" class="title-back">
				<i class="iconfont detail-icon">&#xe624;</i>
			</router-link>
             景点介绍
		</div>
	</div>
</template>
<script>
	export default {
       name:'DetailHeader',
       data (){
       	return {
       		showIcon:true,
       		styObj:{
       			opacity:0
       		}
       	}
       },
       activated (){//用keep-alive包裹的，每次进入都会执行的一个钩子函数
           //触发一个 页面滚动条的高度的事件
           window.addEventListener('scroll',this.getScrollTop);
       },
       deactivated (){//也是keep-alive多的函数，当页面即将消失或者被其他页面替换时执行
         window.removeEventListener('scroll',this.getScrollTop);
         //因为事件是加载window上的,否则每个页面都会执行这个函数
       },
       methods:{
              getScrollTop (){
	              	const top=document.documentElement.scrollTop;
	                if(top>60){
                      this.showIcon=false;//目的60到140之间透明度从0到1，之后一直是1
                      const num=top/140;
                      const opacity=num>1?1:num;
                      this.styObj.opacity=opacity;
	                }else{
                      this.showIcon=true;
	                }
              }
       }
	}
</script>
<style lang="stylus" scoped>
    @import '~@styles/varibles.styl'
	.detail-back
		width:.8rem
		height:.8rem
		position:absolute
		top:.2rem
		left:.2rem
		line-height:.8rem
		border-radius:.4rem
		text-align:center
		background:rgba(0,0,0,0.8)
		color:#fff
		.detail-icon
			font-size:.4rem
	.detail-title
		position:fixed
		top:0
		left:0
		right:0
		background:$bgColor
		height:.86rem
		text-align:center
		line-height:.86rem
		color:#fff
		font-size:.32rem
		.title-back
			display:inline-block
			width:.64rem
			float:left
			font-size:.4rem
</style>
