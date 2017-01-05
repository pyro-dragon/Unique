indexModule.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "home/partial.html", 
        controller: "homeController"
    })
    .when("/cast", {
        templateUrl: "cast/partial.html", 
        controller: "castController",
        css: "cast/css/style.css"
    })
    .when("/archive", {
        templateUrl: "archive/partial.html", 
        controller: "archiveController"
    });
});