<template>
	<div id="tracking" class="ic-content">
		<div class="info">
			Een overzicht van trackers op de pagina
		</div>
		<div v-if="!trackers || trackers.length == 0" class="no-content">
			<i class="fa fa-line-chart" aria-hidden="true"></i>
		</div>
		<div class="trackers" v-if="trackers && trackers.length > 0">
			<div class="tracker " v-for="tracker in trackers">
				<div class="title">{{tracker.name}}</div>
				<div class="box inline-fix" v-on:click="showDetail(tracker)">
					<div class="logo v-centered">
						<img :src="tracker.icon" />	
					</div>
					<ic-switch class="v-centered toggle"></ic-switch>
					<div class="more inline-fix"><span class="v-centered">meer weten</span><i class="fa fa-angle-right v-centered"></i></div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	
	// Libraries
	var underscore = require("underscore");
	
	// Custom import
	var trackers = require('assets/json/trackers.json');
	
	// Defaults
	var viewTitle = "Voorkeuren";
	
	// View state
	var data = {
		trackers : underscore.clone(trackers.trackers)
	};
	
	// Public functions
	module.exports = {
		name:"tracking",
		components:{
		},
		data : function(){
			return data;
		},
		methods : {
			showDetail : function($tracker){
				this.$router.push({ name: 'trackingDetail',params:{tracker:$tracker}});
			}
		},
		beforeMount : function(){
			this.$store.commit('updateView',{title: viewTitle});
		}
	};
	
</script>

<style lang="scss" scoped>
	
	@import '../assets/scss/general-variables';

	#tracking{
		min-height: 400px;
		
		.info{
			margin:20px 20px 10px 20px;
			text-align: center;
		}
		
		.trackers{
			
			padding:5px 10px 20px;
			
			.tracker{
				
				margin: 10px 0px 20px;
				
				.title{
					margin: 10px 0px 5px 10px;
				}
				
				.box{
					position:relative;
					border: $ic-content-border;
					cursor: pointer;
					
					&:hover{
						background:$ic-brand-color-faded;
						
						.more{
							color: $ic-color-white;
						}
					}
					
					.logo {
						margin: 10px;
						width: 40px;
						height: 40px;
						line-height: 40px;
						
						img{
							width: 100%;
							height: auto;
						}
					}
					
					.toggle{
						margin:0px 20px;
					}
					
					.more{
					    position: absolute;
					    height:100%;
					    top: 0px;
					    right: 0px;
					    bottom: 0px;
					    margin: auto;
					    
					    .fa{
					    	
					    }
					    
					    i {
					    	margin:0px 10px;
					    	font-size: 30px;
						    line-height: 36px;
						    height: 40px;
					    }
					}
				}
			}
			
		}
	}
</style>