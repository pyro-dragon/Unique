adminModule.controller("loginController", ["$scope", "$http", "$cookies", "authService", function($scope, $http, $cookies, authService)
{
	var self = this;
	$scope.error = false;
	$scope.errorMessages = [];

	// The login function, activated by pressing the login button
	$scope.login = function()
	{
		// Reset the error messages for a fresh go at it
		resetErrors();

		// Check that we have valid data before proceeding
		if(!validate())
		{
			// Something went wrong, drop out.
			return false;
		}

		// Log the user in
		authService.login($scope.username, $scope.password, null, function(error){ $scope.error = error; });
	};

	// Return the whole of the validation result
	function validate()
	{
		return validateUsername() && validatePassword();
	}

	// Validate the username field
	function validateUsername()
	{
		// Check the username against a number of conditions
		if(!$scope.username || $scope.username.length <= 0)
		{
			$scope.errorMessages.push("Please enter a username!");
			$scope.error = true;
		}
		else if(!$scope.username.match(/^[a-z0-9 ]+$/i))
		{
			$scope.errorMessages.push("Username contains invalid characters!");
			$scope.error = true;
		}
		else
		{
			// All tests passed!
			return true;
		}

		// One test failed!
		return false;
	}

	// Validate the password field
	function validatePassword()
	{
			// Check the password to see if one got entered
			if(!$scope.password || $scope.password.length <= 0)
			{
				$scope.errorMessages.push("Please enter a password!");
				$scope.error = true;
			}
			else
			{
				// Test passed
				return true;
			}

			// A test failed
			return false;
	}

	// Reset the error messages
	function resetErrors()
	{
		$scope.errorMessages = [];
		$scope.error = false;
	}
}]);
