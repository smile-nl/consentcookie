/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */

var iqnomyService = function() {
	
	// Libraries
	var jsCookie = require('js-cookie');

	// Defaults
	var DEFAULT_COOKIE_KEY_PROFILEID = "_iqprid";
	var DEFAULT_COOKIE_KEY_FOLLOWID = "_fid";
	var DEFAULT_URL_PARAM_ICOOKIE_IMPRESS_MARKER = "#icookie/selectedForYou";
	
	var vue = null;
	var storeModule = null;
	 
	// Private variables


	// Private functions
	function _init(vueServices){
		vue = vueServices.vueInstance;
	
		_initStore();
		_refreshProfile();
		//_refreshImpressions();
	}
	
	function _initStore(){
		storeModule = {
			state:{
				profileId:_getProfileId(),
				profile:null,
				profileLoaded:false,
			},
			mutations : {
		  		updateProfile : function($state,$payload){
		  			$state.profile = $payload;
		  			$state.profileLoaded = true;    
	  			},
	  		}
		};
		vue.$store.registerModule("iqnomy",storeModule);
	}
	
	function _getTenantId(){
		return (typeof global._iqsTenant === 'number' ? global._iqsTenant : -1);
	}
	
	function _getProfileId(){		
		return jsCookie.get(DEFAULT_COOKIE_KEY_PROFILEID); 
	}
	
	function _getFollowId(){
		var followId = jsCookie.get(DEFAULT_COOKIE_KEY_FOLLOWID);
		return (typeof followId == "number") ? followId : 1;
	}
	
	// Create the iqUrl based on the current page without params and add a suffix to make it easy to configure the container. 
	function _getIQUrl(){
		return window.location.toString().split('?')[0] + DEFAULT_URL_PARAM_ICOOKIE_IMPRESS_MARKER;
	}
	
	function _generateGUID() {
		var S4 = function() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16)
					.substring(1);
		};
		return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
	};
	
	function _getProfilePath(){
		return vue.$services.settings.getRESTBasePath() + "/liquidaccount/" + _getTenantId() + "/profile/cookie/" + _getProfileId();
	}
	
	function _getImpressionPath(){
		return vue.$services.settings.getImpressBasePath() +
			"/" + _generateGUID() +
			"?iqversion=3" +
			"&fid=" + _getFollowId() +
			"&tenant=" + _getTenantId() +
			"&prid=" + _getProfileId() +
			"&iqurl=" + encodeURIComponent(_getIQUrl());
	}
	
	function _refreshProfile() {
		if(typeof _getProfileId() == 'undefined'){
			vue.$store.commit("updateProfile",null);
			return;
		}
		if(_getTenantId() == -1){
			vue.$store.commit("updateProfile",null);
			return;
		}
		var callOptions = {
			params : {
				includeSessions:10,
				includeEvents:50
			}
		};
		
		vue.$http.get(_getProfilePath(),callOptions).then(function(response) {
			vue.$store.commit("updateProfile",response.data);
		});
	}

	function _refreshImpressions(){
		if(typeof _getProfileId() == 'undefined'){
			vue.$store.commit("updateImpressions",null);
			return;
		}
		if(_getTenantId() == -1){
			vue.$store.commit("updateImpressions",null);
			return;
		}
		var callOptions = {
			params : {
				includeSessions:10,
				includeEvents:50
			}
		};
		
		vue.$http.get(_getImpressionPath(),callOptions).then(function(response) {
			console.log("dgsd");
			console.log(response);
			vue.$store.commit("updateImpressions",response.data);
		});
	}

	// Public functions
	return {
		// Vue services require a init function
		init: function(vueServices){
			_init(vueServices);
		},
		refreshProfile : function() {
			_refreshProfile();
		},
		refreshImpressions : function(){
			_refreshImpressions();
		}
	};
}();
module.exports = iqnomyService;
