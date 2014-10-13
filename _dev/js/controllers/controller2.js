/////////////////////////////////////////////////////////////////////
// Controller 2
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("controller2", ["$scope", function ($scope) {
        $scope.welcomeMessage = "hey this is myctrl2.js!";
    }]);

});