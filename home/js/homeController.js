homeModule.controller("homeController", ["$scope", "$http", function($scope, $http)
{
	getLatestComic = function()
	{
		$http.get("http://localhost:8080/comics/latest", {
			headers: {
				"content-type": "application/json"
			}
		})
		.then(

			//Success
			function(response)
			{
				$scope.data = response.data;
				$scope.data["date-published"] = new Date($scope.data["date-published"]*1000);
			},

			// Fail
			function(error)
			{
				$scope.error = error;
			}
		);
	};

	getLatestComic();
}]);
