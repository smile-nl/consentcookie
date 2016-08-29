/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */

var settingsService = function() {

	var vue = require('vue');

	// Private variables
	var baseRESTApiUrlProduction = "https://myliquidsuite-api.iqnomy.com/api";
	var baseRESTApiUrlTest = "https://myliquidsuite-api.test.iqnomy.local/api";

	// Private settings
	var testEnviroment = false;

	// Public functions
	return {
		getRESTBasePath : function(){
			return testEnviroment ? baseRESTApiUrlTest : baseRESTApiUrlProduction;
		},
		toggleTest : function() {
			testEnviroment = !testEnviroment;
		},
		isTest : function() {
			return testEnviroment;
		}
	};
}();
module.exports = settingsService;
