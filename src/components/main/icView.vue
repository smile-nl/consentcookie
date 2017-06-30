<template>
	<div id="icView">
		<div class="icViewWrapper">
			<transition enter-active-class="icAnimated icSlideInRight" leave-active-class="icAnimated icSlideOutRight">
				<div class="viewHolder" v-show="isShown" v-bind:style="viewHolderCss">
					<ic-view-header :height="headerHeight"></ic-view-header>
					<ic-view-content v-bind:style="viewContentCss">
						<router-view></router-view>
					</ic-view-content>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>

	// Libaries
	var _ = require("underscore");

	// Components
	var icViewHeader = require("components/main/icViewHeader.vue");
	var icViewContent = require("components/main/icViewContent.vue");

	// Defaults
	var DEFAULT_HEADER_HEIGHT = 56;
	var DEFAULT_SCROLLBAR_SIZE = 20; // Its actually 17px but 20 is just to be safe.
	var DEFAULT_MARGIN_MENU = 40;
	var DEFAULT_GAP_SIZE_TOP = 20;
	var DEFAULT_MAX_HEIGHT = "inherit";
	var DEFAULT_MIN_HEIGHT = 400;
	var DEFAULT_BOTTOM_POS = 90;

	// Data
	var data = {
		headerHeight: DEFAULT_HEADER_HEIGHT,
		viewHolderCss : {
			height:DEFAULT_MAX_HEIGHT,
			maxHeight:DEFAULT_MAX_HEIGHT,
		},
		viewContentCss:{
			height: "calc(100% - " + DEFAULT_HEADER_HEIGHT + "px)"
		}
	};

	// Private function
	function _sizeInPx(size){
		return size ? size + "px" : null;
	}

	function _calcMaxHeight(vueComponent){
		var curWindowHeight = global.innerHeight;

		// Calc the maxHeight based on the bottom pos and top gap size
		var maxHeight = _.isNumber(curWindowHeight)
			? _sizeInPx(curWindowHeight-DEFAULT_BOTTOM_POS-DEFAULT_GAP_SIZE_TOP - DEFAULT_MARGIN_MENU - DEFAULT_SCROLLBAR_SIZE)
			: DEFAULT_MAX_HEIGHT;
		// Set the max height
		data.viewHolderCss.height = maxHeight;
		data.viewHolderCss.maxHeight = maxHeight;
	}

	/* VUE */
	module.exports = {
		name:"icView",
		components: {
			icViewHeader:icViewHeader,
			icViewContent:icViewContent
		},
		data: function(){
			return data;
		},
		computed : {
			isShown : function(){
				return this.$store.state.application.state.contentOpen;
			}
		},
		created : function(){
			_calcMaxHeight(this);
		}
	};
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/general-variables';

	/* Take in account the overflow hidden on the right side */
	$menu-drop-shadow: -5px 5px 10px 0px rgba(136, 136, 136, 0.15);

	#icView{
		position: relative;

		.icViewWrapper{
			position: absolute;
			right:0px;
			bottom: 0px;
			padding: 0px 0px 15px 15px;
			overflow: hidden;

			.viewHolder{
				border-radius: $ic-box-border-radius;
				box-shadow: $menu-drop-shadow;
				background: $ic-color-white;
				overflow: hidden;
			}
		}
	}
</style>