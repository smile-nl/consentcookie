/**
 * @author Steven Choo
 * 
 * The main applications service. One to rule them all!
 */

var mainService = function(){	
		
	var Vue = require('vue');	
	var vue = new Vue({});
	var jsCookie = require('js-cookie');	
	
	var app = null;
		
	var state = null;
	var COOKIE_NAME = 'EU_COOKIE_LAW_CONSENT';	
		
	function _initStateChangeListener(){
		vue.$on('mainService#statechanged',function(newState){
			if(newState){
				state = newState;
			}
		});
	}
	
	function _getTopDomain(){
		var hostname = document.location.hostname.split('.');
		return hostname[hostname.length - 2] + "." + hostname[hostname.length - 1];
	}
	
	//Storing the consent in a cookie
	function _setAccepted() {
		jsCookie.set(COOKIE_NAME,'true',{domain:_getTopDomain()});
		app.$router.go('/dashboard');
	};
	
	//Let's see if we have a consent cookie already
	function _hasAccepted() {
		var consent = jsCookie.get(COOKIE_NAME);
		return consent === 'true';
	};
	
	function _setApp($app){
		app = $app;
	}
		
	// Public functions
	return {
		$on : function(event, callback){
			vue.$on(event,callback);
		},
		$once : function(event, callback){
			vue.$once(event,callback);
		},
		$off : function(event, callback){
			vue.$off(event,callback);
		},
		$emit : function(event){
			vue.$emit.apply(vue,arguments);
		},
		$dispatch : function(event){
			vue.$dispatch.apply(vue,arguments);
		},
		$broadcast : function(event){
			// Broadcast does not work if the vue parent is listening itself
			vue.$dispatch.apply(vue,arguments);
		},
		setAccepted : function(){
			_setAccepted();
		},
		hasAccepted : function(){
			return _hasAccepted();
		},
		setApp : function(app){
			_setApp(app);
		},
		getApp : function(){
			return app;
		}		
	};
	
}();
module.exports = mainService;