/////////////////////////////////////////////////////////////////////
// Controller 2
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("controller2", ["$scope", "$routeParams", function ($scope, $routeParams) {
        $scope.welcomeMessage = "hey this is myctrl2.js and the id is "+$routeParams.anId;
    }]);

});