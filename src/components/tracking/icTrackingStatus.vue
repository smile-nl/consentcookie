<template>
	<div class="ic-tracking-status">
		<div class="title">
			<span>Tracking status: {{trackingStatus}}</span>
			<span class="info"><i class="fa fa-question" aria-hidden="true"></i></span>
		</div>
		<div class="status">
			<i v-for="n in 5" :class="'fa fa-star' + (n > starCount ?  '-o' : '')" aria-hidden="true"></i>
		</div>
	</div>
	
	
</template>

<script>

	// Module data
	var moduleData = {
		
	};
	
	// Vue module
	module.exports = {
		name : "ic-tracking-status",
		components :{},
		data : function() {
			return moduleData;
		},
		computed : {
			starCount : function(){
				// return this.$services.icookie.getTrackingLevel();
				return 3;
			},
			trackingStatus: function(){
				// return this.$services.icookie.getTrackingStatus();
				return "Basic";
			}
		},
		ready : function() {
			
		}
	}; 
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/general-variables';

	.ic-tracking-status{
		
		margin:5px;
		padding: 5px 10px;
    	border-bottom: $ic-content-border;
    	
    	.title{
    		position:relative;
    		margin: 5px 0px;
    		font-weight: 600;
    		
    		.info{
    			position: absolute;
    			top:0;
    			bottom:0;
    			right:0;
    			border-radius:25px;
    			width:25px;
    			height:25px;
    			line-height:25px;
    			vertical-align:middle;
    			text-align: center;
    			border-color:$ic-color-grey;
    			background:$ic-color-grey;
    			font-weight: 200;
    			pointer:cursor;
    			
    			i {
    				vertical-align: middle;
    			}
    			
    		}
    	}
		
		.status{
			
			margin: 5px 0px;
						
			i.fa-star,
			i.fa-star-o{
				
				margin-right:3px;
				font-size:26px;
				color:$ic-brand-color;	
			}
			
		}
	}
</style>