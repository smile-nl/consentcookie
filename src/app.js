"use strict";

// Static dependencies
require('./assets/css/icookie.css');
require('font-awesome/css/font-awesome.css');

// Active dependencies
var jQuery = require('jquery');
var vue = require('vue');
var vueRouter =  require('vue-router');

var test = {};

// Run init on documentready
jQuery(document).ready(function(){
	init();
});

function init(){
	initBaseView();
	initVue();
	
	/* For testing purposes*/
	window.icookieTest = test;
}

/* Init base view*/
function initBaseView(){
	jQuery('body').append('<div id="icookie" style="display:none"></div>');
}

/* Vue routing */ 
function initVue(){
	
	registerBaseComponents();
	
	var icRouterConfig = require('./router/routerConfig.js');

	vue.use(vueRouter);
	
	var icRouter = new vueRouter({
	  history: true,
	  saveScrollPosition: true,
	  abstract: true,
	  replace:false
	});
	
	icRouterConfig(icRouter);
	
	/* Setup global app */
	var main = vue.extend(require('./views/main.vue'));
	icRouter.start(main, '#icookie');
	
	/* For testing purposes*/
	test.vue = main;
	test.jQuery = jQuery;
}

function registerBaseComponents(){
	
	// Retrieve the components
	var viewHeader = require('./components/base/view-header.vue'); 
	
	// Register the components
	vue.component('view-header', viewHeader);
}
