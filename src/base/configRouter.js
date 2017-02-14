module.exports = function configRouter(vue) {
	
	// Get depenencies
	var vueRouter = require('vue-router');

	// Default
	var DEFAULT_PATH_BASE = "/";
	var DEFAULT_PATH_WELCOME = "/welcome";
	var DEFAULT_PATH_FORYOU = "/foryou";

	var DEFAULT_RESET_PATH = {matched:[]};

	// Add the router to vue
	vue.use(vueRouter);

	// Init the router
	var routerInstance = new vueRouter({
		mode: "abstract",
		base: "/",
		linkActiveClass: "active",
		routes: getRouterPaths()	
	});
	
	// Custom functions
	routerInstance.reset = function(){
		this.history.current = DEFAULT_RESET_PATH;
	}
		
	// Config the router
	routerInstance.beforeEach(function(to, from, next){
		
		// Already on the welcome screen so no need to check if we need to redirect
		if(DEFAULT_PATH_WELCOME == to.path ){
			return next();
		}
		// Show welcome for first time visit
		if(!routerInstance.app.$store.state.application.shownWelcome){
  			return next(DEFAULT_PATH_WELCOME);
  		}
  		return next();
	});
	routerInstance.beforeEach(function(to, from, next){
		
		// Fallback for a route that does not exist
		if(to.matched.length === 0){
			return next(DEFAULT_PATH_FORYOU);	
		}
  		return next();
	});
	// Save current visited path if valid
	routerInstance.afterEach(function(to, from){
		if(to.matched.length > 0){
			routerInstance.app.$store.commit('updateApplication',{lastPath:to.path});
			routerInstance.app.$store.commit('updateView',{contentActive:true});
		}
	});
	// Open content when its closed and opened again
	routerInstance.afterEach(function(to, from){
		var isContentActive = routerInstance.app.$store.state.view.contentActive;
		
		if(typeof from.path == 'undefined' || typeof to.path == 'undefined'){
			return;
		}
		
		if(!isContentActive && from.path && to.path && from.path == to.path){
			routerInstance.app.$store.commit('updateView',{open:true,contentActive:true});
		}
	});
	
	
	function getRouterPaths(){
		return [{
			path:DEFAULT_PATH_WELCOME,
			component : require('views/welcome.vue')
		},{	
			path:'/profile',
			component : require('views/profile.vue')
		},{
			path:'/tracking',
			component : require('views/tracking.vue')
		},{
			path:DEFAULT_PATH_FORYOU,
			component : require('views/foryou.vue')
		},{
			path:'/settings',
			component : require('views/settings.vue')
		},{
			path:'/howto',
			component : require('views/howto.vue')
		}];
	}	
	
	// Return the router instance
	return routerInstance;
};
