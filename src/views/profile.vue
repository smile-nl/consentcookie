<template>
	<div id="profile" class="ic-content">		
		<div v-if="!profileLoaded">
			<div class="no-content">
				<i class="fa fa-user" aria-hidden="true"></i>
			</div>
		</div>
		<div v-if="profileLoaded && profile">
			<ic-tracking-status></ic-tracking-status>
			<ic-content-box :title="'Dimensions'">
			 	
			</ic-content-box>
			<ic-content-box :title="'Interesses'">
				
			</ic-content-box>
		</div>
	</div>
</template>

<script>

	// Components
	var icTrackingStatus = require("components/tracking/icTrackingStatus.vue");
	

	// Defaults
	var viewTitle = "Your profile";

	// View state
	var data = {};
	
	// Private functions
	
	// Public functions
	module.exports = {
		name:"profile",
		components:{
			icTrackingStatus:icTrackingStatus,
			
		},
		data : function(){
			return data;
		},
		computed: {
			profile : function(){
				return this.$store.state.iqnomy.profile.data;
			},
			profileLoaded : function(){
				return this.$store.state.iqnomy.profile.loaded;
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

<style lang="scss" scoped>
	
	@import '../assets/scss/general-variables';

	#profile{
		
		.no-content{
			
			text-align: center;
			padding-top: 120px;
			
			i{
				font-size: 100px;
				opacity: 0.1;
			}
			
		}
		
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