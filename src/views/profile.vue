<template>
	<div id="profile" class="ic-content">		
		<div v-if="!profileLoaded || !profile">
			<div class="no-content">
				<i class="fa fa-user" aria-hidden="true"></i>
			</div>
		</div>
		<div v-if="profileLoaded && profile">
			<ic-content-box class="trackerprofiel box inline-fix">
					<div class="title v-centered"> HumanSwitch </div>
					<ic-switch class="v-centered toggle"></ic-switch>
					<ic-dropdown-button :state="state" :iconShowInfo="'question'" :iconHideInfo="'chevron-up'"></ic-dropdown-button>

                    <div class="notification" v-if="!state.collapsed">
                        <div class="text"> In dit scherm wordt jouw HumanSwitch profiel getoond. Meer informatie over de HumanSwitch tracker kun je vinden in<router-link to="tracking">voorkeuren</router-link>  </div>
                    </div>

			</ic-content-box>


			<ic-content-box :title="'Dimensions'">
			 	<ic-dimensions :profile="profile"></ic-dimensions>
			</ic-content-box>
			<ic-content-box :title="'Interesses'">
				<ic-interests :interests="profileInterests"></ic-interests>
			</ic-content-box>
		</div>
	</div>
</template>

<script>

	// Components
	var icDimensions = require("components/profile/icDimensions.vue");
	var icInterests = require("components/profile/icInterests.vue");

	// Defaults
	var viewTitle = "Jouw profielen";

	// View state
	var data = {
        state:{
            collapsed:true
        }
    };

	// Private functions
	
	// Public functions
	module.exports = {
		name:"profile",
		components:{
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
		
	  	.ic-content-box .content * {
	  		padding: 10px;
	  	}

		.trackerprofiel .title{
		width: 180px;
		}

		.title{
		font-size: 20px;
		letter-spacing: 0.5px;


}
	}
</style>