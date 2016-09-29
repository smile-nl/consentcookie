/**
 * @author Steven Choo
 *
 * Service is exported at the end of the file
 */

var impressService = function() {

	// Library + Service import
	var mainService = require('services/mainService.js');
	var notificationService = require('services/notificationService.js');
	var settingsService = require('services/settingsService.js');
	var iqnomyService = require('services/iqnomyService.js');
	
	var jsonpLib = require('assets/js/FlyJSONP/flyjsonp.js');
	
	// Private variables
	var icookieImpressMarkerSuffix = "#icookie/selectedForYou";
	var loading = false;
	var eoi = null;
	var containerImpressions = null;
	
	// Init service
	_initListeners();
	
	// Private functions
	function _initListeners(){
		mainService.$on('init', function(){
			_checkForContent();
		});
	}
	
	function _impress(callback){
		if(loading){
			callback(false,'loading',null);
			return;
		}
		
		eoi = false;
		_getImpress(_generateGUID(),[],callback);	
	}
	
	function _checkForContent(){
		_impress(function(_hasError,_error,_containerImpressions){
			if(_containerImpressions && _containerImpressions.length > 0){
				notificationService.addCount(_containerImpressions.length);
			}
		});
	}
	
	function _getImpress(guid,_containerImpressions,callback){
		jsonpLib.get({
			url : _getImpressUrl(guid),
			callbackParameter : "jsonpTransport",
			httpMethod : "get",
			success : function(data) {
				if (!eoi) {
					eoi = data.eoi;
				}
				_addImpress(_containerImpressions,data);
			
			},
			error : function(errorMsg) {
				eoi = true;
				_handleImpressError(errorMsg,callback);
			},
			complete : function() {
				if (!eoi) {
					_getImpress(guid,_containerImpressions,callback);
				}
				_processImpress(_containerImpressions,callback);
			}
		});
	};
	
	
	function _addImpress(_containerImpressions,data){
		var newContainerImpressions = data.containerImpressions;
		
		if(!newContainerImpressions || newContainerImpressions.length == 0){
			return;
		}
				
		// Loop the impressions 
		for (i = 0; i < newContainerImpressions.length; i++) {		
			containerImpression = newContainerImpressions[i];
			    
		    if(!containerImpression){
		    	continue;
		    }
		    containerImpression.getMergedTemplates = _getMergedTemplate;
		    _containerImpressions.push(containerImpression);
	 	}
	}
	
	function _processImpress(_containerImpressions,callback){
		loading = false;
		
		if(_containerImpressions){
			containerImpressions = _containerImpressions;
		}
		
		if(callback){
			callback(true,'ok',_containerImpressions);
		}
	};
	
	function _handleImpressError(error,callback){
		callback(false,error,null);
	}
	
	function _getImpressUrl(guid){
		return _getImpressBaseUrl(guid) + "?iqversion=3&fid=1&" +
			"tenant=" + iqnomyService.getTenantId() +  "&" +
			"vid=" + iqnomyService.getVisitorId() +  "&" +
			"iqurl=" + encodeURIComponent(_getIQUrl());
	}
	
	// Conform the current impress standard 
	function _getImpressBaseUrl(guid){
		return settingsService.getImpressBasePath() + "/" + guid;
	}
	
	// Create the iqUrl based on the current page without params and add a suffix to make it easy to configure the container. 
	function _getIQUrl(){
		return window.location.toString().split('?')[0] + icookieImpressMarkerSuffix;
	}
	
	function _generateGUID() {
		var S4 = function() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16)
					.substring(1);
		};
		return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
	};
	
	function _getMergedTemplate(){
		if(!this.imprElements || !this.imprElements.length > 0){
			return '';
		}
		var mergedTemplates = '';
		for(i = 0; i < this.imprElements.length; i++){
			mergedTemplates = mergedTemplates + this.imprElements[i].htmlTemplate;
		}
		
		return mergedTemplates;
		
	}

	// Public functions
	return {
		checkForContent : function(){
			_checkForContent();
		},
		impress : function(callback) {
			return _impress(callback);
		},
		getContainerImpression : function(){
			return containerImpressions;
		}
	};
}();
module.exports = impressService;
