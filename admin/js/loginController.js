adminModule.controller("loginController", ["$scope", "$http", function($scope, $http)
{
	var self = this;

	// The login function, activated by pressing the login button
	$scope.login = function()
	{
		// Check that we have valid data before proceeding
		if(!validate())
		{
			// Something went wrong, drop out.
			return false;
		}

		// Set up the HTTP call
		$http.post("http://localhost:8080/auth", {
			"name": $scope.username,
			"password": $scope.password
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

	// Return the whole of the validation result
	function validate()
	{
		return validateUsername() && validatePassword();
	}

	// Validate the username field
	function validateUsername()
	{
		// Nullify the error
		$scope.usernameError = undefined;

		// Check the username against a number of conditions
		if(!$scope.username || $scope.username.length)
		{
			$scope.usernameError = "Please enter a username!"
		}
		else if(!$scope.match(/^[a-z0-9]+$/i))
		{
			$scope.usernameError = "Username contains invalid characters!"
		}
		else
		{
			// All tests passed!
			return true;
		}

		// One test failed!
		return false;
	};

	// Validate the password field
	function validatePassword()
	{
			// Nullify the error
			$scope.passwordError = undefined;

			// Check the password to see if one got entered
			if(!$scope.password || $scope.password.length)
			{
				$scope.passwordError = "Please enter a password!"
			}
			else
			{
				// Test passed
				return true;
			}

			// A test failed
			return false;
	}

}]);
