/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */

var iqnomyService = function() {

	var jsCookie = require('js-cookie');

	var vue = null;
	var storeModule = null;
	 
	// Private variables
	var iqProfileIdKey = '_iqprid';
	var iqProfileId = null;

	// Private functions
	function _init(vueServices){
		vue = vueServices.vueInstance;
	
		_initStore();
		_refreshProfile();
	}
	
	function _initStore(){
		storeModule = {
			state:{
				profileLoaded:false,
				profile:null,
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
		return jsCookie.get(iqProfileIdKey); 
	}
	
	function _getProfilePath(){
		return vue.$services.settings.getRESTBasePath() + "/liquidaccount/" + _getTenantId() + "/profile/cookie/" + _getProfileId();
	}
	
	function _refreshProfile() {
		if(typeof _getProfileId == 'undefined'){
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

	// Public functions
	return {
		// Vue services require a init function
		init: function(vueServices){
			_init(vueServices);
		},
		refreshProfile : function() {
			_refreshProfile();
		}
	};
}();
module.exports = iqnomyService;
