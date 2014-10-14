/////////////////////////////////////////////////////////////////////
// Nav controller
/////////////////////////////////////////////////////////////////////
define(["./module", "services/index"], function (controllers) {

    controllers.controller("navController", ["$scope", "$location", function ($scope, $location) {
        $scope.routeIs = function(routeName) {
            return $location.path() === routeName;
        };        
    }]);

});