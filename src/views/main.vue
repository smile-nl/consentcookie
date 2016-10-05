<template>
	<div style="display:block">
		<toggle></toggle>
		<div class="_ic_contentPanel">
			 <router-view class="_ic_content" :transition="'vux-pop-in'"></router-view>
		</div>
	</div>
</template>

<script>
	var toggle = require('../components/main/toggle.vue');
	var mainService = require('services/mainService.js');
	
	module.exports = {
		name:"main",
		components:{
			toggle
		}
	};
</script>

<style lang="scss" scoped>
	#icookie {
		position: fixed;
		top: 0px;
		bottom: 0px;
		right:-400px;
		width: 400px;
		height: 100%;
		height: 100vh;
		z-index: 2147483645;
		background: #FFFFFF;
		border: none;
		-webkit-box-shadow: -2px 0px 10px 0px rgba(0,0,0,0.4);
		-moz-box-shadow: -2px 0px 10px 0px rgba(0,0,0,0.4);
		box-shadow: -2px 0px 10px 0px rgba(0,0,0,0.4);
		
		._ic_contentPanel {
			background: rgba(256,256,256,0.3);
			overflow-y:auto;
			overflow-x:hidden;
			height: 100%;
			
			._ic_content{
    			position: relative;
			}
		}
		
		* {
			font-family: "Calibre Regular", "sans-serif";
			text-align: left;
			font-weight: normal;
			font-size: 14px;
			color: #000000;
		}
}
	/**
	* vue-router transition
	*/
	
	.vux-pop-out-transition,
	.vux-pop-in-transition {
	    width: 100%;
	    animation-duration: 0.5s;
	    animation-fill-mode: both;
	    backface-visibility: hidden;
	}
	.vux-pop-out-enter,
	.vux-pop-out-leave,
	.vux-pop-in-enter,
	.vux-pop-in-leave {
	    will-change: transform;
	    height: 100%;
	    position: absolute;
	    right: 0;
	}
	.vux-pop-out-enter {
	    animation-name: popInLeft;
	}
	.vux-pop-out-leave {
	    animation-name: popOutRight;
	}
	.vux-pop-in-enter {
	    animation-name: popInRight;
	}
	.vux-pop-in-leave {
	    animation-name: popOutLeft;
	}
	@keyframes popInLeft {
	    from {
	        transform: translate3d(-100%, 0, 0);
	    }
	    to {
	        transform: translate3d(0, 0, 0);
	    }
	}
	@keyframes popOutLeft {
	    from {
	        transform: translate3d(0, 0, 0);
	    }
	    to {
	        transform: translate3d(-100%, 0, 0);
	    }
	}
	@keyframes popInRight {
	    from {
	        transform: translate3d(100%, 0, 0);
	    }
	    to {
	        transform: translate3d(0, 0, 0);
	    }
	}
	@keyframes popOutRight {
	    from {
	        transform: translate3d(0, 0, 0);
	    }
	    to {
	        transform: translate3d(100%, 0, 0);
	    }
	}
</style>