<template>
	<div class="_ic_foryou">
		<view-header title="Selected for you" :refresh="updateImpression" :loading="isLoading"></view-header>
		<div class="_ic_content">
			<div class="_ic_impression" v-for="impression in impressions" data-container-id="{{impression.container.id}}" 
				data-container-name="{{impression.container.name}}">
				<div class="_ic_impression_name">{{impression.container.name}} </div>
				<div class="_ic_impression_content">
					{{{impression.getMergedTemplates()}}}
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	var impressService = require('services/impressService.js');

	var data = {};
	data.isLoading = false;
	data.impressions = null;
	
	function _impress(){
		data.isLoading = true;
		impressService.impress(_impressCallback);
	}
	
	function _impressCallback(hasError,error,containerImpressions){
		data.isLoading = false;
		data.impressions = containerImpressions;
	}
	
	// Public functions
	module.exports = {
		name:"foryou",
		components:{
		},
		data : function(){
			return data;
		},
		methods : {
			updateImpression : function(){
				_impress();
			}
		},
		ready : function() {
			var scope = this;
			scope.updateImpression();
		}
	};
</script>
<style lang="scss">
	
	@import '../assets/scss/colors';

	._ic_foryou{
		height:100%;
		min-height: 100%;
		
		._ic_content{
			min-height: calc(100% - 70px); /* full height minus header */
		}
		
		._ic_impression{
			padding: 20px 10px;
			
			._ic_impression_content{
				
				> *,img {
					width: 100%;
				}
			}
		}
	}
</style>