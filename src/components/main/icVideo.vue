<template>
	<div class="icVideo">
		<video :src="videoUrl" width="100%" height="100%" preload @ended="onEnded"></video>
		<div class="ic-video-toggle" :class="'inline-fix '+ stateClass" @click="toggleVideo" @mouseleave="resetHover"><i :class="'v-centered fa ' + videoIcon" aria-hidden="true">
		</i></div>
	</div>
</template>
<script>

	// DEFAULTS
	var DEFAULT_CLASS_HOVER_STATE = " hover";

	var videoPlayer = null;

	// Public functions
	module.exports = {
		name:"icVideo",
		props: {
			videoUrl:String
		},
		data : function(){
			return {
				isPlaying: false,
				isPaused: false,
				isEnded: true,
				hover: DEFAULT_CLASS_HOVER_STATE
			};
		},
		computed: {
			stateClass:function(){
				if(this.isEnded){
					return 'begin' + this.hover;
				}
				if(this.isPlaying){
					return 'playing' + this.hover;
				}
				if(this.isPaused){
					return 'paused' + this.hover;
				}
			},
			videoIcon : function(){
				return (this.isPlaying ? (!this.isEnded ? 'fa-pause-circle' : 'fa-play-circle') : 'fa-play-circle');
			}
		},
		methods : {
			toggleVideo : function(event){
				if (videoPlayer.paused == false) {
					videoPlayer.pause();
					this.isPaused = true;
					this.isPlaying = false;
					this.resetHover();
				}else{
					videoPlayer.play();
					this.isPlaying = true;
					this.isPaused = false;
					this.isEnded = false;

					// Remove the hover state temporarily
					var _this = this;
					setTimeout(function(){
						_this.$nextTick(function(){
							this.hover = "";
						});
					},1000);
				}
			},
			onEnded : function(){
				this.isEnded = true;
				this.isPaused = false;
				this.isPlaying = false;
			},
			resetHover:function(){
				if("" === this.hover){
					this.hover = DEFAULT_CLASS_HOVER_STATE;
				}
			}
		},
		mounted: function () {
			this.$nextTick(function () {
				videoPlayer = this.$el.querySelector('video');
			})
		},
	};
</script>

<style lang="scss">

	@import '../../assets/scss/general-variables';

	.icVideo{

		position: relative;
		width: 100%;
		height: 100%;

		.ic-video-toggle{
			transition: all 0.2s;
			background:none;
			position:absolute;
			width: 100%;
			height: 100%;
			left:0;
			right:0;
			top:0;
			bottom:0;

			&.inline-fix{
				font:0/0 a;
			}

			i{
				display: none !important;
				font-size: 40px;
			}

			&.hover:hover{
				background: rgba(255,255,255,0.7);
			}

			&.begin{

				i {
					display: inline-block !important;
				}
			}

			&.playing.hover:hover,&.paused.hover:hover{
				i {
					display: inline-block !important;
				}
			}
		}
	}
</style>