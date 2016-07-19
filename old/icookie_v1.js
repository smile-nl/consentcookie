/*
 * Static variables
 * */
var COOKIE_NAME_VID = '_iqnomyvid'; // persistent cookie
var dependenciesLoaded = false;
var visitorId = -1;
var tenantId = 1273096080;
// var icookieHostAndPort = "icookie.humanswitch.io";
// var icookieHostAndPort = "work-steven.asknow.local";
var icookieHostAndPort = "home-steven.asknow.local";

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
    initDependencies();
    initUI();
};

/* Javascript dependencies init using loader (LAB.js) */
function initDependencies() {

    // Function to get basepath
    var calcBasePath = function() {
        if (typeof staticPrefix !== 'undefined' && staticPrefix != '') {
            return staticPrefix;
        }
        return '//' + icookieHostAndPort + '/icookie/js/';
    };

    // Load dependencies
    var dependenciesInitFunction = function() {
        debugger;
        if (dependenciesLoaded) {
            return false;
        }
        
        jQuery('head').append('<link rel="stylesheet" type="text/css" href="' + calcBasePath() + 'icookie.css">');

        $LAB
            .setOptions(_LABOpts)
            .script('https://keycloak.iqnomy.com/auth/js/keycloak.js')
            .script(_LABOpts.BasePath + 'jquery-3.1.0.min.js')
            .script(_LABOpts.BasePath + 'angular.min.js')
            .script(_LABOpts.BasePath + 'angular.min.js')
            .wait(function() {
                dependenciesLoaded = true;
                init();
            });
    };

    // Creating LAB.js options
    var _LABOpts = {
        BasePath: calcBasePath()
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
	jQuery();
}

/* Init keycloak authentication */
function initKeycloak() {
    var keycloakConfig = {
        "realm": "IQNOMY",
        "realm-public-key": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAgOPs5qY3nKxvp9vGB9jMe+Cxjj+QDruKSCNNxaRcQLKLhLOuqyZpT3srd75xIWY9BrFdCXQ1p0t2+otf4UiXuPKreNzpQbFaVDrAPhv26geJj/eZJEoUgYjCVTWnJr+JB7cIEo/bf1QTr7YNmm++WEZBJV/1aGjiffG7UbepbrQ//kCtd1ep2u+sJhbuyHfG+D34oAY81ZB3iAOZBA5hz1CX18s24IagIaIc+6OntKBL7YqwPXRpq+s0ik9ZjqhitkcqNrE1dAAldbLVVVGBGX0jiZX355rsoV3MhQc9Y7fyz371J+HLTGAxpr5ef9ygBhHTkdN+tjnMXZvmpgKOJwIDAQAB",
        "auth-server-url": "https://keycloak.iqnomy.com/auth",
        "ssl-required": "external",
        "clientId": "icookie-test",
        "public-client": true
    };

    var keycloak = Keycloak(keycloakConfig);
    keycloak.init({
        onLoad: 'login-required'
    }).success(function() {
        keycloak.updateToken(10).success(function() {}).error(function() {
            alert('Failed to load data.  User is logged out.');
        });
    });
}

function initIcookie() {
    getVisitorProfile();
};

/* checkVisitorIdVisitorId */
function checkVisitorIdVisitorId() {
    var id = getCookieValue(COOKIE_NAME_VID);
    visitorId = null != id ? id : visitorId;
    return null != id;
};

function showButton() {

};

function createOverlay() {

};

function getVisitorProfile() {
    jQuery.ajax({
        url: "https://myliquidsuite-api.iqnomy.com/api/liquidaccount/" + tenantId + "/profile/" + visitorId,
        headers: {
            "Authorization": "Bearer " + keycloak.token
        },
        type: "GET",
        success: function(data) {
            console.log(data);
            window.visitorProfile = data;
        }
    });
};

/* 
 * Util functions
 * */

/* Get cookie value function */
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

/* Set cookie value function */
function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 24 * 60 * 60 * 1000));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}
