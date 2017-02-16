<template>
	<div id="tracking" class="ic-content">
		<div class="no-content">
			<i class="fa fa-line-chart" aria-hidden="true"></i>
		</div>
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

<style lang="scss">
	
	@import '../assets/scss/general-variables';

	#tracking{
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