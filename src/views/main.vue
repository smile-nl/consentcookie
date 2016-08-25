<template>
	<div style="display:block">
		<toggle></toggle>
		<div class="_ic_contentPanel">
			 <router-view class="_ic_content" keep-alive transition transition-mode="out-in"></router-view>
		</div>
	</div>
</template>

<script>
	var toggle = require('../components/main/toggle.vue');

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
		right:-503px;/* width + border*/
		width: 500px;
		height: 100%;
		height: 100vh;
		z-index: 2147483645;
		background: #FFFFFF;
		border-style: solid;
		border-color: #F2F2F2;
		border-width: 0px 0px 0px 3px;
		-webkit-box-shadow: -2px 0px 10px 0px rgba(0,0,0,0.4);
		-moz-box-shadow: -2px 0px 10px 0px rgba(0,0,0,0.4);
		box-shadow: -2px 0px 10px 0px rgba(0,0,0,0.4);
		
		._ic_contentPanel {
			background: rgba(256,256,256,0.3);
		}
		
		* {
			font-family: "Calibre Regular", "sans-serif";
		}
		
	}
</style>