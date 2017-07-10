<template>
	<div id="icMenu" class="clearfix">
		<div class="ic-menu-bar">
			<transition enter-active-class="icAnimated icSlideInRight" leave-active-class="icAnimated icSlideOutRight">
				<div class="ic-menu-items clearfix" v-show="isOpen">
					<ic-menu-item v-for="menuItem in menuItems" :data="menuItem"></ic-menu-item>
				</div>
			</transition>
		</div>
		<div :class="'ic-menu-button' + (isDisabled ? ' disabled' : '') + (isOpen ? ' open' : ' closed')" v-on:click="toggleOpen" :title="menuTooltip">
			<img class="hs-logo" src="../../assets/img/hs_logo_red.svg"/>
			<img class="icMenuClose" src="../../assets/img/ios-close.svg"/>
		</div>
	</div>
</template>

<script>

	// Defaults
	var DEFAULT_TOOLTIP_DISABLED = "accepteer eerst";
	var DEFAULT_TOOLTIP_OPEN = "icookie openen";
	var DEFAULT_TOOLTIP_CLOSE = "icookie sluiten";

	// Components
 	var icMenuItem = require('components/main/icMenuItem.vue');

	var menuItems = [{
		icon : "gift",
		path : "/foryou",
		info : "Voor jou geselecteerd",
	}, {
		icon : "toggle-on",
		path : "/connections",
		info : "Connecties",
	}, {
		icon : "question",
		iconSize: "30",
		path : "/howto",
		info : "Over icookie",
	}];

	/* VUE */
	module.exports = {
		name : "icMenu",
		components : {
			icMenuItem
		},
		data : function() {
			return {
				menuItems: menuItems
			};
		},
		computed : {
			isOpen : function(){
				return this.$store.state.application.state.menuOpen;
			},
			isDisabled : function(){
				return !this.$store.state.application.state.menuActive;
			},
			menuTooltip: function(){
				// If disabled
				if(this.isDisabled){
					return DEFAULT_TOOLTIP_DISABLED;
				}
				if(this.isOpen){
					return DEFAULT_TOOLTIP_CLOSE;
				}else{
					return DEFAULT_TOOLTIP_OPEN;
				}
			}
		},
		methods : {
			toggleOpen : function(){
				if(!this.$store.state.application.state.menuActive){
					return false;
				}
				this.$services.view.toggleMenu();
			}
		},
		ready : function() {

		}
	}; 
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/general-variables';

	$menu-button-shadow: 0px 0px 15px 2px rgba(136, 136, 136, 0.15);

	$menu-button-size:60;
	$menu-button-height:$menu-button-size + px;
	$menu-button-width:$menu-button-size + px;
	$menu-button-radius:$menu-button-size + px;

	$menu-logo-size:$menu-button-size - 10;
	$menu-logo-height:$menu-logo-size + px;
	$menu-logo-width:$menu-logo-size + px;

	#icMenu {
		
		display:block;
		position:relative;
		height: $menu-button-size + px;
		
		.ic-menu-button{
			position:absolute;
			right:0px;
			bottom:0px;
			line-height: $menu-button-height;
			height: $menu-button-height;
			width: $menu-button-width;
			background: $ic-color-white;
			cursor: pointer;
			border:$ic-box-border;
			border-radius: $menu-button-radius;
			box-shadow: $menu-button-shadow;
			transition: transform 0.8s ease-in-out;

			.hs-logo{
				position: absolute;
				top:3px;
				left:4px;
				height: $menu-logo-height;
				width: $menu-logo-width;
				transition: opacity 0.8s ease-in-out;
			}

			.icMenuClose {
				position: absolute;
				width: $menu-button-width;
				height: $menu-button-height;
				line-height: $menu-button-height;
				text-align: center;
				transition: opacity 0.8s ease-in-out;
				fill: $ic-brand-color;

				&:before{
					margin: 0px;
				}

			}

			&.disabled{
				@include default-state-disabled;
			}

			&.open{
				transform: rotateZ(0deg);

				.hs-logo{
					opacity: 0;
				}

				.icMenuClose{
					opacity: 1;
				}

			}

			&.closed{
				transform: rotateZ(-360deg);

				.hs-logo{
					opacity: 1;
				}

				.icMenuClose{
					opacity: 0;
				}
			}
		}
	
		.ic-menu-bar{
			margin-right:($menu-button-size / 2) + px;
			overflow:hidden;
		
			.ic-menu-items{
			    height:$menu-button-size + px;
		    	padding: 5px ($menu-button-size / 2) + px 5px 5px;
		    	border-radius:$menu-button-size + px 0px 0px $menu-button-size + px;
		    	background: $ic-brand-color;
			}
		}
	}

</style>