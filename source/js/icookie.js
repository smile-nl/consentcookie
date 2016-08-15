"use strict";

/*
 * Browserify dependencies
 */
var icookieHtml = require('../html/icookieMain.html');
var icookieConsentHtml = require('../html/icookieConsent.html');
var icookieCss = require('../css/icookie.css');

var jQuery = require('jquery');

/*
 * Shorthand notation
 */
var $ = jQuery;

/*
 * Static variables
 */
var iqVisitorCookie = '_iqnomyvid'; // persistent cookie;
var iqVisitorId = -1;
var iqTenantId = -1;

var iqBaseUrl = "https://";
var icookieBaseUrl = "//static.test.iqnomy.com/icookie/";

var _icookie = null;
var _icookieToggle = null;

var _toggleCollapsed = true;

var _profile = null;

/*
 * Global variables
 */
var self = this;
self.jQuery = jQuery;

self.params = {
	agreementExpiresInDays : 30
};

self.vars = {
	COOKIE_NAME : 'EU_COOKIE_LAW_CONSENT'
};

// Run init on documentready
$(document).ready(function(){
	init();
});

/* Init functions */
function init() {
    if (typeof global.icookie !== 'undefined') {
		return false;
	}
	global.icookie = self;

	if (!checkVisitorId()) {
		alert("This website is not connected to the HumanSwitch platform.");
		return;
	}
	if (!checkTenantId()) {
		alert("This website is not connected to the HumanSwitch platform.");
		return;
	}
	initView();

	var acceptedCookies = userAlreadyAcceptedCookies();

	if(!acceptedCookies){
		initCookieConsent();
	}
	showIcookie(!acceptedCookies);
};

function initView() {
    // Add icookie css
    $('body').append(icookieHtml);

    // Init Icookie
    _icookie = jQuery("#icookie");

    // Init Toggle
    _icookieToggle = jQuery('#icookieToggle');
    rePosToggle();
    _icookieToggle.on("click", function() {
    	toggleIcookie();
    });
}

function initCookieConsent(){
	jQuery("#icookieContent").prepend(icookieConsentHtml);
	jQuery('#cookieAcceptButton').on("click",function(){
		setUserAcceptsCookies(true);
		jQuery("#icookieContent ._icCookieConsent").remove();
		loadVisitorProfile();
	});
	toggleIcookie(true);
}

function showIcookie(instant){
	_icookie.show((instant ? 0 : 1000));
	showIcookieToggle(instant);
}

function showIcookieToggle(instant){
	rePosToggle();
	_icookieToggle.show((instant ? 0 : 1000));
}

function rePosToggle() {
	var viewportHeight = jQuery(window).height();
    var icookieToggleHeight = _icookieToggle.height();
    _icookieToggle.css('top', ((viewportHeight / 2) - (icookieToggleHeight / 2)));
}

function toggleIcookie(instant) {
    if (_toggleCollapsed) {
        _toggleCollapsed = false;
        _icookie.animate({
            right: "0px"
        }, (instant ? 0 : 2000));
    } else {
        _toggleCollapsed = true;
        _icookie.animate({
            right: "-" + _icookie.outerWidth() + "px"
        }, (instant ? 0 : 2000));
    }

    if(!_toggleCollapsed && userAlreadyAcceptedCookies()){
    	loadVisitorProfile();
    }
}

//Storing the consent in a cookie
function setUserAcceptsCookies(consent) {
	var d = new Date();
	var expiresInDays = self.params.agreementExpiresInDays * 24 * 60 * 60 * 1000;
	d.setTime( d.getTime() + expiresInDays );
	var expires = "expires=" + d.toGMTString();
	document.cookie = self.vars.COOKIE_NAME + '=' + consent + "; " + expires + ";path=/";

	$(document).trigger("user_cookie_consent_changed", {'consent' : consent});
};

//Let's see if we have a consent cookie already
function userAlreadyAcceptedCookies() {
	var userAcceptedCookies = false;
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var c = cookies[i].trim();
		if (c.indexOf(self.vars.COOKIE_NAME) == 0) {
			userAcceptedCookies = c.substring(self.vars.COOKIE_NAME.length + 1, c.length);
		}
	}
	return userAcceptedCookies;
};


/*
 * Public functions
 */
self.getProfile = function(){
	return _profile;
}

/*
 * Validations and checks
 */

/* Check if connected to Humanswitch platform */
function checkVisitorId() {
    var id = getCookieValue(iqVisitorCookie);
    iqVisitorId = null != id ? id : iqVisitorId;
    return null != id;
};

/* Check if connected to Humanswitch platform */
function checkTenantId() {
    var id = (typeof global._iqsTenant !== 'undefined' ? global._iqsTenant : null);
    iqTenantId = null != id ? id : iqTenantId;
    return null != id;
};

/*
 * Business logic
 */
function loadVisitorProfile() {
    jQuery.ajax({
        url: "https://myliquidsuite-api.iqnomy.com/api/liquidaccount/" + iqTenantId + "/profile/cookie/" + iqVisitorId,
        type: "GET",
        success: function(data) {
            console.log(data);
            _profile = data;
            jQuery('#icookieContent ._icProfile').append("<div>" + JSON.stringify(_profile, null, "\t") + "</div>");
        }
    });
};

/*
 * Util functions
 */
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