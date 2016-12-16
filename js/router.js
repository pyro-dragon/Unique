indexModule.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "home/partial.html",
        controller: "homeController",
        css: "home/css/style.css"
    })
    .when("/cast", {
        templateUrl: "cast/partial.html",
        controller: "castController"
    })
    .when("/archive", {
        templateUrl: "archive/partial.html",
        controller: "archiveController",
        css: "archive/css/style.css"
    })
    .when("/admin", {
        templateUrl: "admin/partial.html",
        controller: "adminController"
    })
    .when("/login", {
        templateUrl: "admin/login.html",
        controller: "loginController"
    });
});
