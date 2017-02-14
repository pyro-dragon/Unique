comicModule.service("comicService", ["$http", "authService", function($http, authService)
{
  var self = this;

  self.waiting = false; // Something to tell if there is an ongoing communication process happening

  // Upload a new or updated comic page
  this.uploadComicPage = function(newComic, success, fail)
  {
    self.waiting = true;
    $http.post("http://localhost:8080/comic", {
			"_id": newComic._id,
			"_rev": newComic._rev,
			"name": newComic.name,
			"image": newComic.image,
			"comments": newComic.comments,
			"chapter": newComic.chapter,
			"tags":  newComic.tags

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
        self.waiting = false;
				if(typeof success === "function")
        {
          success(response);
        }
			},

			// Fail
			function(error)
			{
        self.waiting = false;
				if(typeof fail === "function")
        {
          fail(error);
        }
			}
		);
  };

  // Send a delete request for a given comic to the server
  this.deleteComicPage = function(comicPageID, comicPageRev, success, fail)
  {
    self.waiting = true;
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
        self.waiting = false;
				if(typeof success === "function")
        {
          success(response);
        }
			},

			// Fail
			function(error)
			{
        self.waiting = false;
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
    self.waiting = true;
    $http.get("http://localhost:8080/comic/latest", {
			headers: {
				"content-type": "application/json"
			}
		})
		.then(
			//Success
			function(response)
			{
        self.waiting = false;
				// Check to see if we got a comic down from the server
				if(response.data)
				{
					self.currentPage = response.data;
				}
			},
			// Fail
			function(error)
			{
        self.waiting = false;
				$scope.error = error;
			}
		);
  };

  this.getComicPage = function()
  {

  };

  this.getLatestComic();
}]);
