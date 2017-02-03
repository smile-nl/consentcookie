<template>
	<div id="icMenu" class="clearfix">
		<div class="ic-menu-button" v-on:click="toggleOpen"></div>
		<ul class="ic-menu-items clearfix" v-show="isOpen">
			<ic-menu-item v-for="menuItem in menuItems" :data="menuItem"></ic-menu-item>
		</ul>
	</div>
</template>

<script>

 	var icMenuItem = require('components/main/icMenuItem.vue');

	var menuItems = [{
		icon : "question",
		path : "/help",
	}, {
		icon : "line-chart",
		path : "/tracking",
	}, {
		icon : "cogs",
		path : "/preferences",
	}, {
		icon : "user",
		path : "/profile",
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
			}
		},
		methods : {
			toggleOpen : function(){
				this.$store.state.view.open = !this.$store.state.view.open;
			}
		},
		watch : {},
		ready : function() {

		}
	}; 
</script>

<style lang="scss" scoped>
	
	#icMenu {
		
		.ic-menu-button{
			float:right;
			height: 60px;
			width: 60px;
			border: 1px solid black;
		}
	
		.ic-menu-items{
			float:right;
		    list-style-type: none;
	    	margin: 0;
	    	padding: 0;
			border: 1px solid black;
		}
	}

</style>