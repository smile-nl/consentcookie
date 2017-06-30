/**
 * @author Steven Choo
 *
 * Service handling all consent
 */

var consentService = function() {

	// Libraries
	var jsCookie = require('js-cookie');

	// Private variables
	var vue = null;

	// Private functions
	function _init(vueServices){
		vue = vueServices.vueInstance
	}

	function _getConfig(){
		return vue.$store.state.application.config.consent;
	}

	function _isAccepted(){
		return jsCookie.get(_getConfig().cookie.name) === _getConfig().cookie.value;
	}

	// Public functions
	return {
		// Vue services require a init function
		init: function(vueServices){
			_init(vueServices);
		},
		isAccepted:function(){
			return _isAccepted();
		},
		acceptConsent:function(){
			jsCookie.set(_getConfig().cookie.name,_getConfig().cookie.value);
			vue.$services.view.close();
			vue.$services.view.enableMenu();
		},
		showConsent: function(){
			// Show consent after 300ms
			setTimeout(function () {
				vue.$router.push({path: "/consent"});
				vue.$services.view.openContent();
			},_getConfig().info.timeout);
		}
	};
}();
module.exports = consentService;
