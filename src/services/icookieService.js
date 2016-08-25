/**
 * @author Steven Choo
 * 
 * Service is exported at the end of the file
 */

var icookieService = function(){
	
	var trackingPrefixes = [
		'cdn.widgets.webengage.com',
		'www.google-analytics.com',
		'connect.facebook.net',
		'tdn.r42tag.com',
		'analytics.twitter.com'
	];
	
	var scriptCount = null;
	var scriptTotalCount = null;	 
	
	return {
			
	 	getTrackingCount : function(){
	 		
	 		if(null != scriptCount){
	 			return scriptCount;
	 		}
	 		
	 		scriptCount = 0;
	 		scriptTotalCount = 0;
			
			var scripts = document.getElementsByTagName("script");
		  	for (var i=0;i<scripts.length;i++) {
		  		
		  		scriptTotalCount++;
		  		
	     		var script = scripts[i].src ? scripts[i].src : scripts[i].innerHTML; 
		   	
		   		if(typeof script === 'undefined' || null == script){
		   			continue;
		   		}
		   		
		   		for(var j=0;j<trackingPrefixes.length;j++){
					 var prefix = trackingPrefixes[i];
					 
					 if(script.indexOf(prefix) !== -1){
					 	scriptCount++;
					 	continue;
					 }
			   	};
	   		}
			return scriptCount;
		},
		
		getTrackingTotalCount : function(){
			if(null != scriptTotalCount){
				return;
			}
			this.getTrackingCount();
			return scriptTotalCount;
		}
	};
}();
module.exports = icookieService;