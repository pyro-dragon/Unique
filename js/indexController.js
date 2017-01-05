indexModule.controller("indexController", function($scope, authService)
{
  // Make the auth service visible to the scope
  $scope.authService = authService;
});
