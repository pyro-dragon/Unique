indexModule.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "home/partial.html", 
        controller: "homeController"
    })
    .when("/home", {
        templateUrl: "home/partial.html", 
        controller: "homeController"
    })
    .when("/cv", {
        templateUrl: "cv/partial.html", 
        controller: "cvController",
        css: "cv/css/style.css"
    })
    .when("/projects", {
        templateUrl: "projects/partial.html", 
        controller: "projectsController"
    })
    .when("/contact", {
        templateUrl: "contact/partial.htm", 
        controller: "contactController"
    });
});