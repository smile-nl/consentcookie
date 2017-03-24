<template>
	<div id="icMenu" class="clearfix">
		<div class="ic-menu-button" v-on:click="toggleOpen">
			<img class="hs-logo" src="../../assets/img/hs_logo_red.png"/>
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
		icon : "user",
		path : "/profile",
		info : "Profielen",
	}, {
		icon : "toggle-on",
		path : "/tracking",
		info : "Voorkeuren"
	}, {
		icon : "help",
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
	
	#icMenu {
		
		display:block;
		position:relative;
		
		.ic-menu-button{
			z-index:1000;
			position:absolute;
			right:0px;
			bottom:0px;
			height: 60px;
			width: 60px;
			border-radius: 60px;
			background:#FFFFFF;
			text-align: center;
			box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
			cursor: pointer;
			
			.hs-logo{
				position: absolute;
			    margin: auto;
			    top: 0;
			    left: 0;
			    right: 0;
			    bottom: 0;
			}
		}
	
		.ic-menu-bar{
			margin-right:30px;
			overflow:hidden;
		
			.ic-menu-items{
			    height:60px;
		    	padding: 5px 30px 5px 5px;
		    	border-radius:60px 0px 0px 60px;
		    	background: rgba(252,109,109,255);
			}
		
		}
	}

</style>