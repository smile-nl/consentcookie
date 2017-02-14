<template>
	<div :class="'ic-content-box' + clazz">
		<slot></slot>
	</div>
</template>

<script>
module.exports = {
    name: 'ic-content-box',
    props: {
        styleClass: String
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

<style lang="scss">
 
  @import '../../assets/scss/general-variables';
  
  .ic-content-box{
  		margin: 5px;
  		border: $ic-content-border;
  	
  	> * {
  		padding: $ic-content-padding;
  		border-bottom: $ic-content-border;
  	}
  	
  	> *:last-child{
  		border:none;
  	}
  }
</style>