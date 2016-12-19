var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      // templateUrl: 'blank.html'
    })
    .when('/about', {
      templateUrl: './app/partials/about.html',
      // controller: 'homeController'
    });
}])
