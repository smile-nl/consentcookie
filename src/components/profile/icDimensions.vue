<template>
	<div class="ic-dimensions clearfix">
		<div class="dimension">
			<div class="title">Referrer</div>
			<div class="description">{{referrer}}</div>
		</div>
		<div class="dimension">
			<div class="title">Connected</div>
			<div class="description">{{connected}}</div>
		</div>
		<div class="dimension">
			<div class="title">Visits</div>
			<div class="description">{{visits}}</div>
		</div>
	</div>
</template>

<script>

	// Libraries
	var underscore = require("underscore");

	// Module data
	var moduleData = {
		
	};
	
	// Vue module
	module.exports = {
		name : "ic-dimensions",
		components :{},
		props: {
			profile:Object,
		},
		data : function() {
			return moduleData;
		},
		computed : {
			referrer : function(){
				if(!this.profile || !this.profile.dimensionProperties){
					return "Unknown";
				}
				var referrer = underscore.find(this.profile.dimensionProperties,function($dimensionProp){
					return $dimensionProp.dimension && $dimensionProp.dimension.definition && $dimensionProp.dimension.definition.id == 2;
				})
				return referrer ? referrer.label : "Unknown";
			},
			visits : function(){
				if(this.profile){
					return this.profile.sessionCount;
				}
				return "Unknown";
			},
			connected : function(){
				if(!this.profile || !this.profile.dimensionProperties){
					return "Unknown";
				}
				var connected = underscore.find(this.profile.dimensionProperties,function($dimensionProp){
					return $dimensionProp.dimension && $dimensionProp.dimension.definition && $dimensionProp.dimension.definition.id == 222;
				})
				return connected ? connected.label : "Unknown"; 
			}
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