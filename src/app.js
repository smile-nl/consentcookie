"use strict";

// Static dependencies
require('./assets/css/icookie.css');
require('font-awesome/css/font-awesome.css');

// Active dependencies
var jQuery = require('jquery');
var vue = require('vue');
var vueFilter = require('vue-filter');
var vueState = require('./base/configState.js');

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
	jQuery('body').append('<div id="icookie"></div>');
}

/* Vue routing */ 
function initVue(){
	
	initVueResource();
	initVueBaseComponents();
	initVueRouter();
	initVueFilters();
	
	var main = vue.extend(require('./views/main.vue'));
	window.steventest = new main({
		store: new vueState(vue)
	}).$mount('#icookie');
}

function initVueRouter(){
	var configRouter = require('./base/configRouter.js');
	configRouter(vue);
}

function initVueResource(){
	
	// Init vue resource
	var vueResource = require('vue-resource');
	vue.use(vueResource);
}

function initVueBaseComponents(){
	
	// Retrieve the components
	//var viewHeader = require('./components/base/view-header.vue'); 
	
	// Register the components
	// vue.component('view-header', viewHeader);
}

function initVueFilters(){
	vue.use(vueFilter);
}