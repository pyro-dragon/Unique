indexModule.run(function($rootScope, $cookies, $location)
{
    // Register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current)
    {
      // Check to see if we are trying to access a path requiring authorization
      if(next.$$route.authorization)
      {
        // Check if we have an authorization key already
        var auth = $cookies.get("authToken");
        if (!$cookies.get("authToken"))
        {
          // No logged user, check if we are on our way to login...
          if (next.templateUrl != "admin/login.html")
          {
            // Login page was not the next place so lets go there now
            $location.path( "/login" );
          }
        }
      }
    });
 });

indexModule.config(function($routeProvider)
{
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
        controller: "adminController",
        authorization: true
    })
    .when("/login", {
        templateUrl: "admin/login.html",
        controller: "loginController"
    });
});
