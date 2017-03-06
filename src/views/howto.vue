<template>
	<div id="howto" class="ic-content">
		<div class="ic-info">
			<div class="title">Wil jij weten hoe Icookie werkt?</div>
			<div class="text">Bekijk het filmpje hieronder en kom er achter hoe Icookie je de controle terug geeft.</div>
		</div>
		<div class="howto-video">
			<video id="ic-video-player" src="http://work-steven.asknow.local/icookie/static/icookie.mp4" width="100%" preload></video>
			<div class="ic-video-toggle" v-on:click="toggleVideo" :class="toggleClass">
				<div class="icon-wrapper inline-fix">
					<i v-show="!isPlaying" class="fa fa-play-circle v-centered" aria-hidden="true"></i>
					<i v-show="isPlaying" class="fa fa-pause-circle v-centered" aria-hidden="true"></i>
				</div>
			</div>
		</div>		
	</div>
</template>
<script>
	// Dependencies

	// Defaults
	var viewTitle = "How it works";
	
	// View state
	var data = {
		toggleClass : "paused",
		isPlaying: false,
		isStarted: false,
		isEnded: false,
	};
	
	var videoPlayer = null;
	
	// Public functions
	module.exports = {
		name:"howto",
		components:{
		},
		data : function(){
			return data;
		},
		methods : {
			toggleVideo : function(event){
			  if (videoPlayer.paused == false) {
			  		videoPlayer.pause();
			  		console.log(this);
			  		this.toggleClass = "paused";
			  		this.isPlaying = false;
			  }else{
			  		videoPlayer.play();
			  		this.toggleClass = "playing";
			  		this.isPlaying = true;
			  		this.isStarted = this.isStarted || true;
			  }
			},
		},
		mounted: function () {
 	 		this.$nextTick(function () {
    			videoPlayer = this.$el.querySelector('#ic-video-player');
  			})
		},
		beforeMount : function(){
			this.$store.commit('updateView',{title: viewTitle});
		}
	};
</script>

<style lang="scss">
	
	@import '../assets/scss/general-variables';

	#howto{
		
		.no-content{
			
			text-align: center;
			padding-top: 120px;
			
			i{
				font-size: 100px;
				opacity: 0.1;
			}
			
		}
		
		.howto-video{
			position: relative;
			width: calc(100%-40px);
			margin: 20px;
			text-align: center;
			
			.ic-video-toggle{
				transition: all 0.2s;
			    background:none;
			    position:absolute;
			    left:0;
			    right:0;
			    top:0;
			    bottom:0;
			    
			    .icon-wrapper{
			    	width: 100%;
			    	height: 100%;
			    	
			    	i{
				    	display:none;
				    	font-size: 40px;
				    }
			    
			    }
			    
	          	&:hover{
		      		background: rgba(255,255,255,0.7);
		      		
		      		i {
		      			display:inline-block
		      		}
		      	}  
			}
		}
	}
</style>