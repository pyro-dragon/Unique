comicModule.service("comicService", ["$http", "authService", function($http, authService)
{
  var self = this;

  this.uploadComicPage = function(newComic)
  {

  };

  // Send a delete request for a given comic to the server
  this.deleteComicPage = function(comicPageID, comicPageRev, success, fail)
  {
		$http.delete("http://localhost:8080/comic/" + comicPageID + "/" + comicPageRev, {
			headers: {
				"content-type": "application/json",
				"x-access-token": authService.getAuthentication()
			}
		})
		.then(

			//Success
			function(response)
			{
				if(typeof success === "function")
        {
          success(response);
        }
			},

			// Fail
			function(error)
			{
				if(typeof fail === "function")
        {
          fail(error);
        }
			}
		);
  };

  this.editComicPage = function(comicPageID, comicPageData)
  {

  };

  this.getLatestComic = function()
  {
    $http.get("http://localhost:8080/comic/latest", {
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
					self.currentPage = response.data;
				}
			},
			// Fail
			function(error)
			{
				$scope.error = error;
			}
		);
  };

  this.getComicPage = function()
  {

  };

  this.getLatestComic();
}]);
