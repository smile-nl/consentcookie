/**
 * vue-services
 * (c) 2017 Steven Choo
 * @license MIT
 */
(function(global, factory) {
		// Require and AMD compatible
		typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : (global.VueServices = factory());
	}(this, (function() {
		
	'use strict';

	/**
	 * This function is the factory method called by require or AMD and it returns the VueServices instance
	 */
	
	// Private variables
	var _Vue;

	/**
	 * Install function called by vue, required for all vue plugins
	 */
	function install(Vue) {
		if (install.installed) {
			return
		}
		install.installed = true;

		_Vue = Vue;

		// Create a Vue property that can be called from all the vue instances with the reference tot the plugin
		Object.defineProperty(Vue.prototype, '$services', {
			get : function get() {
				return this.$root._services
			}
		});

		// Link the plugin before the vue app is created		  	
		Vue.mixin({
			beforeCreate : function beforeCreate() {
				if (this.$options.services) {
					this._services = this.$options.services;
					this._services.init(this);
				}
			}
		});
	}

	// private functions
	function _log(message){
		  console[console.info ? 'info' : 'log'](message);
	}
	
	function _warn(message){
		 console[console.warn ? 'warn' : 'log'](message);
	}
	
	function _initServices(instance){	
		var options = instance.getOptions();
		if(!options || typeof options.services !== 'object'){
			throw "Unable to init services. Make sure to properly init the VueServices instance with an options object containing an array with the to be loaded services.";
		}
		var servicesToInit = [];
		
		for(var n=0; n < options.services.length;n++){
			var service = options.services[n];
			
			if(!service){ 
				_warn("Unable to init the service. No service defined.");
				continue;
			}else if(typeof service.name !== 'string' || typeof service.service !== 'object'){
				_warn("Unable to init the service: " + (service.name || "null") + ". Make sure it is of the proper format {name:'',service:{}}.");
				continue;
			}else if(typeof service.service.init !== 'function'){
				_warn("Unable to init the service: " + service.name + ". Service is missing init function. ");
				continue;
			}else if(instance[service.name]){
				_warn("Unable to init the service: " + (service.name || "null") + ". Its already been init. Make sure your not loading twice the same service");
				continue;
			}
			instance[service.name] = service.service;
			servicesToInit.push(service.name);
		}
		// We call the init from a 2e iteration so that the services can call the base functions of eachother
		for(var m=0; m < servicesToInit.length;m++){
			instance[servicesToInit[m]].init(instance);
		}
	}

	// The instance object
	var VueServices = function VueServices(options) {
		
		this.vueInstance = null;
		
		var _options = (options === void 0) ? {} : options;
		// Make internal variables public accessible
		this.getOptions = function(){
			return _options;
		};
	};

	VueServices.prototype.init = function init(vueInstance /* Vue component instance */) {

		// main app already initialized.
		if (this.vueInstance) {
			return
		}
		this.vueInstance = vueInstance;
		
		// Init the services
		_initServices(this);
	};

	VueServices.install = install;
	VueServices.version = '1.0.0';

	return VueServices;
})));
