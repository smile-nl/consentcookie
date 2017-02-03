module.exports = function configState(vue) {
	
	// Get the dependencies
	var veux = require('vuex');
	
	vue.use(veux);
	
	return new veux.Store({
		state: {
			view : {
				open: false,
				title: ""
			}
	  	}
	});
};
