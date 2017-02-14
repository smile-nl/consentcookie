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

	.ic-menu-item {
		
    	cursor:pointer;
        float:left;
        height:50px;
        width:50px;
        line-height: 50px;
        margin-right:20px;        
        border: 2px solid #FFFFFF;
        border-radius:50px;
        text-align: center;
        transition: all 0.2s;
        
      	&:hover{
      		background: rgba(255,255,255,0.4);
      	} 
       
        i {
    		color:#FFFFFF;
    		font-size: 20px;
        }
        
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
    
    .no-content .ic-menu-item.active,
    .ic-menu-item {
    	background: none;	
        	
    	i {
    		color: #FFFFFF;
    	}
    }

</style>