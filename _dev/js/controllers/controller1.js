/////////////////////////////////////////////////////////////////////
// Controller 1
/////////////////////////////////////////////////////////////////////
define(["./module", "services/index"], function (controllers) {

    controllers.controller("controller1", ["$scope", "version", function ($scope, version) {
        $scope.scopedAppVersion = version;
    }]);

});