<template>
	<li class="ic-menu-item" v-on:click="goToPath(data.path)">
		<i class="fa fa-{{data.icon}}" aria-hidden="true"></i>
	</li>
</template>

<script>

	/* VUE */
	module.exports = {
		name:"icMenuItem",
		components: {
			
		},
		props:{
			data : {
				type : Object,
				default : function() {
					return {};
				},
				required : true
			}
		}
	};
</script>

<style lang="scss" scoped>

	@import "bourbon";

	.ic-menu-item {
    	cursor:pointer;
        display: inline-block;
        background-color: #FFFFFF;
        border: 1px solid black;
        float:left;
        height:60px;
        width:60px;
        line-height: 60px;
        text-align: center;
        
      	&:hover{
      		background: rgba(0,0,0,0.4);
      	} 
       
        ._ic_icon {
        	width:20px;
    		color:rgba(0,0,0,0.8);
    		font-size:16px;
        }
    }

</style>