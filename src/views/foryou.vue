<template>
	<div id="foryou" class="ic-content">
		<div v-if="!hasImpressions" class="no-content">
			<i class="fa fa-gift" aria-hidden="true"></i>
		</div>
		<div v-else class="ic-impressions">
			<div class="ic-impression-wrapper" v-for="impression in impressions" v-html="impression.htmlTemplate"></div>
		</div>
	</div>
</template>

<script>
	// Defaults
	var viewTitle = "Selected for you";

	var data = {
		
	};

	// Public functions
	module.exports = {
		name:"foryou",
		components:{
		},
		data : function(){
			return data;
		},
		computed: {
			hasImpressions : function(){
				return this.$store.state.iqnomy.impress.impressions.length != 0;
			},
			impressions : function(){
				return this.$store.state.iqnomy.impress.impressions;
			}
		},
		beforeMount : function(){
			this.$store.commit('updateView',{title: viewTitle});
		}
	};
</script>
<style lang="scss">
	
	@import '../assets/scss/general-variables';

	#foryou{
		min-height: 400px;

		.ic-impression-wrapper{
			margin:0px 10px 10px 10px;
			border: $ic-content-border;
		}
		
		.ic-impression-wrapper:first-child{
			margin: 10px;
		}
	}
</style>