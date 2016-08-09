/*
 * Static variables
 * */
var icookieHostAndPort = "static.test.iqnomy.com";
var icookieParentSource = null;

/*
 * Global variables
 */
window.visitorId = -1;
window.tenantId = -1;
window.visitorProfile = null;

/*
 * Init functions
 */
initIcookieEventHandler();
$(document).ready(function(){
	initIframe();
});

function initIframe(){
	tenantId = getUrlParameter("tenant");
	visitorId = getUrlParameter("visitor");

	getVisitorProfile();
}

function initIcookieEventHandler(){
	window.addEventListener("message", receiveIcookieEvent, false);
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
 * Event Message implementations
 */
function sendIcookieEvent(action,data){
	var eventPayload = {};
	eventPayload.type = "icookieEvent";
	eventPayLoad.action = action;
	eventPayload.data = data;

	if(null != icookieParentSource){
		icookieParentSource.postMessage(eventData,icookieBaseUrl);
	}else{
		console.log("icookie ParentSource available. Can`t send event.");
	}
}

function receiveIcookieEvent(event){

	var eventPayload = event.data;
	var eventOrigin = event.origin || event.originalEvent.origin;

	if(typeof eventPayload.type === 'undefined' || eventPayload.type !== 'icookieEvent'){
		console.log("Not a icookie event. Ignore event.");
		return;
	}
	if(null == icookieParentSource){
		icookieParentSource = eventOrigin;
	}

	handleIcookieEventAction(eventPayload.action,eventPayload.data)
}

function handleIcookieEventAction(action,data){

}

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