<template>
	<div id="tracking-detail" class="ic-content">
		<div class="logo">
			<img :src="tracker.icon"></img>
		</div>
		<div class="description">{{tracker.description}}</div>
		<div class="properties">
			<div class="property">
				<i :class="'fa ' + (tracker.detail.bullets.optional ? 'fa-check ' : 'fa-close')"></i>
				<div class="text">This {{label}} is optional</div>
			</div>
			<div class="property">
				<i :class="'fa ' + (tracker.detail.bullets.profiling ? 'fa-check ' : 'fa-close')"></i>
				<div class="text">This {{label}} creates profiles</div>
			</div>
			<div class="property">
				<i :class="'fa ' + (tracker.detail.bullets.crosssite ? 'fa-check ' : 'fa-close')"></i>
				<div class="text">This {{label}} works crosssite</div>
			</div>
			<div class="property">
				<i :class="'fa ' + (tracker.detail.bullets.cookie ? 'fa-check ' : 'fa-close')"></i>
				<div class="text">This {{label}} uses analytic cookies</div>
			</div>
			<div class="property">
				<i :class="'fa ' + (tracker.detail.bullets.functional ? 'fa-check ' : 'fa-close')"></i>
				<div class="text">This {{label}} uses functional cookies</div>
			</div>
		</div>
		<div class="cta">
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
			console.log(this)
		}
	};
	
</script>

<style lang="scss" scoped>
	
	@import '../assets/scss/general-variables';

	#tracking-detail {
		
		padding:20px;
		
		.logo{
			width: 140px;
			padding:20px;
			margin:0px auto;
			text-align: center;
			
			img{
				width: 100%;
				height: auto;
			}
		}
		
		.description{
			margin: 20px 0px;
			font-style: italic;
		}
		
		.properties {
			margin:20px 10px;
			padding: 0px 20px;
			
			.property{
			
				margin: 10px 0px;
			
				> *{
					display: inline-block;
				}
				
				.fa{
					font-size: 20px;
					margin-right:10px;
				}
				
				.fa-check{
					color:green;
				}
				
				.fa-close{
					color:red;
				}
			}
			
		}
		
		.cta{
			width: 100%;
			padding: 20px;
			text-align: center;
			
			.ic-button{
				margin: 0px 5px;
			}
			
		}
	}
</style>