<template>
	<div id="icView" v-show="isOpen">
		<ic-view-header></ic-view-header>
		
	</div>
</template>

<script>
	
	var icViewHeader = require("components/main/icViewHeader.vue");
	
	/* VUE */
	module.exports = {
		name:"icView",
		components: {
			icViewHeader
		},
		data: function(){
			return {};
		},	
		computed : {
			isOpen : function(){
				return this.$store.state.view.open;
			}
		},
	};
</script>

<style lang="scss" scoped>

	#icView{
		position: absolute;
		right: 0px;
		bottom: 110px;
		width: 300px;
		height: 400px;
		border: 5px black solid;
	}

</style>