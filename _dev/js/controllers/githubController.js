/////////////////////////////////////////////////////////////////////
// Github controller
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("githubController", ["$scope","$q","$routeParams", "Github", function ($scope, $q, $routeParams, Github) {
        var promises = [];
        $scope.githubUser = $routeParams.anId;
        var promise = Github.all($scope.githubUser).then(function(repos) {
            $scope.theRepos = repos;
        });
        promises.push(promise);
        
        $q.all(promises).then(function() {
            $scope.$parent.status = "ready";
        });
    }]);

});