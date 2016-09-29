/**
 * @author Steven Choo
 * 
 * Service is exported at the end of the file
 */

var notificationService = function(){
		
	var mainService  = require('services/mainService.js');
		
	var notificationCount = 0;	
		
	// Public functions
	return {
		setCount : function(count){
			if(typeof count === 'number'){
				notificationCount = count;
				mainService.$broadcast('notificationService#update');
			}
		},
		addCount : function(count){
			if(typeof count === 'number'){
				notificationCount = notificationCount + count;
				mainService.$broadcast('notificationService#update');	
			}
		},
		getCount : function(){
			return notificationCount;
		},
		resetCount : function(){
			notificationCount = 0;
			mainService.$broadcast('notificationService#update');
		}
	};
}();
module.exports = notificationService;