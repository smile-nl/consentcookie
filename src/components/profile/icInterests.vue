<template>
	<div class="ic-interests">
		<div v-if="interests" v-for="interest in interests" class="interest">
			<div class="info"></div>
			<div class="prop">
				<div class="name">{{interest.dimension.name}}</div>
				<div class="value">{{interest.label}}</div>
			</div>
		</div>
	</div>
</template>

<script>

	// Module data
	var moduleData = {
		
	};
	
	// Vue module
	module.exports = {
		name : "ic-interests",
		components :{},
	    props: {
	        interests: Array,
	    },
		data : function() {
			return moduleData;
		},
		computed : {
			
		},
		ready : function() {
			
		}
	}; 
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/general-variables';

	.ic-interests{
		
		.interest{
			margin: 10px 0px;
			
			
			.prop{
				vertical-align: middle;
			 	display: inline-block;
    			max-width: 300px;
    			font-size: 14px;
    			
    			.name,
    			.value{
					white-space: nowrap;
    				text-overflow: ellipsis;
					overflow:hidden;
    			}
    			
    			.name{
					text-transform: uppercase;
					color: #9f9f9f;
				}

				.value{
					color: #000000;
				}   
			}
		}
		
		.dimension{
			float:left;
			width:33.33333%;
			text-align: center;
			
			.title{
				text-transform: uppercase;
				font-weight: 600;
				font-size: 14px;	
			}
			
			.description{
				width: 90%;
				border-radius: 90%;				
			}
		}
	}
</style>