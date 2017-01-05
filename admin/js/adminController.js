adminModule.controller("adminController", ["$scope", "$http", function($scope, $http)
{
	var self = this;

	$scope.image = null;
	$scope.name = "";
	$scope.comments = "";
	$scope.chapter = "";
	$scope.tags = "";

	$scope.uploadComic = function()
	{
		$http.post("http://localhost:8080/comics", {
			"name": $scope.name,
			"image": $scope.image,
			"comments": $scope.comments,
			"chapter": $scope.chapter,
			"tags":  $scope.tags.split(",")

		}, {
			headers: {
				"content-type": "application/json"
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
