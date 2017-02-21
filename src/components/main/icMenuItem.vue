<template>
	<router-link :to="data.path" class="ic-menu-item" tag="div">
		<i :class="'fa fa-' + data.icon" aria-hidden="true"></i>
	</router-link>
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
		},
	};
</script>

<style lang="scss" scoped>

	.ic-menu-item,
	.no-content .ic-menu-item.active{
		
    	cursor:pointer;
        float:left;
        height:50px;
        width:50px;
        line-height: 50px;
        margin:0px 20px 0px 0px;        
        border: 2px solid #FFFFFF;
        border-radius:50px;
        text-align: center;
        transition: all 0.2s;
        background:none;
        
      	&:hover{
      		background: rgba(255,255,255,0.4);
      	} 
       
        i {
    		color:#FFFFFF;
    		font-size: 20px;
        }
    }
    
    .ic-menu-item {
		&.active {
        	background: #FFFFFF;
        	margin: -5px 15px -5px -5px;
			height: 60px;
			width: 60px;
			border-radius: 60px;
			line-height: 60px;	
        	
        	i {
        		color: rgba(252,109,109,255);
        	}
        }
    }

</style>