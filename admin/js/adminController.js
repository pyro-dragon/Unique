adminModule.controller("adminController", ["$scope", "$http", "authService", function($scope, $http, authService)
{
	var self = this;

	$scope.image = null;
	$scope.name = "";
	$scope.comments = "";
	$scope.chapter = "";
	$scope.tags = "";

	$scope.uploadComic = function()
	{
		$http.post("http://localhost:8080/comic", {
			"name": $scope.name,
			"image": $scope.image,
			"comments": $scope.comments,
			"chapter": $scope.chapter,
			"tags":  $scope.tags.split(",")

		}, {
			headers: {
				"content-type": "application/json",
				"x-access-token": authService.getAuthentication()
			}
		})
		.then(

			//Success
			function(response)
			{
				$scope.success = true;
			},

			// Fail
			function(error)
			{
				$scope.error = error;
			}
		);
	};

	$scope.readMethod = "readAsDataURL";

	$scope.onReaded = function(e, file)
	{
		$scope.image = e.target.result;

		$scope.file = file;
	};
}]);
