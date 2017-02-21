/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */

var iqnomyService = function() {
	
	// Libraries
	var underscore = require("underscore");
	var jsCookie = require('js-cookie');

	// Defaults
	var DEFAULT_COOKIE_KEY_PROFILEID = "_iqprid";
	var DEFAULT_COOKIE_KEY_FOLLOWID = "_fid";
	var DEFAULT_URL_PARAM_ICOOKIE_IMPRESS_MARKER = "#icookie/selectedForYou";
	var DEFAULT_URL_PARAM_IMPRESS_CALLBACK_PREFIX = "_ic_jsonp_";
	
	var vue = null;
	var storeModule = null;
	 
	// Private variables


	// Private functions
	function _init(vueServices){
		
		vue = vueServices.vueInstance;
	
		_initStore();
		_refreshProfile();
		_refreshImpressions();
	}
	
	function _initStore(){
		storeModule = {
			state:{
				profile : {
					id:_getProfileId(),
					data:null,
					loaded:false,
				},
				impress : {
					raw : null,
					impressions: []
				}
			},
			mutations : {
		  		updateProfile : function($state,$payload){
		  			$state.profile.data = $payload;
		  			$state.profile.loaded = true;    
	  			},
	  			updateImpressions : function($state,$impressions){
	  				_processImpressions($state,$impressions);
	  			}
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
	
	function _getImpressionPath($uniqueJSONP){
		return vue.$services.settings.getImpressBasePath() +
			"/" + _generateGUID() +
			"?iqversion=3" +
			"&fid=" + _getFollowId() +
			"&tenant=" + _getTenantId() +
			"&prid=" + _getProfileId() +
			"&iqurl=" + encodeURIComponent(_getIQUrl()) + 
			"&jsonpTransport=" + DEFAULT_URL_PARAM_IMPRESS_CALLBACK_PREFIX + ($uniqueJSONP ? $uniqueJSONP : "callback")
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
		
		var jsonpUniqueId = Math.random().toString(36).substr(2);
		
		vue.$http.jsonp(_getImpressionPath(jsonpUniqueId),{
			jsonpCallback: DEFAULT_URL_PARAM_IMPRESS_CALLBACK_PREFIX + jsonpUniqueId
		}).then(function(response){
			var impressions = response.data && response.data.containerImpressions ? response.data.containerImpressions : [];
			vue.$store.commit("updateImpressions",impressions);
		});
	}
	
	function _processImpressions($state,$impressions){
		// Lets save the original state
		$state.impress.raw = $impressions ? $impressions : null;
		
		var impressions = [];
		
		underscore.each($impressions,function($impression){
			var container = $impression.container;
			underscore.each($impression.imprElements,function($impressionElement){
				impressions.push(_createImpression(container,$impressionElement));
			});
		});
		$state.impress.impressions = impressions;
	}
	
	function _createImpression($container,$impression){
		var impression = underscore.pick($impression, 'id','name','description','htmlTemplate','lqcid');
		impression.container = underscore.pick($container,"id","name","description");
		impression.hasContent =  function(){
			return typeof this.htmlTemplate == 'string' && !underscore.isEmpty(this.htmlTemplate.trim());
		}
		return impression;
	}

	function _deleteProfile(){
		
	}

	// Public functions
	return {
		// Vue services require a init function
		init: function(vueServices){
			_init(vueServices);
		},
		refreshProfile : _refreshProfile,
		refreshImpressions : _refreshImpressions,
		deleteProfile : _deleteProfile
	};
}();
module.exports = iqnomyService;
