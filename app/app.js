var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/', {
      // templateUrl: 'blank.html'
    })
    // .when('/about', {
      // templateUrl: './app/partials/about.html',
      // controller: 'aboutController'
    // })
    .when('/work', {
      templateUrl: './app/partials/bottomwork.html'
    })
}])
