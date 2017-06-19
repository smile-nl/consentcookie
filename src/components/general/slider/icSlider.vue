<template>
	<div class="ic-slider">
		<slot name="prev">

		</slot>
		<div class="ic-slider-frame">
			<ul class="ic-slider-slides">
				<slot></slot>
			</ul>
		</div>
		<slot name="next">

		</slot>
	</div>
</template>

<script>
	/**
	 *  Credits: https://github.com/vue-bulma/slider
	 *
	 *  ic-slider
	 */
	// Import libraries
	var icLory = require("lory.js");

	// Import compontents
	var icSliderPrev = require("components/general/slider/icSliderPrev.vue");
	var icSliderNext = require("components/general/slider/icSliderNext.vue");

	// Local vars
	var icSlider = null;

	// Default settings
	var defaultSettings = {
		classNameFrame: "ic-slider-frame",
		classNameSlideContainer: "ic-slider-slides",
		classNamePrevCtrl: "ic-slider-prev",
		classNameNextCtrl: "ic-slider-next",
		classNameActiveSlide: "ic-slider-active"
	};

	module.exports = {
		name: 'ic-slider',
		components:{
			icSliderPrev:icSliderPrev,
			icSliderNext:icSliderNext
		},
		props: {
			options: {
				type: Object,
				default: function () {
					return defaultSettings;
				}

			}
		},
		data: function () {
			return {};
		},
		computed: {},
		methods: {},
		mounted () {
			icSlider = icLory(this.$el, this.options);
		},
		beforeDestroy () {
			icSlider.destroy();
		}
	};
</script>

<style lang="scss">
	/**
	 * (optional) define here the style definitions which should be applied on the slider container
	 * e.g. width including further controls like arrows etc.
	 */
	.slider {
		.frame {
			/**
			 * (optional) wrapper width, specifies width of the slider frame.
			 */
			width: 100%;
			position: relative;
			font-size: 0;
			line-height: 0;
			overflow: hidden;
			white-space: nowrap;
		}
		.slides {
			width: 100%;
			display: inline-block;
		}
		li {
			position: relative;
			display: inline-block;
			/**
			 * (optional) if the content inside the slide element has a defined size.
			 */
			width: 100%;
			position: relative;
			display: inline-block;
			text-align: center;
			font-size: 15px;
			line-height: 30px;
		}
		.prev, .next {
			position: absolute;
			top: 50%;
			margin-top: -25px;
			display: block;
			cursor: pointer;
		}
		.next {
			right: 0;
		}
		.prev {
			left: 0;
		}
		.next svg, .prev svg {
			width: 25px;
		}
		&.js_rewind {
			.frame li {
				margin-right: 10px;
			}
		}
	}
</style>