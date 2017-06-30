module.exports = function configRouter(vue) {
	
	// Get depenencies
	var vueRouter = require('vue-router');

	// Default
	var DEFAULT_PATH_CONSENT = "/consent";
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

	function _getStore(){
		return routerInstance.app.$store;
	}

	function _getConsentService(){
		return routerInstance.app.$services.consent;
	}

	function _getViewService(){
		return routerInstance.app.$services.view;
	}

	function _validRoute(to){
		return to && to.matched && to.matched.length > 0;
	}

	// Custom functions
	routerInstance.reset = function(){
		this.history.current = DEFAULT_RESET_PATH;
	};
		
	// Config the router
	routerInstance.beforeEach(function(to, from, next){

		// Check if we already are showing the consent
		// Do nothing then
		if(DEFAULT_PATH_CONSENT === to.path ){
			return next();
		}

		// Check if we need to show the consent
		if(!_getConsentService().isAccepted()){
			return next(DEFAULT_PATH_CONSENT);
		}

		// Fallback for a route that does not exist
		if(to.matched.length === 0){
			return next(DEFAULT_PATH_FORYOU);
		}

  		return next();
	});
	// Save current visited path if valid
	routerInstance.afterEach(function(to, from){

		// Check if we have a valid route
		if(!from || !from.path || !to || !to.path){
			return;
		}

		// If we had a match, save the last path and set the content active
		if(_validRoute(to)){
			_getStore().commit('updateApplication',{lastPath:to.path,contentActive:true});
		}
	});
	// Open content when its closed and opened again
	/*
	routerInstance.afterEach(function(to, from){
		var isContentActive = routerInstance.app.$store.state.view.contentActive;
		
		if(typeof from.path === 'undefined' || typeof to.path === 'undefined'){
			return;
		}
		
		if(!isContentActive && from.path && to.path && from.path === to.path){
			routerInstance.app.$store.commit('updateView',{open:true,contentActive:true});
		}
	});
	*/
	
	function getRouterPaths(){
		return [{
			path:DEFAULT_PATH_CONSENT,
			component : require('views/consent.vue')
		},{
			path:DEFAULT_PATH_FORYOU,
			component : require('views/foryou.vue')
		},{
			path:'/howto',
			component : require('views/howto.vue')
		},{
			path:'/connections',
			component : require('views/connections.vue')
		}];
	}	
	
	// Return the router instance
	return routerInstance;
};
