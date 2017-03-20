<template>
	<div id="welcome" class="ic-content">
		<div class="ic-info">
			<div class="title">Testwebsite.nl maakt gebruik van cookies</div>
			<div class="text">Met deze applicatie krijg je informatie over welke cookies dat zijn én kun je zien welke voordelen dat voor jou oplevert. </div>
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
	var viewTitle = "Welkom bij icookie";
	
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
			height: 240px;
    		margin-top: 50px;
			background-image: url('//work-steven.asknow.local/icookie/static/welcome_placeholder_v1.jpg');
			background-repeat: no-repeat;
			background-position: top center;
			
			.cta{
			position: absolute;
			bottom: 10px;
			left: 10px;
			right: 10px;
			text-align: center;
			}
		}
	}
</style>