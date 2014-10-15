/////////////////////////////////////////////////////////////////////
// Directives index (shortcut for future inclusions)
/////////////////////////////////////////////////////////////////////
define(["./module", "jquery"], function (directives) {

    /////////////////////////////////////////////////////////////////////
    directives.directive("appVersion", ["version", function(version) {
        return function(scope, elm, attrs) {
            elm.text(version);
        };
    }]);

    /////////////////////////////////////////////////////////////////////
    directives.directive("whenScrolled", ["$window", function($window) {
        return function(scope, elm, attr) {
            theWindow = angular.element($window);
            var raw = elm;
            theWindow.bind("scroll", function() {
                if ($(this).height()+$(this).scrollTop() >= $(raw).outerHeight() + $(raw).offset().top) {
                    scope.$apply(attr.whenScrolled);
                }
            });
        };
    }]);

    /////////////////////////////////////////////////////////////////////
    // another directive
    // if too many, use one file per directive

});