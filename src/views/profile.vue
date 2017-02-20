<template>
	<div id="profile" class="ic-content">		
		<div v-if="!profileLoaded">
			<div class="no-content">
				<i class="fa fa-user" aria-hidden="true"></i>
			</div>
		</div>
		<div v-if="profileLoaded && profile">
			<div class="_ic_header">Profile</div>
			<div class="_ic_properties">
				<div class="_ic_property">
					<div class="_ic_name">Id</div>
					<div class="_ic_value">{{profile.id}}</div>
				</div>
				<div class="_ic_property">
					<div class="_ic_name">Created</div>
					<div class="_ic_value">{{profile.dateCreated}}</div>
				</div>
				<div class="_ic_property">
					<div class="_ic_name">Last seen</div>
					<div class="_ic_value">{{profile.dateLastSeen}}</div>
				</div>
			</div>
			<div class="_ic_header">Stats</div>
			<div class="_ic_properties">
				<div class="_ic_property">
					<div class="_ic_name">Session count</div>
					<div class="_ic_value">{{profile.sessionCount}}</div>
				</div>
				<div class="_ic_property">
					<div class="_ic_name">Pagevisit count</div>
					<div class="_ic_value">{{profile.pagevisitCount}}</div>
				</div>
				<div class="_ic_property">
					<div class="_ic_name">Visit count</div>
					<div class="_ic_value">{{profile.sessions ? profile.sessions.length : ''}}</div>
				</div>
			</div>
			<div class="_ic_header">Properties</div>
			<div class="_ic_properties">				
				<div class="_ic_property" v-for="property in profile.properties">
					<div class="_ic_name">{{property.name}}</div>
					<div class="_ic_value">{{property.value}}</div>
				</div>
			</div>
			<div class="_ic_header">Dimensions</div>
			<div class="_ic_properties">				
				<div class="_ic_property" v-for="property in profile.dimensionProperties">
					<div class="_ic_name">{{property.dimension.name}}</div>
					<div class="_ic_value">{{property.value}}</div>
				</div>
			</div>
			<div class="_ic_header">Last Events</div>
			<div class="_ic_properties">				
				<div class="_ic_property" v-for="session in profile.sessions">
					<div class="_ic_name">Visit</div>
					<div class="_ic_value">End: {{session.dateLastSeen }}</div>
					<div class="_ic_value" v-for="event in session.events">
						<i class="fa fa-clock-o" aria-hidden="true" :title="event.dateCreated"></i>
						<span class="_ic_event_path" :title="event.type" >{{event.url}}</span>
					</div>
					<div class="_ic_value">Start: {{session.dateCreated}}</div>
				</div>
			</div>
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