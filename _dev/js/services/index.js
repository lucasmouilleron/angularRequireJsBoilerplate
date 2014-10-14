/////////////////////////////////////////////////////////////////////
// Services index (shortcut for future inclusions)
/////////////////////////////////////////////////////////////////////
define(["./module", "tools"], function (services, tools) {

    /////////////////////////////////////////////////////////////////////
    services.value("version", "0.1");
    
    /////////////////////////////////////////////////////////////////////
    services.factory("Repositories", ["$http", "$q", "growl", function($http, $q, growl) {
        var repos = {};
        return {
            all: function() {
                var deferred = $q.defer();
                if(tools.isEmpty(repos)) {
                    growl.info("Loading repositories from REST");
                    $http.get("https://api.github.com/users/lucasmouilleron/repos").success(function(data, status, headers, config) {
                        growl.success("Repositories loaded from REST");
                        repos = data;
                        deferred.resolve(repos);
                    });
                }
                else {
                    growl.success("Repositories loaded from cache");
                    deferred.resolve(repos);
                }
                return deferred.promise;
            }
        }
    }]);

    /////////////////////////////////////////////////////////////////////
    // another service
    // if too many, use one file per service

});