/////////////////////////////////////////////////////////////////////
// Nav controller
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("navController", ["$scope", "$location", "ngDialog", function ($scope, $location, ngDialog) {
        $scope.routeIs = function(routeName) {
            return $location.path().indexOf(routeName) == 0;
        };        
        $scope.test = "Settings";
        $scope.popin = function() {
            ngDialog.open({
                template: "_dev/js/views/popin.html",
                controller:  "popinController",
                showClose: false,
                closeByEscape: false,
                closeByDocument: false,
                scope : $scope
            });
        }
    }]);

});