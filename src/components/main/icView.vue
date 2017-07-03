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
	var DEFAULT_MIN_TOP_MARGIN = 30;
	var DEFAULT_MAX_HEIGHT = "inherit";
	var DEFAULT_HEADER_HEIGHT = 56;

	// Private variables
	var viewElement = null;

	// Data
	var data = {
		headerHeight: DEFAULT_HEADER_HEIGHT,
		viewContentCss:{
			height: "calc(100% - " + DEFAULT_HEADER_HEIGHT + "px)"
		},
		viewHolderCss : {
			height:DEFAULT_MAX_HEIGHT,
			maxHeight:DEFAULT_MAX_HEIGHT,
		},
	};

	// Private function
	function _calcHeight(){
		if(!viewElement){
			return false;
		}

		// calculate the max height
		var icViewBottom = viewElement.getBoundingClientRect().bottom;
		data.viewHolderCss.maxHeight = icViewBottom - DEFAULT_MIN_TOP_MARGIN + "px";

		// calculate the optimal height
		// heights needs to be set to enable scrolling
	}

	function _initBrowserEvents(){
		window.addEventListener("resize",_updatePositions);
	}

	function _updatePositions(event){
		_calcHeight();
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
			_initBrowserEvents();
		},
		mounted : function(){
			// Set reference to the DOM element
			viewElement = this.$el;
			// Calc the optimal sizes
			_calcHeight();
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