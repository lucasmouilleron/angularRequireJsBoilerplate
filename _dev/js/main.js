/////////////////////////////////////////////////////////////////////
// REQUIREJS CONFIG
/////////////////////////////////////////////////////////////////////
require.config({
    paths: {
        "jquery": "libs/vendor/jquery/dist/jquery",
        "bootstrap": "libs/vendor/bootstrap/dist/js/bootstrap.min",
        "console": "libs/vendor/console/console.min",
        "throbber": "libs/vendor/throbber.js/throbber",
        "tools": "libs/tools",
        "angular": "libs/vendor/angular/angular",
        "angularRoute": "libs/vendor/angular-route/angular-route",
        "angularMocks": "libs/vendor/angular-mocks/angular-mocks",
        "text": "libs/vendor/requirejs-text/text"

    },
    shim: {
        "bootstrap": ["jquery"],
        "throbber": ["jquery"],
        "tools": ["jquery", "console"],
        "angular" : {"exports" : "angular"},
        "angularRoute": ["angular"],
        "angularMocks": {
            deps:["angular"],
            "exports":"angular.mock"
        }
    }
});

/////////////////////////////////////////////////////////////////////
// ENTRY POINT
/////////////////////////////////////////////////////////////////////
//require(["jquery", "angular", "app", "routes", "tools", "bootstrap"], function($, angular, app, routes, tools) {
    require(["jquery", "angular", "tools", "bootstrap"], function($, angular, tools) {
    $(function() {
        tools.displayMainLoader();
        setTimeout(function(){tools.hideMainLoader()}, 2000);
        c("ok");
    });
});