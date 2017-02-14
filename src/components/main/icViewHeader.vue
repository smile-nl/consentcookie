<template>
	<div class="ic-view-header clearfix">
		<div class="title">{{title}}</div>
		<div class="actions">
			<div v-if="loading" class="loader">
				<i class="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
			</div>
			<div class="close" v-on:click="close()">
				<i class="fa fa-close" aria-hidden="true"></i>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		name : "icViewHeader",
		props : {

		},
		computed : {
			title : function(){
				return this.$store.state.view.title;
			},
			loading : function(){
				return this.$store.state.view.loading;
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
			font-weight: bold;
		}
		
		.actions {
			float:right;
			
			> * {
				cursor: pointer;
			}
		}
		
		
	}
</style>