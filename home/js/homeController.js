homeModule.controller("homeController", ["$scope", "$http", "$location", "comicService", function($scope, $http, $location, comicService)
{
	$scope.currentPage = {};

	// A function to set a successfully retrived comic page as the curret page
	function applyToCurrentPage(response)
	{
		if(response.data)
		{
			$scope.currentPage = response.data;
		}
	};

	// A function to get the error out if something went wrong retriving a comic page
	function getError(response)
	{
		if(response.data)
		{
			$scope.error = response.data;
		}
	}

	$scope.getLatestComic = function()
	{
		comicService.getLatestComic(applyToCurrentPage, getError);
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
		comicService.getFirstComic(applyToCurrentPage, getError);
	};

	// Go to the previous comic
	$scope.gotToPrev = function()
	{
		comicService.getComicPage($scope.currentPage.previous, applyToCurrentPage, getError);
	};

	// Go to the next comic
	$scope.goToNext = function()
	{
		comicService.getComicPage($scope.currentPage.next, applyToCurrentPage, getError);
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
