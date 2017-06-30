<template>
	<div id="icContent">
		<consent-view></consent-view>
		<ic-view></ic-view>
	</div>
</template>

<script>

	var icView = require("components/main/icView.vue");
	var consentView = require("views/consent.vue")

	/* VUE */
	module.exports = {
		name:"icContent",
		components: {
			icView:icView,
			consentView:consentView
		},
		data: function(){
			return {};
		},
	};
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/general-variables';

	#icContent{
		position: relative;
	}
</style>