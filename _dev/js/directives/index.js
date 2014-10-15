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
    directives.directive("whenScrolled", ["$window", "$timeout", function($window, $timeout) {
        return function(scope, elm, attr) {
            var theWindow = angular.element($window);
            var raw = elm;
            var busy = false;
            var defaultOffset = -40;
            theWindow.bind("scroll", function() {
                if (!busy && $(this).height() + $(this).scrollTop() >= $(raw).outerHeight() + $(raw).offset().top + defaultOffset) {
                    busy = true;
                    scope.$apply(attr.whenScrolled);
                    $timeout(function() {
                        busy = false;
                    }, 2000);
                }
            });
        };
    }]);

    /////////////////////////////////////////////////////////////////////
    // another directive
    // if too many, use one file per directive

});