/**
 * @author Steven Choo
 * 
 * The main applications service. One to rule them all!
 */

var mainService = function(){	
		
	var Vue = require('vue');	
	var vue = new Vue({});	
		
	var state = null;	
		
	function _initStateChangeListener(){
		vue.$on('mainService#statechanged',function(newState){
			if(newState){
				state = newState;
			}
		});
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
		getCurrentState : function(){
			return state;
		}	
	};
	
}();
module.exports = mainService;