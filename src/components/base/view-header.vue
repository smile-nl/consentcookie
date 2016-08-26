<template>
	<div class="_ic_view-header">
		<div class="_ic_title">{{title}}</div>
		<div class="_ic_close">
			<i class="fa fa-close" aria-hidden="true"></i>
		</div>
	</div>
</template>

<script>
	module.exports = {
		name : "view-header",
		components : {},
		props : {
			title : {
				type : String,
				required : true
			}
		},
		data : function() {
			return {
				
			};
		}
	}; 
</script>

<style lang="scss">

	._ic_view-header{
		
		overflow:hidden;
		padding: 20px 10px;
		border-bottom: 2px solid rgba(0,0,0,0.3);
		line-height: 30px;
		vertical-align: middle;
		
		._ic_title{
			float:left;
			font-size: 30px;
		}
		
		._ic_close{
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
			
			&:hover{
				cursor: pointer;
				background:
			}
		}
	}
</style>