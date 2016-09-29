/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */

var settingsService = function() {

	// Private variables
	var baseRESTApiUrlProduction = "https://myliquidsuite-api.iqnomy.com/api";
	var baseRESTApiUrlTest = "https://myliquidsuite-api.test.iqnomy.local/api";

	var baseImpressUrlProduction = "https://liquifier.iqnomy.com/myliquidsuite-ws/async/impr";
	var baseImpressUrlTest = "https://liquifier.test.iqnomy.com/myliquidsuite-ws/async/impr";

	// Private settings
	var testEnviroment = false;

	// Public functions
	return {
		getImpressBasePath : function(){
			return testEnviroment ? baseImpressUrlTest : baseImpressUrlProduction;
		},
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
