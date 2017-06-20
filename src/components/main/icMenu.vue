<template>
	<div id="icMenu" class="clearfix">
		<div class="ic-menu-button" v-on:click="toggleOpen">
			<img class="hs-logo" src="../../assets/img/hs_logo_red.svg"/>
		</div>
		<div :class="'ic-menu-bar ' + contentActiveClass">
			<transition enter-active-class="icAnimated icSlideInRight" leave-active-class="icAnimated icSlideOutRight">
				<div class="ic-menu-items clearfix" v-show="isOpen">
					<ic-menu-item v-for="menuItem in menuItems" :data="menuItem"></ic-menu-item>
				</div>
			</transition>
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
		info : "Connecties"
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
				return this.$store.state.view.open;
			},
			contentActiveClass : function(){
				return this.$store.state.view.contentActive ? "" : "no-content";
			}
		},
		methods : {
			toggleOpen : function(){
				this.$store.commit('toggleView');
				if(this.$store.state.view.open){
					// Go to last opened view or the welcome view
					var lastPath = this.$store.state.application.lastPath;
					return this.$router.push({path: lastPath});
				}
			}
		},
		watch : {},
		ready : function() {

		}
	}; 
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/general-variables';

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
		
		.ic-menu-button{
			z-index:1000;
			position:absolute;
			right:0px;
			bottom:0px;
			line-height: $menu-button-height;
			height: $menu-button-height;
			width: $menu-button-width;
			border-radius: $menu-button-radius;
			background: $ic-color-white;
			box-shadow: $ic-drop-shadow;
			cursor: pointer;

			.hs-logo{
				position: absolute;
				top:3px;
				left:5px;
				height: $menu-logo-height;
				width: $menu-logo-width;
			}
		}
	
		.ic-menu-bar{
			margin-right:30px;
			overflow:hidden;
		
			.ic-menu-items{
			    height:60px;
		    	padding: 5px 30px 5px 5px;
		    	border-radius:60px 0px 0px 60px;
		    	background: $ic-brand-color;
			}
		}
	}

</style>