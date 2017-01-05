castModule.directive("skillCard", function()
{
	return{
		restrict: "E",
		templateUrl: "cast/skillCardTemplate.html", 
		scope: {
			name: "@skillName", 
			image: "@img", 
			caption: "@caption", 
			link: "@href"
		}, 
		controller: function($scope){
			var name = $scope.skillName;
			var image = $scope.image;
			var caption = $scope.caption;
			var link = $scope.link;
		}
	};
});