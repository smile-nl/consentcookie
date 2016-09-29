<template>
	<div v-on:click="click" v-show="notificationCount != 0" class="_ic_notification">
		<span class="_ic_count">{{notificationCount}}</span>
	</div>
</template>

<script>
	var mainService = require('services/mainService.js');
	var notificationService = require('services/notificationService.js');

	var data = {};
	data.notificationCount = 0;

	_initCount();
	_initListeners();
	
	function _initCount(){
		data.notificationCount = notificationService.getCount();
	}
	
	function _initListeners(){
		mainService.$on('notificationService#update',function(){
			data.notificationCount = notificationService.getCount();
		});
	}

	module.exports = {
		name : "notification-count",
		props : {
			onClick:Function
		},
		methods: {
			click : function(){
				this.onClick();
			},
		},
		data : function(){
			return data;
		}
	};
</script>

<style lang="scss">

</style>