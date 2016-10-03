"use strict";

// Static dependencies
require('./assets/css/icookie.css');
require('font-awesome/css/font-awesome.css');

// Active dependencies
var jQuery = require('jquery');
var vue = require('vue');
var vueRouter =  require('vue-router');
var vueFilter = require('vue-filter');

// Run init on documentready
jQuery(document).ready(function(){
	init();
});

function init(){
	initBaseView();
	initVue();
}

/* Init base view*/
function initBaseView(){
	jQuery('body').append('<div id="icookie" style="display:none"></div>');
}

/* Vue routing */ 
function initVue(){
	
	initVueResource();
	initBaseComponents();
	
	var icRouterConfig = require('./router/routerConfig.js');

	vue.use(vueRouter);
	vue.use(vueFilter);
	
	var icRouter = new vueRouter({
	  	history: true,
 	 	saveScrollPosition: true,
	  	abstract: true,
	  	replace:true,
	  	append:false
	});
	
	icRouterConfig(icRouter);
	
	/* Setup global app */
	var main = vue.extend(require('./views/main.vue'));
	icRouter.start(main, '#icookie');
}

function initVueResource(){
	
	// Init vue resource
	var vueResource = require('vue-resource');
	vue.use(vueResource);
}

function initBaseComponents(){
	
	// Retrieve the components
	var viewHeader = require('./components/base/view-header.vue'); 
	
	// Register the components
	vue.component('view-header', viewHeader);
}
