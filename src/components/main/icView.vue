<template>
	<div id="icView" v-bind:style="viewCss">
		<transition enter-active-class="icAnimated icSlideInRight" leave-active-class="icAnimated icSlideOutRight">
			<div class="ic-view-content-wrapper" v-bind:style="contentWrapperCss" v-show="isShown">
				<div  class="ic-view-content" v-bind:style="contentCss">
					<ic-view-header :height="headerHeight"></ic-view-header>
					<router-view></router-view>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	
	var icViewHeader = require("components/main/icViewHeader.vue");
	
	// Defaults
	var DEFAULT_HEADER_HEIGHT = 56;
	var DEFAULT_SCROLLBAR_SIZE = 20; // Its actually 17px but 20 is just to be safe.
	var DEFAULT_MARGIN_MENU = 40;
	var DEFAULT_GAP_SIZE_TOP = 20;
	var DEFAULT_MAX_HEIGHT = "inherit";
	var DEFAULT_MIN_HEIGHT = 400;
	var DEFAULT_BOTTOM_POS = 90;
	
	// Data
	var componentData = {
		headerHeight: DEFAULT_HEADER_HEIGHT,
		viewCss : {
			maxHeight:DEFAULT_MAX_HEIGHT,
			bottom: _sizeInPx(DEFAULT_BOTTOM_POS),
		},
		contentWrapperCss : {
			marginRight: "-" + _sizeInPx(DEFAULT_SCROLLBAR_SIZE),
			maxHeight:DEFAULT_MAX_HEIGHT,
		},
		contentCss : {
			marginRight: _sizeInPx(DEFAULT_SCROLLBAR_SIZE)
		}
		
	};
	
	// Private function
	function _sizeInPx(size){
		return size ? size + "px" : null;
	}
	
	function _calcMaxHeight(vueComponent){
		var curWindowHeight = global.innerHeight;
		
		// Calc the maxHeight based on the bottom pos and top gap size
		var maxHeight = typeof curWindowHeight === 'number' 
			? _sizeInPx(curWindowHeight-DEFAULT_BOTTOM_POS-DEFAULT_GAP_SIZE_TOP - DEFAULT_MARGIN_MENU - DEFAULT_SCROLLBAR_SIZE)
			: DEFAULT_MAX_HEIGHT
		// Set the max height
		componentData.viewCss.maxHeight = maxHeight;
		// componentData.contentWrapperCss.maxHeight = maxHeight - ;
	}
	
	/* VUE */
	module.exports = {
		name:"icView",
		components: {
			icViewHeader:icViewHeader
		},
		data: function(){
			return componentData;
		},	
		computed : {
			isShown : function(){
				return this.$store.state.view.open && this.$store.state.view.contentActive;
			}
		},
		created : function(){
			_calcMaxHeight(this);
		}
	};
</script>

<style lang="scss" scoped>
	
	@import '../../assets/scss/general-variables';

	#icView{
		position: absolute;
		right: 0px;
		overflow:hidden;
		
		.ic-view-content-wrapper{
			overflow-y: scroll;
		}
		
		.ic-view-content{
			border-radius: 5px;
			box-shadow: $ic-drop-shadow;
			background: #FFFFFF;
			overflow:hidden;
		}
	}
</style>