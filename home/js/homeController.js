homeModule.controller("homeController", ["$scope", "$http", "$location", "comicService", function($scope, $http, $location, comicService)
{
	$scope.currentPage = {};

	$scope.getLatestComic = function()
	{
		comicService.getLatestComic(
			// Success
			function(response)
			{
				if(response.data)
				{
					$scope.currentPage = response.data;
				}
			},
			// Fail
			function(error)
			{
				if(error.data)
				{
					$scope.error = error.data;
				}
			}
		);
	};

	// Delete the currently visible comic page
	$scope.deleteComicPage = function()
	{
		comicService.deleteComicPage($scope.data._id, $scope.data._rev);
	};

	//-----------
	// Navigation
	//-----------

	// Go to the first comic
	$scope.goToFirst = function()
	{
		comicService.getFirstComic();
	};

	// Go to the previous comic
	$scope.gotToPrev = function()
	{

	};

	// Go to the next comic
	$scope.goToNext = function()
	{

	};

	// Go to the latest comic
	$scope.goToLatest = function()
	{
		// Just get the latest
		$scope.getLatestComic();
	};

	// Initial function
	$scope.getLatestComic();
}]);
