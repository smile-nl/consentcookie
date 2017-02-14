<template>
	<div id="tracking" class="ic-content">
		
	</div>
</template>
<script>
	
	// Dependencies
	
	// Defaults
	var viewTitle = "Who is tracking you?";
	
	// View state
	var data = {};
	
	// Public functions
	module.exports = {
		name:"tracking",
		components:{
		},
		data : function(){
			return data;
		},
		methods : {
			
		},
		ready : function() {
			
		},
		beforeMount : function(){
			this.$store.commit('updateView',{title: viewTitle});
		}
	};
	
</script>