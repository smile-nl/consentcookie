<template>
	<div class="_ic_profile">
		<view-header title="Your profile" :refresh="refreshProfile"></view-header>
		<div>
			{{profile | json }}
		</div>
		
		<div v-if="!initFinished">No profile loaded.</div>
		<div v-else>
			{{profile | json }}
		</div>
	</div>
</template>

<script>

	var iqnomyService = require('services/iqnomyService.js');
	
	// data variables
	var data = {};
	data.initFinished = false;
	data.hasError = false;
	data.errorCode = null;
	data.errorMessage = '';
	data.isLoading = false;
	data.profile = null;
	
	// Private functions
	function _getProfile($vueScope,$refresh){
		if($refresh || null == $vueScope.profile){
			$vueScope.isLoading = true;
			iqnomyService.getProfile(function($data){
				$vueScope.hasError = !$data.ok; 		
				$vueScope.errorCode = $data.statusCode;
				$vueScope.errorMessage = $data.message;			
				$vueScope.profile = $data.ok ? $data.data : {};
				$vueScope.isLoading = false;
				if(!$vueScope.initFinished){
					$vueScope.initFinished = true;
				}
			});
		}
	}
	
	// Public functions
	module.exports = {
		name:"profile",
		components:{
		},
		data : function(){
			return data;
		},
		methods : {
			refreshProfile: function(){
				this.getProfile(true);
			},
			getProfile : function(refresh){			
				_getProfile(this,refresh);
			}
		},
		ready : function() {
			var scope = this;
			setTimeout(function(){ scope.refreshProfile();}, 1000);
		}
	};	
</script>

<style lang="scss">
	
	@import '../assets/scss/colors';

	._ic_profile{
		
	}
</style>