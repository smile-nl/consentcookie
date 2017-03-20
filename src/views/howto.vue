<template>
	<div id="howto" class="ic-content">
		<div class="ic-info">
			<div class="title">Met icookie heb je controle over jouw data.</div>
			<div class="text">Met icookie laten we zien welke data we verzamelen, leggen we uit waarom we deze data nodig hebben en krijg je de mogelijkheid om de datastromen aan of uit te zetten. Zo weet je precies waar je aan toe bent en dat is wel zo eerlijk, want het is jouw data.</div>
			<div class="text">Door ons toestemming te geven om jouw data te gebruiken, kunnen we je <router-link to="foryou">persoonlijke aanbiedingen</router-link> doen die bij jouw interesses passen. Daarnaast verbeteren we onze website, passen we ons assortiment aan en laten we relevante reclame zien.</div>
			<div class="text">Bekijk de functie per datastroom door in het <router-link to="tracking">‘Voorkeuren’ scherm</router-link> op ‘meer weten’ te klikken.</div>

			<div class="title">icookie op uw website?</div>
			<div class="text">HIER KOMT HET FINAL FILMPJE</div>
			<div class="text"> Ga naar <a href="www.icookie.io">www.icookie.io</a> voor meer informatie </div>

		</div>
	</div>
</template>
<script>
	// Dependencies

	// Defaults
	var viewTitle = "Hoe icookie werkt";
	
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