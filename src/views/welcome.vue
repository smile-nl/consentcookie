<template>
	<div id="welcome" class="ic-content">
		<div class="ic-info">
			<div class="title">Wil jij volledige controle over jouw data?</div>
			<div class="text">Geniet van gepersonaliseerde content en ben de baas over jouw persoonlijke data met behulp van Icookie</div>
		</div>
		<div class="placeholder">
			
			<div class="cta">
				<ic-button v-on:click="deleteProfile" size="large">Aan de slag met Icookie</ic-button>
			</div>
		</div>
	</div>
</template>
<script>
	
	// Dependencies
	
	// Defaults
	var viewTitle = "Welcome";
	
	// View state
	var data = {};
	
	// Public functions
	module.exports = {
		name:"welcome",
		components:{
		},
		data : function(){
			return data;
		},
		methods : {
			
		},
		ready : function() {
			
		},
		beforeMount : function(){
			this.$store.commit('updateView',{title: viewTitle});
			this.$store.commit('updateApplication',{shownWelcome : true});
		}
	};
	
</script>


<style lang="scss" scoped>
	
	#welcome{
		
		.placeholder{
			position: relative;
			width:100%;
			height: 220px;
    		margin-top: 50px;
			background-image: url('//work-steven.asknow.local/icookie/static/welcome_placeholder_v1.jpg');
			background-repeat: no-repeat;
			background-position: top center;
			
			.cta{
				position: absolute;
				bottom: 0px;
				left: 0px;
				right: 0px;
				text-align: center;
			}
		}
	}
</style>