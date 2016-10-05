<template>
	<div class="_ic_view-header">
		<div class="_ic_title">{{title}}</div>
		<div v-if="loading" class="_ic_loader">
			<i class="fa fa-spinner fa-pulse fa-fw" aria-hidden="true"></i>
		</div>
		<div class="_ic_action _ic_close" v-on:click="goHome()">
			<i class="fa fa-close" aria-hidden="true"></i>
		</div>
		<div v-if="typeof refresh !== 'undefined' && null != refresh" class="_ic_action _ic_refresh" v-on:click="doRefresh()">
			<i class="fa fa-refresh" aria-hidden="true"></i>
		</div>
	</div>
</template>

<script>
	module.exports = {
		name : "view-header",
		props : {
			refresh:Function,
			title : {
				type : String,
				required : true
			},
			loading: Boolean
		},
		methods: {
			doRefresh : function(){
				this.refresh();
			},
			goHome : function(path){
				this.$route.router.go('/');
			}
		},
	};
</script>

<style lang="scss">

	@import '../../assets/scss/colors';

	#icookie ._ic_view-header{
		
		overflow:hidden;
		padding: 20px 10px;
		border-bottom: 2px solid rgba(0,0,0,0.3);
		line-height: 30px;
		height: auto;
		vertical-align: middle;
		
		._ic_title{
			float:left;
			font-size: 30px;
		}
		
		._ic_loader{
			position: absolute;
    		left: 5px;
    		top: 0px;
		}
		
		._ic_action{
			-webkit-border-radius: 30px;
			-moz-border-radius: 30px;
			border-radius: 30px;
			width:30px;
			height:30px;
			float: right;
    		line-height: 30px;
    		text-align: center;
    		vertical-align: middle;
			border: 2px solid #000000;
			margin-left:10px;
			
			> i {
				vertical-align: baseline;
			}
		}
		
		._ic_close{
			color: #000000;
			border: 2px solid #000000;
			
			&:hover{
				cursor: pointer;
				background: $hs-color-red;
			}
		}
		
		
		._ic_refresh{
			color: $hs-color-blue;
			border: 2px solid $hs-color-blue;
			
			&:hover{
				cursor: pointer;
				background: $hs-color-hover-grey;
			}
		}
	}
</style>