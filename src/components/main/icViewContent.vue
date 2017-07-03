<template>
	<div id="ic-view-content">
		<div class="ic-view-scollholder" v-bind:style="scrollholderCSS">
			<div class="ic-view-scrollcontent">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>

	// Defaults
	// http://www.textfixer.com/tutorials/browser-scrollbar-width.php
	var DEFAULT_SCROLLBAR_WIDTH = 17;

	// Private variables
	var contentElement = null;

	// Vue module
	module.exports = {
		name : "icViewContent",
		data : function(){
			return {
				scrollholderCSS:{
					/* to hide the scrollbar we want a negative margin */
					marginRight: -DEFAULT_SCROLLBAR_WIDTH + "px",
				}
			};
		},
		mounted : function(){
			console.log("mounted");

			contentElement = this.$el;
			// Add resize listener
			contentElement.addEventListener("resize",function(){
				debugger;
				this.updateHeight();
			});
		},
		methods: {
			updateHeight : function(){
				var self = this;
				debugger;
			}
		}


	};
</script>

<style lang="scss" scoped>

	@import '../../assets/scss/general-variables';

	#ic-view-content{

		border: $ic-box-border;
		border-radius: 0px 0px $ic-box-border-radius $ic-box-border-radius;

		.ic-view-scollholder {

			height: 100%;
			margin-bottom: 5px;
			overflow-x: auto;
			overflow-y: scroll;

			.ic-view-scrollcontent {
				overflow: hidden;
			}
		}
	}
</style>