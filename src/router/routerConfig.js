module.exports = function configRouter(router) {
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
		}
	});
	router.redirect({
		'/' : '/dashboard'
	});
};
