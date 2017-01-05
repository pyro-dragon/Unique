adminModule.service("authService", ["$http", "$cookies", "$location", function($http, $cookies, $location)
{
  var self = this;

  // Check to see if a user is currently logged in
  this.userLoggedIn = function()
  {
    if($cookies.get("authToken"))
    {
      return true;
    }

    return false;
  };

  // Submit a login request
  this.login = function(username, password, pass, fail)
  {
    $http.post("http://localhost:8080/auth", {
			"username": username,
			"password": password
		})
		.then(
			//Success
			function(response)
			{
				$cookies.put("authToken", response.data);

        // Execute optional success function
        if(typeof pass === "function")
        {
          pass(response);
        }
			},

			// Fail
			function(error)
			{
        // Execute optional success function
        if(typeof fail === "function")
        {
          fail(error);
        }
			}
		);
  };

  // Invalidate the session
  this.logout = function()
  {
    // Nullify the cookie
    $cookies.remove("authToken");

    // Go back to the home page
    $location.url("/");
  };
}]);
