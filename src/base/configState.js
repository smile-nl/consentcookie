module.exports = function configState(vue) {
	
	// Get the dependencies
	var veux = require('vuex');
	var vuexPersistedState =  require('vuex-persistedstate');
	
	// Defaults options
	var envs = ["production","test"];
	
	// Settings
	var pathsToPersistAsCookie = {
		
	};
	
	var pathsToPersist = [
		"application.shownWelcome",
		"application.lastPath",
		"route",
		"settings",
	];
	
	var vuexPlugins = [
		vuexPersistedState({
			key: "icookie",
			paths: pathsToPersist,
		}),
	];
	
	vue.use(veux);
	
	// validators
	var validator = {
		isValid :  function($val){
			return typeof $val !== 'undefined'
		},
		isInValid : function($val){
			return this.isValid($val);	
		},
		isBoolean : function($val){
			return typeof $val == 'boolean';
		},
		isString : function($val){
			return typeof $val == 'string';
		},	
	}
	
	var store = new veux.Store({
		plugins:vuexPlugins,
		state: {
			view : {
				open: false,
				title: "",
				contentActive:false,
				size:{
					height: null,
					width: null,
					maxHeight: null,
					maxWidth:null
				}
			},
			application : {
				shownWelcome : false,
				lastPath: null
			}
	  	},
	  	mutations : {
	  		updateView : function($state,$payload){
	  			$state.view.title = validator.isString($payload.title) ? $payload.title : $state.view.title;
	  			$state.view.open = validator.isBoolean($payload.open) ? $payload.open : $state.view.open;
	  			$state.view.contentActive = validator.isBoolean($payload.contentActive) ? $payload.contentActive : $state.view.contentActive;  
	  		},
	  		updateApplication : function($state,$payload){
	  			$state.application.shownWelcome = !validator.isBoolean($payload.shownWelcome) ? $state.application.shownWelcome : $payload.shownWelcome;
	  			$state.application.lastPath = validator.isInValid($payload.lastPath) ? $state.application.lastPath : $payload.lastPath;
	  		},
	  		toggleView : function($state){
	  			$state.view.open = !$state.view.open; 
	  		}
	  	}
	});
	return store;
};
