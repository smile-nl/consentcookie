module.exports = function configResource(vue) {
	
	return null;
	
	console.log("config resource");
	
	// Get dependencies
	var vueResource = require('vue-resource');
		
	// Init vue resource
	vue.use(vueResource);
	
	// Custom isolated jsonp client, based on the original vue-resource JSONP client
	var icJsonpClient = jsonpClient;
	
	// Remove current inteceptor
	for(var n = 0;  n < vue.http.interceptors.length; n++){
		if(vue.http.interceptors[n].name == 'jsonp'){
			// Removing current JSOP interceptor
			vue.http.interceptors.splice(n,1);
		}
	}
	
	// Override current JSONP interceptor with our scope isolated one
	vue.http.interceptors.push(jsonpInterceptor);

	function jsonpInterceptor(request, next){

	    if (request.method == 'JSONP') {
	    	console.log("Custom inteceptor");
	        request.client = jsonpClient;
	    }
	    next();
	};
	
	function jsonpClient(request) {
		return new Promise(function(resolve) {
			console.log("custom jsonpclient");

			var name = request.jsonp || 'callback';
			var callback = request.jsonpCallback || '_jsonp' + Math.random().toString(36).substr(2);
			var body = null;
			var handler = null;
			var script = null;

			handler = function(ref) {
				console.log("handler");
				
				var type = ref.type;

				var status = 0;

				if (type === 'load' && body !== null) {
					status = 200;
				} else if (type === 'error') {
					status = 500;
				}

				if (status && window[callback]) {
					delete window[callback];
					document.body.removeChild(script);
				}

				resolve(request.respondWith(body, {
					status : status
				}));
			};

			window[callback] = function(result) {
				body = JSON.stringify(result);
				
				cleanup();
			};



			request.abort = function() {
				handler({
					type : 'abort'
				});
			};

			request.params[name] = callback;

			if (request.timeout) {
				setTimeout(request.abort, request.timeout);
			}

			script = document.createElement('script');
			script.src = request.getUrl();
			script.type = 'text/javascript';
			script.async = true;
			script.onload = handler;
			script.onerror = handler;

			document.body.appendChild(script);
		});
	};
};