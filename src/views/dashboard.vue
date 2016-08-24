<template>
	<div class="_ic_dashboard">
		<div class="_ic_header">
			<div class="_ic_logo"></div>
			<div class="_ic_logo"></div>
		</div>
		<dashboard-menu></dashboard-menu>
		<div class="_ic_stats">
			
		</div>
		<div class="_ic_app-menu">
			
		</div>
		
		
		<h1>Your page</h1>	
         <a v-link="{ path: '/profile' }">
            <div class="_ic_button">Your profile</div>
      	</a>
      	<a v-link="{ path: '/tracking' }">
            <div class="_ic_button">Who is tracking</div>
      	</a>
      	<a v-link="{ path: '/foryou' }">
            <div class="_ic_button">Selected for you</div>
      	</a>
      	<a v-link="{ path: '/settings' }">
            <div class="_ic_button">Settings</div>
      	</a>
      	<a v-link="{ path: '/about' }">
            <div class="_ic_button">How it works</div>
      	</a>
      	<a v-link="{ path: '/contact' }">
            <div class="_ic_button">Contact</div>
      	</a>
	</div>
</template>

<script>
	var dashboardMenu = require('../components/dashboard-menu.vue');

	module.exports = {
		name:"dashboard",
		components:{
			dashboardMenu
		},
		data: function(){
			return {};
		}
	};	
</script>

<style>

</style>