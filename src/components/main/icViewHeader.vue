<template>
	<div class="ic-view-header">
		<div class="title">{{title}}</div>
		<div v-if="loading" class="loader">
			<i class="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
		</div>
		<div class="close" v-on:click="goHome()">
			<i class="fa fa-close" aria-hidden="true"></i>
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
				
			}
		},
	};
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/colors';

	.ic-view-header{
		
		overflow:hidden;
		padding: 20px 10px;
		border-bottom: 2px solid rgba(0,0,0,0.3);
		line-height: 30px;
		height: auto;
		vertical-align: middle;
		
		.title{
			float:left;
			font-size: 30px;
		}
		
		.loader{
			position: absolute;
    		left: 5px;
    		top: 0px;
		}
		
		.close{
			color: #000000;
			border: 2px solid #000000;
			
			&:hover{
				cursor: pointer;
				background: $hs-color-red;
			}
		}
	}
</style>