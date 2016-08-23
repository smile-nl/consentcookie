<template>
	<div id="icookieToggle" style="display:none">
		<div class="_icToggleContent">
			<div class="icookieToggleImg"></div>
		</div>
	</div>
</template>

<script></script>

<style>
	#icookieToggle {
		position: absolute;
		overflow: hidden;
		width: 52px;
		height: 54px;
		top: 50%;
		left: -52px;
		padding: 2px 0px 2px 2px;
		z-index: 2147483646;
	}

	#icookieToggle ._icToggleContent {
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

	#icookieToggle ._icToggleContent:hover {
		background: #F2F2F2;
		cursor: pointer;
	}

	#icookieToggle .icookieToggleImg {
		background: url("//static.test.iqnomy.com/icookie/logo.png");
		background-size: contain;
		background-repeat: no-repeat;
		width: 100%;
		height: 100%;
	}
</style>