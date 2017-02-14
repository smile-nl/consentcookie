/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */

var baseRestService = function() {
	
	var vue = require('vue');
	
	
	// function _get([o]){
		
	//}
	
	function getProfile(callback) {
		if (!validTenantId()) {
			callback(wrap('error',-1,false,'This website is not connected to the IQNOMY platform',null));
		} else if (!validVisitorId()) {
			callback(wrap('error',-1,false,'No IQNOMY visitor id available. Please refresh and try again.',null));
		}
		var callOptions = {};
		callOptions.params = {
			includeSessions:10,
			includeEvents:50
		};

		vue.http.get(getProfilePath(),callOptions).then(function(response) {
			callback(wrap(response.ok,response.status,response.statusText,response.data));
		}, function(response) {
			callback(wrap(response.ok,response.status,response.statusText,response.data));
		});
	}

	function wrap($ok,$statusCode,$message,$data) {
		return {
			ok : $ok,
			statusCode : $statusCode,
			message : $message,
			data : $data
		};
	}

	/* Check if connected to Humanswitch platform */
	function validVisitorId() {
		var id = getCookieValue(iqVisitorCookie);
		iqVisitorId = null != id ? id : iqVisitorId;
		
		var secureId = getCookieValue(iqProfileId);
		iqSecureVisitorId = null != secureId ? secureId : iqSecureVisitorId;
		return null != id || null != secureId;
	};

	/* Check if connected to Humanswitch platform */
	function validTenantId() {
		var id = ( typeof global._iqsTenant !== 'undefined' ? global._iqsTenant : null);
		iqTenantId = null != id ? id : iqTenantId;
		return null != id;
	};

	// Public functions
	return {
		// Vue services require a init function
		init: function(vueServices){
			_init(vueServices);
		},
		getTenantId : function(){
			validTenantId();
			return iqTenantId;
		},
		getVisitorId : function(){
			validVisitorId();
			return iqVisitorId;
		},
		getSecureVisitorId : function(){
			validVisitorId();
			return iqSecureVisitorId; 
		},
		refreshProfile : function() {
			return refreshProfile();
		}
	};
}();
module.exports = iqnomyService;
