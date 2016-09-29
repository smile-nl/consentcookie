<template>
	<div class="_ic_dashboard">
		<div class="_ic_header">
			<img class="_ic_logo" alt="logo" src="../assets/img/hs_red_logo_sub.png"/>
			<div class="_ic_title">Your personal page</div>
		</div>
		<div class="_ic_content">
			<dashboard-menu :menuitems="dashboardMenuItemsTop"></dashboard-menu>
			<dashboard-stats></dashboard-stats>
			<dashboard-menu :menuitems="dashboardMenuItemsBottom"></dashboard-menu>
		</div>
	</div>
</template>

<script>
	
	
	var notificationService = require('services/notificationService.js');
	var notificationCount = notificationService.getCount();

	var dashboardMenuItemsTop = [{
		icon: "user",
		title: "Your page",
		path: "/profile",
		count: notificationCount
	},{
		icon: "line-chart",
		title: "Who is tracking",
		path: "/tracking",	
	},{
		icon: "gift",
		title: "Selected for you",
		path: "/foryou",	
	}];
	
	var dashboardMenuItemsBottom = [{
		icon: "heart-o",
		title: "How it works",
		path: "/about",	
	},{
		icon: "gears",
		title: "Settings",
		path: "/settings",	
	},{
		icon: "envelope-o",
		title: "Contact",
		path: "/contact",	
	}];
	
	var dashboardMenu = require('../components/dashboard/dashboard-menu.vue');
	var dashboardStats = require('../components/dashboard/dashboard-stats.vue');

	function _initListeners(){
		mainService.$on('notificationService#update',function(){
			notificationCount = notificationService.getCount();
		});
	}

	module.exports = {
		name : "dashboard",
		components : {
			dashboardMenu,dashboardStats
		},
		data : function() {
			return {
				dashboardMenuItemsTop: dashboardMenuItemsTop,
				dashboardMenuItemsBottom: dashboardMenuItemsBottom
			};
		},
		methods: {
		}
	}; 
</script>

<style lang="scss">

	/* CSS*/
	._ic_dashboard{
		._ic_header{
			
			margin-bottom:20px;
			
			._ic_logo{
				margin:20px;
			}
			
			._ic_title{
				margin:10px;
    			font-size: 30px;
			}
		}
		
		._ic_content{
			padding-left: 10px;
		}
		
	}
</style>