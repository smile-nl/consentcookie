<template>
	<div class="_icProfile">
		<view-header title="Your profile"></view-header>
	</div>
</template>

<script>
	var subMenu = require('../components/base/sub-menu.vue');
	
	var data  = {};
	data.iqProfile = {};
	
	module.exports = {
		name:"profile",
		components:{
			subMenu
		},
		data : function(){
			return data;
		},
		methods : {

		}
	};	
</script>