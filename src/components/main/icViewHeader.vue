<template>
	<div class="ic-view-header clearfix" v-bind:style="componentCss">
		<div class="wrapper">
			<div class="title">{{title}}</div>
			<div class="actions">
				<div v-if="loading" class="loader">
					<i class="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
				</div>
				<div class="action close" v-on:click="close()">
					<i class="fa fa-close" aria-hidden="true"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<script>

	// Defaults
	var DEFAULT_HEADER_HEIGHT = "60"; 
	
	// Vue module
	module.exports = {
		name : "icViewHeader",
		props : {
			height:{
  				type: Number,
  				default: DEFAULT_HEADER_HEIGHT
			}
		},
		computed : {
			title : function(){
				return this.$store.state.view.title;
			},
			loading : function(){
				return this.$store.state.view.loading;
			},
			componentCss : function(){
				return {
					height: this.height + "px",
				};
			}
		},
		methods: {
			close : function(){
				this.$store.commit("updateView",{contentActive:false});
				this.$router.reset();
			}
		},
	};
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/general-variables';

	.ic-view-header{
		
		min-width: 350px;
		padding:20px;
		background: $ic-brand-color;
		color:#FFFFFF;
		border-radius: 5px 5px 0px 0px;
		overflow: hidden;
		
		.title {
			float:left;
			font-size: 16px;
			letter-spacing: 1px;
			font-weight: bold;
		}
		
		.actions {
			float:right;
			
			> * {
				cursor: pointer;
			}
			
			.action{
				
			}
		}		
	}
</style>