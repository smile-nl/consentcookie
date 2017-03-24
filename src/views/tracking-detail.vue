<template>
	<div id="ic-tracking-detail" class="ic-content">
		<div class="ic-logo">
			<img :src="tracker.icon"></img>
		</div>
		<div class="ic-description">{{tracker.description}}</div>
		<div class="ic-properties">
			<div class="ic-property">
				<i :class="'fa ' + (tracker.detail.bullets.optional ? 'fa-ok ' : 'fa-cancel')"></i>
				<div class="text">This {{label}} is optional</div>
			</div>
			<div class="ic-property">
				<i :class="'fa ' + (tracker.detail.bullets.profiling ? 'fa-ok ' : 'fa-cancel')"></i>
				<div class="text">This {{label}} creates profiles</div>
			</div>
			<div class="ic-property">
				<i :class="'fa ' + (tracker.detail.bullets.crosssite ? 'fa-ok ' : 'fa-cancel')"></i>
				<div class="text">This {{label}} works crosssite</div>
			</div>
			<div class="ic-property">
				<i :class="'fa ' + (tracker.detail.bullets.cookie ? 'fa-ok ' : 'fa-cancel')"></i>
				<div class="text">This {{label}} uses analytic cookies</div>
			</div>
			<div class="ic-property">
				<i :class="'fa ' + (tracker.detail.bullets.functional ? 'fa-ok ' : 'fa-cancel')"></i>
				<div class="text">This {{label}} uses functional cookies</div>
			</div>
		</div>
		<div class="ic-cta">
			<ic-button v-on:click="goToInfo">More info</ic-button>
			<ic-button v-on:click="goToWebsite">Website</ic-button>
		</div>
		
	</div>
</template>
<script>
	
	// Libraries
	var underscore = require("underscore");
	
	// Defaults
	var viewTitle = "Who is tracking you?";
	
	// View state
	var data = {
		
	};
	
	// Public functions
	module.exports = {
		name:"tracking",
		components:{
		},
		props: {
			tracker: Object,
			hello:String
		},
		computed: {
			label : function(){
				return this.tracker.type; 
			}
		},
		data : function(){
			return {
					
			};
		},
		methods : {
			goToInfo :function(){
				console.log(this.tracker.detail);
				global.open(this.tracker.detail.infolink,'mywindow').focus()
			},
			goToWebsite : function(){
				console.log(this.tracker.detail);
				global.open(this.tracker.detail.websitelink,'mywindow').focus()
			}
		},
		beforeMount : function(){
			this.$store.commit('updateView',{title: viewTitle});
		}
	};
	
</script>

<style lang="scss" scoped>
	
	@import '../assets/scss/general-variables';

	#ic-tracking-detail {
		
		padding:20px;
		
		.ic-logo{
			width: 140px;
			padding:20px;
			margin:0px auto;
			text-align: center;
			
			img{
				width: 100%;
				height: auto;
			}
		}
		
		.ic-description{
			margin: 20px 0px;
			font-style: italic;
		}
		
		.ic-properties {
			margin:20px 10px;
			padding: 0px 10px;
			
			.ic-property{
			
				margin: 10px 0px;
			
				> *{
					display: inline-block;
				}
				
				.fa{
					font-size: 20px;
					margin-right:5px;
				}
				
				.fa-ok{
					color:#4CAF50;
				}
				
				.fa-cancel{
					color:#EF5350;
				}
			}
			
		}
		
		.ic-cta{
			width: 100%;
			padding: 20px;
			text-align: center;
			
			.ic-button{
				margin: 0px 5px;
			}
			
		}
	}
</style>