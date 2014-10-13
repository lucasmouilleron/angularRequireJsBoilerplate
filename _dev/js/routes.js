/////////////////////////////////////////////////////////////////////
// Routes
/////////////////////////////////////////////////////////////////////
define(["app"], function(app) {
	
	return app.config(["$routeProvider", function($routeProvider) {

		/////////////////////////////////////////////////////////////////////
		$routeProvider.when("/view1", {
			templateUrl: "_dev/js/views/view1.html",
			controller: "controller1"
		});

		/////////////////////////////////////////////////////////////////////
		$routeProvider.when("/view2", {
			templateUrl: "_dev/js/views/view2.html",
			controller: "controller2"
		});

		/////////////////////////////////////////////////////////////////////
		$routeProvider.otherwise({redirectTo: "/view1"});
		
	}]);

});
