<template>
	<div id="ic-view-content">
		<div class="ic-view-scollholder" v-bind:style="scrollholderCSS">
			<div class="ic-view-scrollcontent" v-bind:style="scrollContentCSS">
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>

	// Defaults
	// http://www.textfixer.com/tutorials/browser-scrollbar-width.php
	var DEFAULT_SCROLLBAR_WIDTH = 17;

	// private variables
	var vueInstance = null;
	var scrollContent = null;
	var scrollContentObserver = null;

	var data =  {
		scrollholderCSS:{
			/* to hide the scrollbar we want a negative margin */
			marginRight: -DEFAULT_SCROLLBAR_WIDTH + "px",
		},
		scrollContentCSS :{
			/* to align content properly, undo the negagive margin*/
			marginRight: DEFAULT_SCROLLBAR_WIDTH + "px",
		}
	};

	// private functions
	function _initContentChangeListener(){
		// Get reference to the scrollcontent element
		scrollContent = vueInstance.$el.querySelector(".ic-view-scrollcontent");
		scrollContentObserver = new MutationObserver(function(mutations, observer) {
			var contentUpdate = {content:{size:scrollContent.scrollHeight}};
			vueInstance.$services.view.notifyViewChanged(contentUpdate);
		});
		scrollContentObserver.observe(scrollContent,{childList:true,subtree: true});
	}

	// Vue module
	module.exports = {
		name : "icViewContent",
		components:{
		},
		data : function(){
			return data;
		},
		methods: {

		},
		mounted: function(){
			// Create a reference to the vue instance for later use
			vueInstance = this;

			_initContentChangeListener();
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