/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */
module.exports = function() {

	var vue = null;
	
	// Defaults options	

	// Private functions
	function _init(vueServices){
		vue = vueServices.vueInstance;
	}

	function _show($showContent,$showMenu){
		vue.$store.commit("updateApplication",{contentOpen:$showContent,menuOpen:$showMenu});
	}

	function _enable($enableContent,$enableMenu){
		vue.$store.commit("updateApplication",{contentActive:$enableContent,menuActive:$enableMenu});
	}

	function _toggleMenu(){
		_show(null,!(vue.$store.state.application.state.menuOpen));

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
		toggleMenu: function(){_toggleMenu()}
	};
}();