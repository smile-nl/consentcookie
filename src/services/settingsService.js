/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */
module.exports = function() {

	var vue = null;
	var storeModule = null;
	
	// Defaults options	
	var DEFAULT_REST_API_URL_PRODUCTION = "https://myliquidsuite-api.iqnomy.com/api";
	var DEFAULT_REST_API_URL_TEST = "https://myliquidsuite-api.test.iqnomy.local/api";

	var DEFAULT_IMPRESS_ULR_PRODUCTION = "https://liquifier.iqnomy.com/myliquidsuite-ws/async/impr";
	var DEFAULT_IMPRESS_ULR_TEST = "https://liquifier.test.iqnomy.com/myliquidsuite-ws/async/impr";

	var customConfig = require("customConfig");

	// Private functions
	function _init(vueServices){
		
		vue = vueServices.vueInstance;
		_initStore();
		// _initSettings();
	}
	
	function _initStore(){
		storeModule = {
			state:{
				dnt:false,
				test:false
			},
			mutations : {
		  		updateSettings : function($state,$payload){
	  			 	$state.test = ($payload && typeof $payload.test == 'boolean') ? $payload.test : $state.test;
	  			  	$state.dnt = ($payload && typeof $payload.dnt == 'boolean') ? $payload.dnt : $state.dnt; 
		  		},
	  		}
		};
		vue.$store.registerModule("settings",storeModule);
	}


	// Public functions
	return {
		// Vue services require a init function
		init: _init,
		getImpressBasePath : function(){
			return this.isTestEnv() ? DEFAULT_IMPRESS_ULR_TEST : DEFAULT_IMPRESS_ULR_PRODUCTION;
		},
		getRESTBasePath : function(){
			return this.isTestEnv() ? DEFAULT_REST_API_URL_TEST : DEFAULT_REST_API_URL_PRODUCTION;
		},
		setTestEnv : function(isTest){
			var isTestEnviroment = (typeof isTest == 'boolean' && isTest);
			vue.$store.commit("updateSettings",{test:isTestEnviroment});
		},
		isTestEnv : function() {
			return vue.$store.state.settings.test;
		},
		setDNT : function(DNT){
			var isDNT = (typeof DNT == 'boolean' && DNT);
			vue.$store.commit("updateSettings",{dnt:isDNT});
		},
		isDNT : function(){
			return vue.$store.state.settings.dnt;
		}
	};
}();
