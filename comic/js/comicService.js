comicModule.service("comicService", ["$http", "authService", function($http, authService)
{
	var self = this;

	self.waiting = false; // Something to tell if there is an ongoing communication process happening

	// Standardised response handling format
	function standardResponse(callback)
	{
		return function(response)
		{
			self.waiting = false;

			if(typeof callback === "function")
			{
				callback(response);
			}
		};
	}

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
		.then(standardResponse(success), standardResponse(fail));
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
		.then(standardResponse(success), standardResponse(fail));
	};

	this.editComicPage = function(comicPageID, comicPageData)
	{

	};

	// Retrive the latest comic from the server
	this.getLatestComic = function(success, fail)
	{
		self.waiting = true;
		$http.get("http://localhost:8080/comic/latest", {
			headers: {
				"content-type": "application/json"
			}
		})
		.then(standardResponse(success), standardResponse(fail));
	};

	// Fetch the first comic page from the server
	this.getFirstComic = function(success, fail)
	{
		self.waiting = true;
		$http.get("http://localhost:8080/comic/first", {
			headers: {
				"content-type": "application/json"
			}
		})
		.then(standardResponse(success), standardResponse(fail));
	};

	this.getComicPage = function()
	{

	};
}]);
