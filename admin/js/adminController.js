adminModule.controller("adminController", ["$scope", "$http", function($scope, $http)
{
	var self = this;

	$scope.data = {
		"image": null,
		"name": "", 
		"comments": "",
		"chapter": "",
		"tags": ""
	};

	$scope.uploadComic = function()
	{
		// Process the tags
		$scope.data.tags = $scope.data.tags.split(",");

		$http.post("http://localhost:8080/comics", $scope.data, {
			headers: {
				"content-type": "application/json"
			}
		})
		.then(

			//Success
			function(response)
			{
				$scope.success = response.data;
				$scope.data.tags = "";
			}, 

			// Fail
			function(error)
			{
				$scope.error = error;
				$scope.data.tags = "";
			}
		);
	};
}]);