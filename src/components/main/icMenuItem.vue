<template>
	<router-link :to="data.path" class="ic-menu-item" tag="div" :title="data.info">
		<div class="fill"></div>
		<i :class="'fa fa-' + data.icon" aria-hidden="true" :style="data.iconSize ? 'font-size:' + data.iconSize + 'px;' : ''"></i>
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

	@import '../../assets/scss/general-variables';

	$menu-item-size:50;

	$menu-item-width:$menu-item-size + px;
	$menu-item-height:$menu-item-width;
	$menu-item-radius:$menu-item-width;

	.ic-menu-item,
	.no-content .ic-menu-item.active{

		position: relative;
    	cursor:pointer;
        float:left;
        height:$menu-item-height;
        width:$menu-item-width;
		border-radius:$menu-item-radius;
        margin:0px 20px 0px 0px;        
        border: 2px solid $ic-color-white;
        text-align: center;
		box-sizing: border-box;

      	&:hover{
      		background: $ic-overlay-white-transparant
      	}

		> * {
			position: absolute;
			top:-2px;
			left:-2px;
			line-height: $menu-item-height;
			vertical-align: middle;
			height:$menu-item-height;
			width:$menu-item-width;
			border-radius:$menu-item-radius;
		}

		.fill{
			opacity: 0;
			transition: all 0.2s ease;
			transform: scale(0);
			background: $ic-color-white;
		}

        i {
	        font-size: 24px;
    		color:$ic-color-white;
        }
    }
    
    .ic-menu-item {
		&.active {

			.fill{
				transform: scale(1);
				opacity: 1;
				background: $ic-color-white;
			}

        	i {
        		color: $ic-brand-color
        	}
        }
    }

</style>