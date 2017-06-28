/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */

var trackersService = function() {

	// Libraries
	var underscore = require("underscore");
	var jsCookie = require('js-cookie');

	// Defaults
	
	// Private variables
	var vue = null;
	var storeModule = null;

	// Private functions
	function _init(vueServices){
		
		vue = vueServices.vueInstance;
	
		_initStore();
		_initTrackers();
	}
	
	function _initTrackers(){
		// This should be a promise, because we can retrieve the trackers from somewhere else
		loadTrackers(function($trackers){
			vue.$store.commit("trackers/update",$trackers);
		});
	}

	function loadTrackers($callback){
		var trackers = require('assets/json/trackers.json');

		if(typeof $callback === "function"){
			$callback(trackers);
		};
	}
	
	function _initStore(){
		storeModule = {
			namespaced: true,
			state:{
				trackersLoaded : false,
				trackers : [],
			},
			mutations : {
				update : function($state,$data){
					$state.trackers = $data.trackers;
					$state.trackersLoaded = true;
				},
			}
		};
		vue.$store.registerModule("trackers",storeModule);
	}
	
	function _toggleTracker($tracker,$enabled){
		var cookieVal = jsCookie.get($tracker.cookieName);
		jsCookie.set($tracker.cookieName,$enabled);
		
		if(typeof cookieVal !== 'boolean' || !cookieVal){
			window.dataLayer ? window.dataLayer.push({
				event:"stg.ic.load.iqnomy",
				start: new Date().getTime()
			}) : null;
		}
	}
	
	function _loadTrackers(){
		return trackers;
	}
	
	// Public functions
	return {
		// Vue services require a init function
		init: function(vueServices){
			_init(vueServices);
		},
		toggleTracker : function($tracker,$enabled){
			_toggleTracker($tracker,$enabled);
		}
		,
		loadTrackers : function(){
			_loadTrackers();	
		}
	};
}();
module.exports = trackersService;