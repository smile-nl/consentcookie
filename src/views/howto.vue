<template>
	<div id="howto">
		<ic-content-box>
			<div class="icTitle">Met icookie heb je controle over jouw data</div>
			<div class="icText">Met icookie kun je zien welke data er op deze website verzameld wordt. In Jouw connecties is het mogelijk om per connectie meer informatie te lezen en om connecties uit of aan te zetten. Zo krijg je controle over jouw data.</div>
			<div class="icText howto-sub">Het is op dit moment nog niet mogelijk om jouw icookie voorkeuren mee te nemen naar andere websites.</div>
			<div class="icTitle howto-sub">icookie op uw website?</div>
			<div class="howto-video">
				<ic-video :video-url="videoUrl"></ic-video>
			</div>
			<div>Ga voor meer informatie naar <a href="https://www.icookie.io" target="_blank">www.icookie.io</a></div>
		</ic-content-box>
	</div>
</template>
<script>

	// Components
	var icVideo = require("components/main/icVideo.vue");

	// Defaults
	var DEFAULT_URL_ABOUT_VIDEO = "https://www.icookie.io/video/icookie_introductie_voor_website_eigenaren.mp4";
	var DEFAULT_VIEW_TITLE = "Over icookie";

	// View state
	var data = {
		videoUrl : DEFAULT_URL_ABOUT_VIDEO,
	};

	// Public functions
	module.exports = {
		name:"about",
		components:{
			icVideo:icVideo
		},
		data : function(){
			return data;
		},
		methods : {

		},
		beforeMount : function(){
			this.$store.commit('updateView',{title: DEFAULT_VIEW_TITLE});
		}
	};
</script>

<style lang="scss">
	
	@import '../assets/scss/general-variables';

	#howto{

		.icText.howto-sub{
			font-style: italic;
			font-size:12px;
			font-weight: 600;
			margin: 15px 0px;
		}

		.icTitle.howto-sub{
			font-size: 22px;
			font-weight: 400;
			margin-bottom: 5px;
		}

		.howto-video{
			width: 300px;
			vertical-align: middle;
			text-align: center;

			.icVideo video{
				border: 1px solid rgba(0,0,0,0.4);
			}
		}
	}
</style>