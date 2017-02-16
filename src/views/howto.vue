<template>
	<div id="howto" class="ic-content">
		<div class="no-content">
			<i class="fa fa-question" aria-hidden="true"></i>
		</div>
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

<style lang="scss">
	
	@import '../assets/scss/general-variables';

	#howto{
		min-height: 400px;
		
		.no-content{
			
			text-align: center;
			padding-top: 120px;
			
			i{
				font-size: 100px;
				opacity: 0.1;
			}
			
		}
	}
</style>