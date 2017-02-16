/**
 * @author Steven Choo
 * 
 * The main applications service. One to rule them all!
 */

var mainService = function(){	
		
	var vueInstance = null;
	var vueInstanceStore = null;

	// Private functions
	function _init(vueServices){
		vueInstance = vueServices.vueInstance;
		vueInstanceStore = vueInstance.$store;
	}	
		
	// Public functions
	return {
		// Vue services require a init function
		init: function(vueServices){
			_init(vueServices);
		},
		onResize : function(e){
			console.log(e)
		}
	};
	
}();
module.exports = mainService;