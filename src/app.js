"use strict";


// Avoid leaking scope
(function(){

	// Static dependencies
	require('font-awesome/css/font-awesome.css');
	// require('../resources/fontello/css/animation.css')
	// require('../resources/fontello/css/fontello.css')
	require('./assets/scss/_icookie.scss');
	
	// Vue dependencies
	var vue = require('vue');
	var vueState = require('./base/configState.js');
	var vueRouter = require('./base/configRouter.js');
	var vuexRouterSync = require("vuex-router-sync");
	
	// Vue icookie Dependencies
	var vueServices = require('./base/configServices.js');
	
	// Run init on documentready
	init();
	
	function init(){
		initBaseView();
		initVue();
	}
	
	/* Init base view*/
	function initBaseView(){
		var icookie = document.createElement("div");
		icookie.id = "icookie";
		icookie.className = "icookie";
		document.body.appendChild(icookie);
	}
	
	/* Vue routing */ 
	function initVue(){
		
		var store = vueState(vue);
		var router = vueRouter(vue);
		var services = vueServices(vue);
		
		
		initVueResource();
		initVueBaseComponents();
		initVueFilters();
		initVueRouterSync(store,router);
			
		var main = vue.extend(require('./views/main.vue'));
		var mainInstance = new main({
			router: router,
			store: store,
			services : services
		}).$mount('#icookie');
	}
	
	function initVueResource(){
		
		// Init vue resource
		var vueResource = require('vue-resource');
		vue.use(vueResource);
	}
	
	function initVueBaseComponents(){
		// Register the components
		vue.component('ic-content-box',require("components/general/icContentBox.vue"));
		vue.component('ic-button',require("components/general/icButton.vue"));
        vue.component('ic-dropdown-button',require("components/general/icDropdownButton.vue"));
		vue.component('ic-switch',require("components/general/icSwitch.vue"));
	}
	
	function initVueFilters(){
		// vue.use(vueFilter);
	}
	
	function initVueRouterSync($store,$router){
		vuexRouterSync.sync($store,$router);
	}

})();
