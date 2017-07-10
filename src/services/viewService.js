/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */
module.exports = function() {

	// Defaults
	var DEFAULT_EVENT_WINDOW_RESIZE = "windowResize";
	var DEFAULT_EVENT_CONTENT_OPENED = "contentOpened";

	var DEFAULT_MAX_PHONE_WIDTH_PORTRAIT = 480;
	var DEFAULT_MAX_PHONE_HEIGHT_LANDSCAPE = 480;

	// Private variables
	var vue = null;

	// Private functions
	function _init(vueServices){
		vue = vueServices.vueInstance;

		_initRouteListener();
		_initResizeListener();
		_initInitialViewState();
	}

	function _initInitialViewState(){
		_updateViewState();
	}

	/**
	 * Custom view behaviour on changing routes
	 *
	 * * Open content when a valid route is chosen
	 *
	 * @private
	 */
	function _initRouteListener(){
		vue.$router.afterEach(function (to, from) {

			var isValidTo = (to && to.matched && to.matched.length > 0);

			// No valid route
			if(!isValidTo){
				return false;
			}

			// Open the content if it`s not opened yet, consent is accepted and its a valid route
			if(isValidTo && vue.$services.consent.isAccepted() && !(vue.$store.state.application.state.contentOpen)){
				vue.$services.view.openContent();
			}
		})
	}

	function _initResizeListener(){
		window.addEventListener("resize",function(event){

			var windowDimension = {
				innerHeight: window.innerHeight,
				innerWidth: window.innerWidth,
				outerHeight: window.outerHeight,
				outerWidth: window.outerWidth
			};

			_updateViewState();

			// Notify of change
			vue.$emit(DEFAULT_EVENT_WINDOW_RESIZE,windowDimension);
		});
	}

	function _updateViewState(){

		// Update the view state
		var width = window.outerWidth;
		var height = window.outerHeight;

		var isPhone = _isPhoneMode(width,height);
		var isPortrait = _isPortraitMode(width,height);

		var stateUpdate = null;

		// Optimise the updating of the state, to only update when its changed
		if(vue.$store.state.view.isPhone !== isPhone){
			stateUpdate = stateUpdate || {};
			stateUpdate['isPhone'] = isPhone;
		}
		if(vue.$store.state.view.isPortrait !== isPortrait){
			stateUpdate = stateUpdate || {};
			stateUpdate['isPortrait'] = isPortrait;
		}
		if(stateUpdate){
			_notifyViewChanged(stateUpdate);
		}
	}

	function _isPhoneMode($width,$height){
		if(typeof $width !== 'number' || typeof $height !== 'number' ){
			return false;
		}

		var isPortrait = _isPortraitMode($width,$height);
		return isPortrait ? ($width <= DEFAULT_MAX_PHONE_WIDTH_PORTRAIT) : ($height <= DEFAULT_MAX_PHONE_HEIGHT_LANDSCAPE);
	}

	function _isPortraitMode($width,$height){
		if(typeof $width !== 'number' || typeof $height !== 'number' ){
			return false;
		}
		return $height > $width;
	}

	function _notifyViewChanged($update){
		vue.$store.commit("updateView",$update);
	}

	function _onOpen($fn){
		vue.$on(DEFAULT_EVENT_CONTENT_OPENED,$fn);
	}

	function _onResize($fn){
		vue.$on(DEFAULT_EVENT_WINDOW_RESIZE,$fn);
	}

	function _show($showContent,$showMenu){
		vue.$store.commit("updateApplication",{contentOpen:$showContent,menuOpen:$showMenu});

		if(true === $showContent){
			vue.$emit(DEFAULT_EVENT_CONTENT_OPENED);
		}
	}

	function _enable($enableContent,$enableMenu){
		vue.$store.commit("updateApplication",{contentActive:$enableContent,menuActive:$enableMenu});
	}

	function _toggleMenu(){
		var isOpen = (true === vue.$store.state.application.state.menuOpen);
		var isContentActive = (true === vue.$store.state.application.state.contentActive);

		// Close the content also when we have open content and we are closing the menu
		// Open the content when a content was already active
		_show((isOpen ? false : (isContentActive ? true : null)),!(vue.$store.state.application.state.menuOpen));

		if(vue.$store.state.application.state.menuOpen){
			// Go to last opened view or the welcome view
			// var lastPath = this.$store.state.application.state.lastPath;
			// return this.$router.push({path: lastPath});
		}
	}

	// Public functions
	return {
		// Vue services require a init function
		init: _init,
		open: function(){_show(true,true)},
		openMenu: function(){_show(null,true)},
		openContent: function(){_show(true,null)},
		close: function(){_show(false,false)},
		enable : function(){_enable(true,true)},
		enableMenu : function(){_enable(null,true)},
		enableContent : function(){_enable(true,null)},
		disable: function(){_enable(false,false)},
		disableMenu: function(){_enable(null,false)},
		toggleMenu: function(){_toggleMenu()},
		onResize : _onResize,
		onOpen: _onOpen,
		notifyViewChanged : _notifyViewChanged
	};
}();