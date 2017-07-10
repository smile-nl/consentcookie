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
				content:{
					size : null
				},
				isPhone : false,
				isPortrait : false
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
			    if(!_.isObject($payload)){
				    return false;
			    }

			    // View update
	  			$state.view.title = _.isString($payload.title) ? $payload.title : $state.view.title;

			    // View update
			    $state.view.isPhone = _.isBoolean($payload.isPhone) ? $payload.isPhone : $state.view.isPhone;
			    $state.view.isPortrait = _.isBoolean($payload.isPortrait) ? $payload.isPortrait : $state.view.isPortrait;

			    // View Content update
			    $state.view.content.size = _.isObject($payload.content) && _.isNumber($payload.content.size) ? $payload.content.size : $state.view.content.size;
	  		},
	  		updateApplication : function($state,$payload){
	  			if(!_.isObject($payload)){
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
