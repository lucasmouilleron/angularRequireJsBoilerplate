////////////////////////////////////////////////////////////////////
// Controller 1
/////////////////////////////////////////////////////////////////////
define(["./module", "services/index"], function (controllers) {

    controllers.controller("controller1", ["$scope", "Repositories", function ($scope, Repositories, growl) {

        var promise = Repositories.all().then(function(repos) {
            $scope.theRepos = repos;
        });

    }]);

});