<template>
	<div id="consent">
		<ic-content-box>
			<div class="icTitle">{{consentTitle}}</div>
			<div class="icText">{{consentText}}</div>
			<div class="contentActions">
				<ic-button v-on:click="accept" size="large">Accepteren</ic-button>
				<a :href="consentLink" class="info-link">Meer informatie</a>
			</div>
		</ic-content-box>
	</div>
</template>
<script>

	// Dependencies

	// Defaults
	var viewTitle = "Welkom bij icookie";

	// Public functions
	module.exports = {
		name: "consentView",
		components: {},
		data: function () {
			return {};
		},
		computed:{
			consentTitle:function(){
				return this.$store.state.application.config.consent.info.title;
			},
			consentText:function(){
				return this.$store.state.application.config.consent.info.text;
			},
			consentLink:function(){
				return this.$store.state.application.config.consent.info.link;
			}
		},
		methods: {
			accept: function () {
				this.$services.consent.acceptConsent();
			}
		},
		ready: function () {

		},
		beforeMount: function () {
			this.$store.commit('updateView', {title: viewTitle});
		}
	};

</script>


<style lang="scss" scoped>

	@import '../assets/scss/general-variables';

	#consent{

		padding: 5px 5px;

		.contentActions{
			text-align: center;
			padding:20px 0px;

			.info-link{
				display: block;
				margin-top:15px;
				color:$ic-color-black;
				font-size: 12px;
				font-style: italic;
				text-decoration: underline;
			}
		}

	}
</style>