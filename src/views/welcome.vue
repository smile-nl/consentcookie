<template>
	<div id="welcome" class="ic-content">
		<h1>Welcome</h1>
	</div>
</template>
<script>
	
	// Dependencies
	
	// Defaults
	var viewTitle = "Welcome";
	
	// View state
	var data = {};
	
	// Public functions
	module.exports = {
		name:"welcome",
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
			this.$store.commit('updateApplication',{shownWelcome : true});
		}
	};
	
</script>