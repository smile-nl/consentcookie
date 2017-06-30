module.exports = function configState(vue) {
	
	// Get the dependencies
	var _ = require('underscore');
	var veux = require('vuex');
	var vuexPersistedState =  require('vuex-persistedstate');

	// Import default config
	var applicationConfig = require("customConfig");

	// Defaults options
	var envs = ["production","test"];
	
	// Settings
	var pathsToPersistAsCookie = {
		
	};
	
	var pathsToPersist = [
		"application.state.lastPath",
		"settings"
	];
	
	var vuexPlugins = [
		vuexPersistedState({
			key: "icookie",
			paths: pathsToPersist,
		})
	];
	
	vue.use(veux);

	var store = new veux.Store({
		plugins:vuexPlugins,
		state: {
			view : {
				title: "",
				size:{
					height: null,
					width: null,
					maxHeight: null,
					maxWidth:null
				}
			},
			application : {
				state:{
					lastPath: null,
					menuActive : false,
					menuOpen: false,
					contentActive : false,
					contentOpen : false
				},
				config:applicationConfig
			}
	  	},
	  	mutations : {
	  		updateView : function($state,$payload){
	  			$state.view.title = _.isString($payload.title) ? $payload.title : $state.view.title;
	  		},
	  		updateApplication : function($state,$payload){
	  			if(!_.isObject){
	  				return false;
			    }
			    var applicationState = $state.application.state;
			    applicationState.lastPath = _.isObject($payload.lastPath) ? $payload.lastPath : applicationState.lastPath;
			    applicationState.menuActive = _.isBoolean($payload.menuActive) ? $payload.menuActive : applicationState.menuActive;
			    applicationState.menuOpen = _.isBoolean($payload.menuOpen) ? $payload.menuOpen : applicationState.menuOpen;
			    applicationState.contentOpen = _.isBoolean($payload.contentOpen) ? $payload.contentOpen : applicationState.contentOpen;
			    applicationState.contentActive = _.isBoolean($payload.contentActive) ? $payload.contentActive : applicationState.contentActive;
	  		},
	  		toggleView : function($state){
			    $state.application.state.isOpen = !$state.application.state.isOpen;
	  		}
	  	}
	});
	return store;
};
