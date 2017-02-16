<template>
	<div id="settings">
		<ic-content-box>
			<div>
				<ic-switch :value="testEnv" >Enable test enviroment</ic-switch>
			</div>
			<div>
				<ic-switch :value="dnt" orientation="right">Enable "Do Not Track"</ic-switch>
			</div>
			<div>
				<ic-button v-on:click="deleteProfile" size="large">Delete profile</ic-button>
			</div>
		</ic-content-box>
	</div>
</template>
<script>

	// Defaults
	var viewTitle = "Preferences";
	
	
	// Public functions
	module.exports = {
		name:"settings",
		methods : {
			deleteProfile: function(){
				
			}
		},
		computed: {
			dnt : {
				set: function(val){
					
				},
				get: function(){
					return this.$store.state.settings.dnt;
				}
			},
			testEnv : {
				set: function(val){
					
				},
				get: function(){
					return "test" == this.$store.state.settings.env;
				}
			}
		},
		beforeMount : function(){
			this.$store.commit('updateView',{title: viewTitle});
		}
	};
</script>

<style lang="scss">
	
</style>