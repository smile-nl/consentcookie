<template>
	<div id="ic-tracking" class="ic-content">
		<div class="ic-info">
			Een overzicht van trackers op de pagina
		</div>
		<div v-if="!trackers || trackers.length == 0" class="no-content">
			<i class="fa fa-line-chart" aria-hidden="true"></i>
		</div>
		<div class="ic-trackers" v-if="trackers && trackers.length > 0">
			<div class="ic-tracker " v-for="tracker in trackers">
				<div class="ic-title">{{tracker.name}}</div>
				<div class="ic-box inline-fix" v-on:click="showDetail(tracker,$event)">
					<div class="ic-logo v-centered">
						<img :src="tracker.icon" />	
					</div>
					<ic-switch class="v-centered ic-toggle" v-model="tracker.test" :on-change="onToggle" :on-change-val="tracker"></ic-switch>
					<div class="ic-more inline-fix"><span class="v-centered">meer weten</span><i class="fa fa-angle-right v-centered"></i></div>
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
		computed : {
			
			trackers : function
			
		}
		methods : {
			showDetail : function($tracker,$event){
				// Ignore clicks on the switch
				if("ic-switch-core" == $event.srcElement.className || "ic-switch-input" == $event.srcElement.className){
					return false;
				}
				this.$router.push({ name: 'trackingDetail',params:{tracker:$tracker}});
			},
			onToggle : function($value,$data){
				this.$services.trackers.toggleTracker($data,$value)
			}
		},
		beforeMount : function(){
			this.$store.commit('updateView',{title: viewTitle});
		},
	};
	
</script>

<style lang="scss" scoped>
	
	@import '../assets/scss/general-variables';

	#ic-tracking{
		min-height: 400px;
		
		.ic-info{
			margin:20px 20px 10px 20px;
			text-align: center;
		}
		
		.ic-trackers{
			
			padding:5px 10px 20px;
			
			.ic-tracker{
				
				margin: 10px 0px 20px;
				
				.ic-title{
					margin: 10px 0px 5px 10px;
				}
				
				.ic-box{
					position:relative;
					border: $ic-content-border;
					cursor: pointer;
					
					&:hover{
						background:$ic-brand-color-faded;
						
						.ic-more{
							color: $ic-color-white;
						}
					}
					
					.ic-logo {
						margin: 10px;
						width: 40px;
						height: 40px;
						line-height: 40px;
						
						img{
							width: 100%;
							height: auto;
						}
					}
					
					.ic-toggle{
						margin:0px 20px;
					}
					
					.ic-more{
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