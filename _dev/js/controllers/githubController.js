/////////////////////////////////////////////////////////////////////
// Controller 2
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("githubController", ["$scope", "$routeParams", "Repositories", function ($scope, $routeParams, Repositories) {
        $scope.githubUser = $routeParams.anId;
        var promise = Repositories.all($scope.githubUser).then(function(repos) {
            $scope.theRepos = repos;
        });
    }]);

});