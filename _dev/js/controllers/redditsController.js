////////////////////////////////////////////////////////////////////
// Controller 1
/////////////////////////////////////////////////////////////////////
define(["./module"], function (controllers) {

    controllers.controller("redditsController", ["$scope", "Reddits", function ($scope, Reddits) {
        var next = 0;
        $scope.theReddits = [];
        $scope.loadMore = function() {
            var promise = Reddits.from(next).then(function(redditsResponse) {
                next = redditsResponse.next;
                for (i in redditsResponse.items) {
                    $scope.theReddits.push(redditsResponse.items[i]);
                }
            });
        };
        $scope.loadMore();
    }]);

});