module.exports = function configServiceLoader(vue) {

	// Get depenencies
	var vueServices = require('plugins/vueServices.js');

	// Init service loader
	vue.use(vueServices);

	// Init the service
	// Make sure to define the services in order of dependecy
	// If a service depends on another, define it later in the order.
	var services = [{
		name: "main",
		service: require("services/mainService.js")
	}, {
		name: "view",
		service: require("services/viewService.js")
	}, {
		name: "consent",
		service: require("services/consentService.js")
	}, {
		name: "settings",
		service: require("services/settingsService.js")
	}, {
		name: "iqnomy",
		service: require("services/iqnomyService.js")
	}, {
		name: "trackers",
		service: require("services/trackersService.js")
	}
	];

	var vueServices = new vueServices({
			services: services
		}
	);

	return vueServices;
};