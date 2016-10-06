<template>
	<div id="icToggle">
		<notification-count></notification-count>
		<div class="_ic_content">
			<div class="_ic_image"></div>
		</div>
	</div>
</template>

<script>
	/* jQuery for animations */
	var jQuery = require('jquery');
	var mainService = require('services/mainService');
	
	var _icookie = null;
	var _icookieToggle = null;
	var _toggleCollapsed = true;
	
	jQuery(document).ready(function(){
		
		_icookie= jQuery('#icookie');
	 	_icookieToggle = jQuery('#icToggle');
    	
    	_icookieToggle.on("click", function() {
    		toggleIcookie();
    	});
    	
		var hasAccepted = mainService.hasAccepted();
		if(!hasAccepted){
			toggleIcookie(true);
		}
    	_icookieToggle.fadeIn(1000);
	});
	
	function toggleIcookie(instant) {
	    if (_toggleCollapsed) {
	        _toggleCollapsed = false;
	        _icookie.animate({
	            right: "0px"
	        }, (instant ? 0 : 2000));
	    } else {
	        _toggleCollapsed = true;
	        _icookie.animate({
	            right: "-" + _icookie.outerWidth() + "px"
	        }, (instant ? 0 : 2000));
	    }
	}

	var notificationCount = require('components/main/notification-count.vue');

	/* VUE */
	module.exports = {
		name:"toggle",
		components: {
			notificationCount
		}
	};
</script>

<style lang="scss" scoped>

	@import "bourbon";

	#icToggle {
		position: absolute;
    	margin-left: -52px;
    	width:52px;
    	top: calc(50% - 27px);
		padding: 2px 0px 2px 2px;
		
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
			
			&:after{
			   	content:"";
			    position:absolute;
			    width:8px;
			    background:#FFFFFF;
			    height:70px;
			    left:52px;
			    bottom:-9px;
			}
			
			&:hover {
				background: rgba(0,0,0,0.4);
				cursor: pointer;
			}	
		}
		
		._ic_image {
			background: url("../../assets/img/logo.png");
			background-size: contain;
			background-repeat: no-repeat;
			width: 100%;
			height: 100%;
		}
		
		._ic_notification{
			position:absolute;
			top: -7px;
			left: -7px;
			display:inline-block;
		    min-width: 10px;
		    padding: 3px 7px;
		    font-size: 14px;
		    font-weight: 700;
		    color: #fff;
		    line-height: 1;
		    vertical-align: baseline;
		    white-space: nowrap;
		    text-align: center;
		    background-color: #999;
		    border-radius: 10px;
		    background: red;
		}
	}
</style>