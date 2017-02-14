<template>
	<div id="profile" class="ic-content">		
		<div v-if="!profileLoaded">No profile loaded.</div>
		<div v-else>
			
		</div>
	</div>
</template>

<script>

	// Dependencies
	var iqnomyService = require('services/iqnomyService.js');

	// Defaults
	var viewTitle = "Your profile";

	// View state
	var data = {};
	
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
				console.log($data.data);
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
		computed: {
			profile : function(){
				return this.$store.state.iqnomy.profile;
			},
			profileLoaded : function(){
				return this.$store.state.iqnomy.profileLoaded;
			}
		},
		methods : {
			refreshProfile: function(){
				this.$services.iqnomy.refreshProfile();
			},
		},
		ready : function() {
			var scope = this;
			setTimeout(function(){ scope.refreshProfile();}, 1000);
		},
		beforeMount : function(){
			this.$store.commit('updateView',{title: viewTitle});
		}
		
	};	
</script>

<style lang="scss">
	
	@import '../assets/scss/general-variables';

	._ic_profile{
		
		._ic_header{
			margin:10px 20px 5px;
			font-family: "Calibre Regular", "sans-serif";
    		font-size: 20px;
    		font-weight: bold;
		}
		
		._ic_properties{
			margin:0px 20px;
			padding:10px;
			border: 1px solid #DDDDDD;
			
			
			._ic_property{
				margin-bottom: 10px;
				
				._ic_name{
					font-family: "Calibre Regular", "sans-serif";
    				font-size: 15px;
    				font-weight: bold;
    				color:#6E6E6E;
				}
			}
		}
	}
</style>