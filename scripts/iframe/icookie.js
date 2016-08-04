/*
 * Static variables
 * */
var icookieHostAndPort = "static.test.iqnomy.com";

/*
 * Global variables
 */
window.visitorId = -1;
window.tenantId = -1;
window.visitorProfile = null;

/*
 * Init functions
 */
$(document).ready(function(){
	initIframe();
});

function initIframe(){
	tenantId = getUrlParameter("tenant");
	visitorId = getUrlParameter("visitor");

	getVisitorProfile();
}

/*
 * Business logic
 */
function getVisitorProfile() {
	jQuery.ajax({
		url: "https://myliquidsuite-api.iqnomy.com/api/liquidaccount/" + tenantId + "/profile/cookie/" + visitorId,
		type: "GET",
		success: function(data) {
			console.log(data);
			window.visitorProfile = data;
			jQuery('.content-wrapper').append("<div>" + JSON.stringify(window.visitorProfile, null, "\t") + "</div>");
		}
	});
};

/*
 * Util functions
 */
function getUrlParameter(sParam) {
	var sPageURL = decodeURIComponent(window.location.search.substring(1)),
		sURLVariables = sPageURL.split('&'),
		sParameterName,
		i;

	for (i = 0; i < sURLVariables.length; i++) {
		sParameterName = sURLVariables[i].split('=');

		if (sParameterName[0] === sParam) {
			return sParameterName[1] === undefined ? true : sParameterName[1];
		}
	}
};
