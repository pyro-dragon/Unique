var indexModule = angular.module("indexModule", [
  // Standard Angular Modules
  "ngRoute",
  "ngFileReader",
  "ngCookies",

  // Custom Angular Modules
  "angularCSS",
  "angular-jwt",
  "ngTagsInput",

  // Application modules
  "authModule",
  "comicModule",
  "homeModule",
  "castModule",
  "archiveModule",
  "adminModule"
]);
