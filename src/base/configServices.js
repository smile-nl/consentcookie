module.exports = function configServiceLoader(vue) {
	
	// Get depenencies
	var vueServices = require('plugins/vueServices.js');

	// Init service loader
	vue.use(vueServices);
	
	// Init the service
	// Make sure to define the services in order of dependecy
	// If a service depends on another, define it later in the order.
	var services = [{
			name:"settings",
			service: require("services/settingsService.js")
		},{
			name:"iqnomy",
			service: require("services/iqnomyService.js")
		},{
			name:"view",
			service: require("services/viewService.js")
		}
	]; 
	
	var vueServices = new vueServices({
			services: services
		}
	); 
	
	return vueServices;
};