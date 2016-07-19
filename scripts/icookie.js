/*
 * Static variables
 * */
var COOKIE_NAME_VID = '_iqnomyvid'; // persistent cookie
var visitorId = -1;
var tenantId = 1273096080;
// var icookieHostAndPort = "icookie.humanswitch.io";
// var icookieHostAndPort = "work-steven.asknow.local";
var icookieHostAndPort = "home-steven.asknow.local";
var icookieBaseUrl = icookieHostAndPort + "/icookie/js/";
var icookieOverlayPage = "icookieIframe.html";

/*
 * Init functions
 * */
(function() {
    init();
})();

/* Main init */
function init() {	
    if (!checkVisitorIdVisitorId()) {
        alert("This website is not connected to the HumanSwitch platform.");
        return;
    }
    initUI();
};

/* Init UI */
function initUI(){
	initOverlay();
	initTrigger();
}

function initOverlay(){
	icookieOverlay = jQuery('<div id="icookieOverlay"></div>');
	jQuery('body').append(icookieOverlay);
}

function initTrigger(){
	icookieTrigger = jQuery('<div id="icookieToggle"><div>');
	$('body').append(icookieTrigger);
	icookieTrigger.show('slow');
}

/*
 * Validations and checks
 */
 
/* Check if connected to Humanswitch platform */
function checkVisitorIdVisitorId() {
    var id = getCookieValue(COOKIE_NAME_VID);
    visitorId = null != id ? id : visitorId;
    return null != id;
};
