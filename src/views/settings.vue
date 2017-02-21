<template>
	<div id="settings">
		<ic-content-box>
			<div>
				<ic-switch v-model="testEnv" >Enable test enviroment</ic-switch>
			</div>
			<div>
				<ic-switch v-model="dnt" orientation="right">Enable "Do Not Track"</ic-switch>
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
				this.$services.iqnomy.deleteProfile();
			}
		},
		computed: {
			dnt : {
				set: function(val){
					return this.$services.settings.setDNT(val)
				},
				get: function(){
					return this.$services.settings.isDNT()
				}
			},
			testEnv : {
				set: function(val){
					return this.$services.settings.setTestEnv(val)
				},
				get: function(){
					return this.$services.settings.isTestEnv()
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