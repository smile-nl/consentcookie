<template>
	<div id="icToggle" style="display:block">
		<div class="_ic_content">
			<div class="_ic_image"></div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		name:"toggle"
	};
</script>

<style lang="scss" scoped>

	#icToggle {
		position: absolute;
		overflow: hidden;
		width: 50px;
		height: 54px;
		top: 50%;
		left: -52px;
		padding: 2px 0px 2px 2px;
		z-index: 2147483646;
		
		._ic_content{
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
		
		&:hover {
			background: rgba(0,0,0,0.4);
			cursor: pointer;
		}
		
		._ic_image {
			background: url("//static.test.iqnomy.com/icookie/logo.png");
			background-size: contain;
			background-repeat: no-repeat;
			width: 100%;
			height: 100%;
		}
	}
</style>