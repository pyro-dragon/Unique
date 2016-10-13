adminModule.controller("adminController", ["$scope", "$http", function($scope, $http)
{
	var self = this;

	$scope.image = {};
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

	$scope.readMethod = "readAsDataURL";

	$scope.onReaded = function(e, file)
	{
		$scope.image = e.target.result;

		$scope.file = file;
	};
}]);