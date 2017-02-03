module.exports = function configRouter(vue) {
	
	// Get depenencies
	var vueRouter = require('vue-router');
	
	// Config the router
	var router = new vueRouter({
		routes: getRouterPaths()
			
	});
	
	// Add the router to vue
	vue.use(vueRouter);
	
	function getRouterPaths(){
		return [{
			path:'/welcome',
			component : require('views/welcome.vue')
		}];
		
		/*
		return [{
			path:'/welcome',
			component : require('views/welcome.vue')
		},{	
			path:'/profile',
			component : require('views/profile.vue')
		},{
			path:'/tracking',
			component : require('views/tracking.vue')
		},{
			path:'/foryou',
			component : require('views/foryou.vue')
		},{
			path:'/settings',
			component : require('views/settings.vue')
		},{
			path:'/howto',
			component : require('views/howto.vue')
		}];
		*/
	}
};
