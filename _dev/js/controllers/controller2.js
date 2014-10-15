/////////////////////////////////////////////////////////////////////
// Controller 2
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("controller2", ["$scope", "$routeParams", "Repositories", function ($scope, $routeParams, Repositories) {
        $scope.welcomeMessage = "hey this is myctrl2.js and the id is "+$routeParams.anId;
        var promise = Repositories.all().then(function(repos) {
            $scope.theRepos = repos;
        });
    }]);

});