<template>
	<div id="howto" class="ic-content">
		
	</div>
</template>
<script>
	// Dependencies

	// Defaults
	var viewTitle = "How it works";
	
	// View state
	var data = {};
	
	// Public functions
	module.exports = {
		name:"howto",
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