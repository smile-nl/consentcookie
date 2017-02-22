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
			 	<ic-dimensions></ic-dimensions>
			</ic-content-box>
			<ic-content-box :title="'Interesses'">
				<ic-interests :interests="profileInterests"></ic-interests>
			</ic-content-box>
		</div>
	</div>
</template>

<script>

	// Components
	var icTrackingStatus = require("components/tracking/icTrackingStatus.vue");
	var icDimensions = require("components/profile/icDimensions.vue");
	var icInterests = require("components/profile/icInterests.vue");

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
			icDimensions:icDimensions,
			icInterests:icInterests
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
			},
			profileInterests : function(){
				if(this.$store.state.iqnomy.profile.loaded){
					return this.$store.state.iqnomy.profile.data.dimensionProperties;
				}
				return [];
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
		
	  	.ic-content-box .content * {
	  		padding: 10px;
	  	}
	}
</style>