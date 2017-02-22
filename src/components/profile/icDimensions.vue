<template>
	<div class="ic-dimensions clearfix">
		<div class="dimension">
			<div class="title">Referrer</div>
			<div class="description">Google search</div>
		</div>
		<div class="dimension">
			<div class="title">Device</div>
			<div class="description">Google search</div>
		</div>
		<div class="dimension">
			<div class="title">Time per.</div>
			<div class="description">Google search</div>
		</div>
	</div>
</template>

<script>

	// Module data
	var moduleData = {
		
	};
	
	// Vue module
	module.exports = {
		name : "ic-dimensions",
		components :{},
		data : function() {
			return moduleData;
		},
		computed : {
			
		},
		ready : function() {
			
		}
	}; 
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/general-variables';

	.ic-dimensions{
		
		width: 100%;
		
		.dimension{
			float:left;
			width:33.33333%;
			text-align: center;
			
			.title{
				text-transform: uppercase;
				font-weight: 600;
				font-size: 14px;	
			}
			
			.description{
				width: 90%;
				border-radius: 90%;				
			}
		}
	}
</style>