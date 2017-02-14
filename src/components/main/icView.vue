<template>
	<div id="icView">
		<transition enter-active-class="icAnimated icSlideInRight" leave-active-class="icAnimated icSlideOutRight">
			<div  class="ic-view-content" v-show="isShown">
				<ic-view-header></ic-view-header>
				<router-view></router-view>
			</div>
		</transition>
	</div>
</template>

<script>
	
	var icViewHeader = require("components/main/icViewHeader.vue");
	
	/* VUE */
	module.exports = {
		name:"icView",
		components: {
			icViewHeader
		},
		data: function(){
			return {};
		},	
		computed : {
			isShown : function(){
				return this.$store.state.view.open && this.$store.state.view.contentActive;
			}
		},
	};
</script>

<style lang="scss" scoped>
	
	@import '../../assets/scss/general-variables';

	#icView{
		position: absolute;
		right: 0px;
		bottom: 110px;
		overflow: hidden;
		
		.ic-view-content{
			border-radius: 5px;
			background: #FFFFFF;
			box-shadow: $ic-drop-shadow;
			overflow: hidden;
			
			.ic-content{
				min-height: 400px;
			}
		}	
	}
</style>