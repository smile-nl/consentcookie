<template>
	<div style="display:block">
		<div id="icToggle" style="display:block">
			<div class="_icToggleContent">
				<div class="_icToggleImg"></div>
			</div>
		</div>
		<div id="icContentPanel">
			 <router-view class="icContent" keep-alive transition transition-mode="out-in"></router-view>
		</div>
	</div>
</template>

<script>
	module.exports = {
		name:"main"
	};
</script>

<style lang="scss">
	/*@import url("../../css/_utils.scss");*/

	#icookie {
		position: fixed;
		top: 0px;
		bottom: 0px;
		right:0px;
		/*right:-500px; Disabled for debugging purporse */
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
	}
	
	#icToggle {
		position: absolute;
		overflow: hidden;
		width: 50px;
		height: 54px;
		top: 50%;
		left: -52px;
		padding: 2px 0px 2px 2px;
		z-index: 2147483646;
	}

	#icToggle ._icToggleContent {
		background: #FFFFFF;
		border-style: solid;
		border-color: #F2F2F2;
		border-width: 2px 0px 2px 2px;
		box-sizing: border-box;
		-webkit-border-radius: 5px 0px 0px 5px;
		-moz-border-radius: 5px 0px 0px 5px;
		border-radius: 5px 0px 0px 5px;
		-webkit-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
		-moz-box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
		box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
		width: 50px;
		height: 50px;
	}

	#icToggle ._icToggleContent:hover {
		background: #F2F2F2;
		cursor: pointer;
	}

	#icToggle ._icToggleImg {
		background: url("//static.test.iqnomy.com/icookie/logo.png");
		background-size: contain;
		background-repeat: no-repeat;
		width: 100%;
		height: 100%;
	}
</style>