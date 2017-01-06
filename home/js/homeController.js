homeModule.controller("homeController", ["$scope", "$http", "comicService", function($scope, $http, comicService)
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
				// Check to see if we got a comic down from the server
				if(response.data)
				{
					$scope.data = response.data;
					$scope.data["date-published"] = new Date($scope.data["date-published"]*1000);
				}
			},

			// Fail
			function(error)
			{
				$scope.error = error;
			}
		);
	};

	// Delete the currently visible comic page
	$scope.deleteComicPage = function()
	{
		comicService.deleteComicPage($scope.data._id, $scope.data._rev);
	};

	getLatestComic();
}]);
