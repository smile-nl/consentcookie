<template>
	<div :class="'ic-content-box' + clazz">
		<div v-if="title" class="title">{{title}}</div>
		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
module.exports = {
    name: 'ic-content-box',
    props: {
        styleClass: String,
        title: String
    },
    data : function(){
    	return {};
    },
    computed : {
    	clazz : function(){
    		return (typeof this.styleClass !== 'undefined' && this.styleClass) ? " " + this.styleClass : "";
    	}
    }
};
</script>

<style lang="scss" scoped>
 
  @import '../../assets/scss/general-variables';
  
  .ic-content-box{
  		margin: 5px;
  		
  		.title{
  			margin: 20px 10px 10px 10px;
    		font-weight: 600;
  		}
  		
  		.content{
  			border: $ic-content-border;
  		
	  		> * {
	  			padding: $ic-content-padding;
	  			border-bottom: $ic-content-border;
	  		}
	  	
	  		> *:last-child{
	  			border:none;
	  		}
	  		
		}
  }
</style>