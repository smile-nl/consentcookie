<template>
	<div id="dashboard" class="dashboard">
		<h1>dashboard</h1>
		<h2>{{vue1}}</h2>
		<h2>{{vue2}}</h2>
    	<button>Clear all CSS rules</button>
    	<button v-on:click="changeVue1">Change vue 1</button>
    	<button v-on:click="changeVue2">Change vue 1</button>
	</div>
</template>

<script>
	var data  = {};
	data.vue1 = "this is vue1";
	data.vue2 = "steven";
	data.profile = {};

	function changeVueFunction1(){
		data.vue1 = data.vue1 + "_changed";
	};
	
	function changeVueFunction2(){
		data.vue2 = data.vue2 + "_changed";
	};

	module.exports = {
		name:"dashboard",
		data : function(){
			return data;
		},
		methods : {
			changeVue1: changeVueFunction1,
			changeVue2: changeVueFunction2,
		}
	};	
</script>

<style>

</style>