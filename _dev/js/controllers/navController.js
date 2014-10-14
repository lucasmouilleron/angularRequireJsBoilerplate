/////////////////////////////////////////////////////////////////////
// Nav controller
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("navController", ["$scope", "$location", function ($scope, $location) {
        $scope.routeIs = function(routeName) {
            return $location.path().indexOf(routeName) == 0;
        };        
    }]);

});