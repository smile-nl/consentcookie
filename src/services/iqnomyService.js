/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */

var iqnomyService = function() {

	var vue = require('vue');

	// Private variables
	var baseRESTApiUrl = "https://myliquidsuite-api.iqnomy.com/api";

	var iqVisitorCookie = '_iqnomyvid';

	// var iqVisitorId = -1;
	// var iqTenantId = -1;
	// Test values
	var iqVisitorId = 2836822921;
	var iqTenantId = 1273096080;

	// Private functions
	function getProfilePath(){
		return "liquidaccount/" + iqTenantId + "/profile/cookie/" + iqVisitorId;
	}
	
	function getProfile(callback) {
		if (!validTenantId()) {
			callback(wrap('error',-1,false,'This website is not connected to the IQNOMY platform',null));
		} else if (!validVisitorId()) {
			callback(wrap('error',-1,false,'No IQNOMY visitor id available. Please refresh and try again.',null));
		}
		vue.http.get(getProfilePath()).then(function(response) {
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
		return null != id;
	};

	/* Check if connected to Humanswitch platform */
	function validTenantId() {
		var id = ( typeof global._iqsTenant !== 'undefined' ? global._iqsTenant : null);
		iqTenantId = null != id ? id : iqTenantId;
		return null != id;
	};

	function getCookieValue(c_name) {
		var c_value = document.cookie;
		var c_start = c_value.indexOf(" " + c_name + "=");
		if (c_start == -1) {
			c_start = c_value.indexOf(c_name + "=");
		}
		if (c_start == -1) {
			c_value = null;
		} else {
			c_start = c_value.indexOf("=", c_start) + 1;
			var c_end = c_value.indexOf(";", c_start);
			if (c_end == -1) {
				c_end = c_value.length;
			}
			c_value = unescape(c_value.substring(c_start, c_end));
		}
		return c_value;
	};

	// Public functions
	return {
		getStatus : function() {
			return "ok";
		},
		getProfile : function(callback) {
			return getProfile(callback);
		}
	};
}();
module.exports = iqnomyService;