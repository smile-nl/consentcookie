<template>
	<div id="icookie" class="icookie">
		<ic-view></ic-view>
		<ic-menu></ic-menu>
	</div>
</template>

<script>
	var icMenu = require('../components/main/icMenu.vue');
	var icView = require('../components/main/icView.vue');
		
	module.exports = {
		name:"main",
		components:{
			icMenu,icView
		},
		created : function() {
			
  		}
	};
</script>

<style lang="scss" scoped>
	#icookie {
		position: fixed;
		bottom: 40px;
		right: 40px;
	}
</style>