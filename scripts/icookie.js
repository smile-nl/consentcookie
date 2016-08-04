/*
 * Static variables
 * */
var COOKIE_NAME_VID = '_iqnomyvid'; // persistent cookie
var visitorId = -1;
var tenantId = -1;

// var icookieHostAndPort = "icookie.humanswitch.io";

var icookieHostAndPort = "static.test.iqnomy.com";
var icookieBaseUrl = icookieHostAndPort + "/icookie/";
var icookieOverlayPage = "icookieIframe.html";

var icookieOverlay = null;
var icookieTrigger = null;
var collapsed = true;

/*
 * Init functions
 * */
(function() {
    init();
})();

/* Main init */
function init() {
    if (!checkVisitorId()) {
        alert("This website is not connected to the HumanSwitch platform.");
        return;
    }
    if (!checkTenantId()) {
        alert("This website is not connected to the HumanSwitch platform.");
        return;
    }
    initDependencies();
};

/* Javascript dependencies init using loader (LAB.js) */
function initDependencies() {

	// Add icookie css
	css=document.createElement('link');
	css.href= calcBaseUrl() + 'icookie.css';
	css.type='text/css';
	css.rel='stylesheet';
	document.getElementsByTagName('head')[0].appendChild(css);

	// Skip loading jQuery if its already loaded
	if(window.jQuery){
		console.log("skipping dependencies. Already loaded.");
		return initUI();
	}

	// Creating LAB.js options
    var _LABOpts = {
        BasePath: calcBasePath()
    };

    // Load dependencies
    var dependenciesInitFunction = function() {
        $LAB.setOptions(_LABOpts)
		.script(_LABOpts.BasePath + 'jquery-3.1.0.min.js')
		.wait(function() {
			initUI();
		});
    };

    // Adding LAB.js to DOM
    var LABLoader = document.createElement('script');
    LABLoader.setAttribute('src', _LABOpts.BasePath + 'LAB.min.js');
    document.body.appendChild(LABLoader)

    // Init LAB.js
    if (LABLoader.readyState) {
        LABLoader.onreadystatechange = function() {
            if (LABLoader.readyState === 'loaded' || LABLoader.readyState === 'complete') {
                LABLoader.onreadystatechange = null;
                dependenciesInitFunction();
            }
        };
    } else {
        LABLoader.onload = function() {
            dependenciesInitFunction();
        };
    };
}

/* Init UI */
function initUI(){
	initOverlay();
	initTrigger();
}

function initOverlay(){
	if(jQuery('#icookieOverlay').length != 0){
		return false;
	}

	icookieOverlay = jQuery('<div id="icookie"><div>');
	icookieIframe = jQuery('<iframe id="icookieContent" style="width:100%;height:100%;"></iframe>');
	icookieIframe[0].frameborder = "0";
	icookieIframe[0].src = calcBaseUrl() + "iframe/icookie.html?tenant=" + tenantId + "&visitor=" + visitorId;
	// Add + 20px for the default scrollbar;
	icookieOverlay.css({position:'fixed',top:0,right:'-500px',bottom:0,height:'100%',height:'100vh',width:'520px','z-index':1000});
	icookieOverlay.append(icookieIframe);

	jQuery('body').append(icookieOverlay);
}

function initTrigger(){
	if(jQuery('#icookieToggle').length != 0){
		return false;
	}
	icookieTrigger = jQuery('<div id="icookieToggle" style="display:none"><div class="icookieToggleImg"><div><div>');
	icookieOverlay.append(icookieTrigger);
	rePosTrigger();
	icookieTrigger.on("click", function(){toggleOverlay()});
	icookieTrigger.show("slow", function() {
		loadIframe();
	});
}

function toggleOverlay(){
	if(collapsed){
		collapsed = false;
		icookieOverlay.animate({right: "0px"}, 2000, function() {
			refreshIframe();
		});
	}else{
		collapsed = true;
		icookieOverlay.animate({right: "-500px"}, 2000, function(){});
	}
}

function loadIframe(){

}

function refreshIframe(){

}

function rePosTrigger(){
	var icookieOverlayHeight = icookieOverlay.height();
	var icookieTriggerHeight = icookieTrigger.height();
	icookieTrigger.css('top', ((icookieOverlayHeight / 2) + (icookieTriggerHeight / 2)));
}

/*
 * Validations and checks
 */

/* Check if connected to Humanswitch platform */
function checkVisitorId() {
    var id = getCookieValue(COOKIE_NAME_VID);
    visitorId = null != id ? id : visitorId;
    return null != id;
};

/* Check if connected to Humanswitch platform */
function checkTenantId() {
    var id = _iqsTenant;
    tenantId = null != id ? id : tenantId;
    return null != id;
};

/*
 * Util functions
 */

// Get cookie value function
function getCookieValue(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1) {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
};

// Function to get basepath
function calcBaseUrl() {
	return '//' + icookieBaseUrl;
};
