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

  };

  this.getComicPage = function()
  {

  };
}]);
