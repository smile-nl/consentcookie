<template>
	<label :class="'ic-switch inline-fix clearfix' + switchOrientation">
		<input class="ic-switch-input" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue"/><span class="ic-switch-core"></span>
		<div class="ic-switch-label"><slot></slot></div>
	</label>
</template>

<script>
/**
 *  Credits: http://mint-ui.github.io
 *  
 *  ic-switch
 * 
 * @param {boolean} [value] -
 * @param {slot} - 
 *
 * @example
 * <ic-switch v-model="value"></ic-switch>
 */

module.exports = {
    name: 'ic-switch',
    props: {
        value: Boolean,
       	orientation : {
        	type: String,
      		default: 'left',
      		validator : function(value){
      			return [
		          'left',
		          'right'
		        ].indexOf(value) > -1;
  			}
		}
    },
    computed: {
        currentValue: {
            get : function(){
                return this.value;
            },
            set : function(val) {
                this.$emit('input', val);
            }
        },
        switchOrientation: function(){
        	return " " + this.orientation;
        }
        
    }
};
</script>

<style lang="scss">
 
  @import '../../assets/scss/general-variables';
  
  $switch-height: 32px;
  
  .ic-switch {
      display: block;
      position: relative;
  	  height: $switch-height;
      
      .ic-switch-label {
  			float:left;
        	display: inline-block;
        	height: $switch-height;
      		line-height: $switch-height;
        	
        	&:empty {
          		margin-left: 0;
        	}
      }
      
      .ic-switch-core {
  			float:left;
        	display: inline-block;
        	position: relative;
        	width:52px; 
        	height: $switch-height;
        	margin-right: 10px;
      		line-height: $switch-height;
        	border: 1px solid $ic-color-grey;
        	border-radius: 16px;
        	box-sizing: border-box;
        	background: $ic-color-grey;
        	
        	&::after, &::before {
          		content: " ";
          		position: absolute;
          		top:0;
          		left:0;
	          	transition:transform .3s;
	          	border-radius: 15px;
	          	cursor: pointer;
        	}
        	&::after {
          		height: 30px;
          		width:30px;
          		background-color: $ic-color-white;
          		box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
    		}
        	&::before {
          		width: 50px;
          		height: 30px;
          		background-color: #fdfdfd;
        	}
      }
      
      &.right{
      		.ic-switch-core {
      			float: right;
      			margin-left: 10px;
      			margin-right: 0px;
      		}
      }
      
      .ic-switch-input {
        	display: none;
        	
        	&:checked {
          		+ .ic-switch-core {
        		border-color: $ic-brand-color;
        		background-color: $ic-brand-color;
            
            &::before {
         	 	transform: scale(0);
            }
            &::after {
              	transform: translateX(20px);
            }
          }
        }
      }
  }
</style>