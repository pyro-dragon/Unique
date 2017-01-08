adminModule.controller("adminController", ["$scope", "$http", "$route", "authService", "comicService", function($scope, $http, $route, authService, comicService)
{
	var self = this;

	$scope.image = null;
	$scope.name = "";
	$scope.comments = "";
	$scope.chapter = "";
	$scope.tags = [];
	$scope._id = null;
	$scope._rev = null;

	// Initialise the admin page
	this.initialise = function()
	{
		if($route.current.$$route.edit)
		{
			$scope.image = comicService.currentPage.image;
			$scope.name = comicService.currentPage.name;
			$scope.comments = comicService.currentPage.comments;
			$scope.chapter = comicService.currentPage.chapter;
			angular.forEach(comicService.currentPage.tags, function(value, key)
			{
				$scope.tags.push({text: value});
			});
			$scope._id = comicService.currentPage._id;
			$scope._rev = comicService.currentPage._rev;
		}
	};

	$scope.uploadComic = function()
	{
		var flatTags = [];
		angular.forEach($scope.tags, function(value, key)
		{
			flatTags.push(value.text);
		});
		$http.post("http://localhost:8080/comic", {
			"_id": $scope._id,
			"_rev": $scope._rev,
			"name": $scope.name,
			"image": $scope.image,
			"comments": $scope.comments,
			"chapter": $scope.chapter,
			"tags":  flatTags

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

	this.initialise();
}]);
