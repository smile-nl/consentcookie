module.exports = function configRouter(router) {
	
	var mainService = require('services/mainService.js');
	
	function _getRedirect(){
		var hasAccepted = mainService.hasAccepted();
		
		if(hasAccepted){
			return "/dashboard";
		}else{
			return "/consent";
		}
	};
	
	router.map({
		'/dashboard' : {
			component : require('../views/dashboard.vue')
		},
		'/profile' : {
			component : require('../views/profile.vue')
		},
		'/tracking' : {
			component : require('../views/tracking.vue')
		},
		'/foryou' : {
			component : require('../views/foryou.vue')
		},
		'/settings' : {
			component : require('../views/settings.vue')
		},
		'/about' : {
			component : require('../views/about.vue')
		},
		'/contact' : {
			component : require('../views/contact.vue')
		},
		'/consent' : {
			component : require('../views/consent.vue')
		}
	});
	router.redirect({
		'/' : _getRedirect()
	});
};
