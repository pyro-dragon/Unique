authModule.service("authService", ["$http", "$cookies", "$location", "jwtHelper", function($http, $cookies, $location, jwtHelper)
{
  var self = this;

  // Check to see if a user is currently logged in and the key is valid
  this.isUserAuthenticated = function()
  {
    // Check the auth token exists, then check that it has not yet expired
    if($cookies.get("authToken") &&
    Math.floor(Date.now() / 1000) <$cookies.get("authTokenExp"))
    {
      return true;
    }

    return false;
  };

  // Get the autentication key
  this.getAuthentication = function()
  {
    return $cookies.get("authToken");
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
        // Save the JWT auth token
				$cookies.put("authToken", response.data);

        // Save the JWT expire date
  			$cookies.put("authTokenExp", jwtHelper.decodeToken(response.data).exp);

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
