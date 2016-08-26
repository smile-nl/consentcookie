<template>
	<div class="_ic_dashboard-stats">
		<div class="_ic_tracking_title">Your tracking status!</div>
		<div class="_ic_tracking_status">
			<i class="fa fa-star{{trackingStarCount >= 1 ? '' : '-o' }}" aria-hidden="true"></i>
			<i class="fa fa-star{{trackingStarCount >= 2 ? '' : '-o' }}" aria-hidden="true"></i>
			<i class="fa fa-star{{trackingStarCount >= 3 ? '' : '-o' }}" aria-hidden="true"></i>
			<i class="fa fa-star{{trackingStarCount >= 4 ? '' : '-o' }}" aria-hidden="true"></i>
			<i class="fa fa-star{{trackingStarCount == 5 ? '' : '-o' }}" aria-hidden="true"></i>
		</div>
	</div>
</template>

<script>

	var icookieService = require('services/icookieService.js');

	module.exports = {
		name : "dashboard-stats",
		components :{},
		data : function() {
			return {};
		},
		props : {},
		computed : {
			trackingCount : function(){
				return icookieService.getTrackingCount();
			},
			trackingStarCount : function(){
				
				var trackingCount = icookieService.getTrackingCount();
				
				if(trackingCount <= 1){
					return 1;
				}else if(trackingCount >= 2 && trackingCount < 3){
					return 2;
				}else if(trackingCount >= 3 && trackingCount < 8){
					return 3;
				}else if(trackingCount >= 9 && trackingCount < 15){
					return 4;
				}else{
					return 5;
				}
			}
		},
		watch : {},
		ready : function() {}
	}; 
</script>

<style lang="scss">
	._ic_dashboard-stats{
		
		margin:20px 10px;
		padding:20px 20px 20px 60px;
		
		._ic_tracking_title{
		    position:relative;
			margin-bottom:30px;		
			font-family: "Calibre Medium", "sans-serif";
			font-size: 24px;		
						
			&:before{
				content:'';
				display:block;
				position:absolute;
				background-image: url("../../assets/img/arrow_select.png");
				background-repeat: no-repeat;
				background-size:contain;
				width: 40px;
				height: 100px;
				top:10px;
				left:-50px;
			}
		}
		
		._ic_tracking_status { 
		
			i {
				font-size:24px;
				margin: 0px 2px;
			}
			
			i.fa-star:nth-child(1){
				color: #4CB848;
			}
			
			i.fa-star:nth-child(2){
				color: #B3D334;
			}
			
			i.fa-star:nth-child(3){
				color: #FFF200;
			}
			
			i.fa-star:nth-child(4){
				color: #F7941E;
			}
			
			i.fa-star:nth-child(5){
				color: #EB1C24;
			}
		}
		
	}
</style>