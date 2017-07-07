<template>
	<div id="icMenu" class="clearfix">
		<div class="ic-menu-bar">
			<transition enter-active-class="icAnimated icSlideInRight" leave-active-class="icAnimated icSlideOutRight">
				<div class="ic-menu-items clearfix" v-show="isOpen">
					<ic-menu-item v-for="menuItem in menuItems" :data="menuItem"></ic-menu-item>
				</div>
			</transition>
		</div>
		<div :class="'ic-menu-button' + (isDisabled ? ' disabled' : '')" v-on:click="toggleOpen">
			<img class="hs-logo" src="../../assets/img/hs_logo_red.svg"/>
		</div>
	</div>
</template>

<script>

 	var icMenuItem = require('components/main/icMenuItem.vue');

	var menuItems = [{
		icon : "gift",
		path : "/foryou",
		info : "Voor jou",
	}, {
		icon : "toggle-on",
		path : "/connections",
		info : "Connecties",
	}, {
		icon : "question",
		iconSize: "30",
		path : "/howto",
		info : "Info",
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

			.hs-logo{
				position: absolute;
				top:3px;
				left:4px;
				height: $menu-logo-height;
				width: $menu-logo-width;
			}

			&.disabled{
				@include default-state-disabled;
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