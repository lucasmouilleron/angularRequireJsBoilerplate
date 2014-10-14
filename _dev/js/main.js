/////////////////////////////////////////////////////////////////////
// RequireJs config
/////////////////////////////////////////////////////////////////////
require.config({
    baseUrl: "_dev/js",
    paths: {
        "jquery": "libs/vendor/jquery/dist/jquery",
        "bootstrap": "libs/vendor/bootstrap/dist/js/bootstrap.min",
        "console": "libs/vendor/console/console.min",
        "throbber": "libs/vendor/throbber.js/throbber",
        "tools": "libs/tools",
        "angular": "libs/vendor/angular/angular",
        "angularRoute": "libs/vendor/angular-route/angular-route",
        "angularAnimate": "libs/vendor/angular-animate/angular-animate",
        "angularMocks": "libs/vendor/angular-mocks/angular-mocks",
        "text": "libs/vendor/requirejs-text/text",
        "domReady": "libs/vendor/requirejs-domready/domReady"
    },
    shim: {
        "bootstrap": ["jquery"],
        "throbber": ["jquery"],
        "tools": ["jquery", "console"],
        "angular" : {"exports" : "angular"},
        "angularRoute": ["angular"],
        "angularAnimate": ["angular"]
    }
});

/////////////////////////////////////////////////////////////////////
// RequireJs entry point
/////////////////////////////////////////////////////////////////////
require(["angular", "app", "routes", "bootstrap"], function (angular) {

    require(["domReady!"], function (document) {
        angular.bootstrap(document, ["app"]);
    });
    
});