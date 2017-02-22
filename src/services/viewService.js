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
	
	function _initStore(){
		
	}

	// Public functions
	return {
		// Vue services require a init function
		init: _init,
		
	};
}();
