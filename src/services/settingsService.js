/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */
module.exports = function() {

	var vueInstance = null;
	var store = null;
	
	// Defaults options
	var envs = ["production","test"];

	// Private variables
	var baseRESTApiUrlProduction = "https://myliquidsuite-api.iqnomy.com/api";
	var baseRESTApiUrlTest = "https://myliquidsuite-api.test.iqnomy.local/api";

	var baseImpressUrlProduction = "https://liquifier.iqnomy.com/myliquidsuite-ws/async/impr";
	var baseImpressUrlTest = "https://liquifier.test.iqnomy.com/myliquidsuite-ws/async/impr";

	// Public functions
	return {
		// Vue services require a init function
		init: function(vueServices){
			vueInstance = vueServices.vueInstance;
			store = vueServices.vueInstance.$store;
		},
		getImpressBasePath : function(){
			return this.isTestEnv() ? baseImpressUrlTest : baseImpressUrlProduction;
		},
		getRESTBasePath : function(){
			return this.isTestEnv() ? baseRESTApiUrlTest : baseRESTApiUrlProduction;
		},
		toggleTestEnv : function(){
			
		},
		isTestEnv : function() {
			
		},
		toggleDNT : function(){
			var newVal = !store.state.settings.dnt;
			store.commit("updateSettings",{dnt:newVal});
		},
		isDNT : function(){
			return store.state.settings.dnt;
		}
	};
}();
