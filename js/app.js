var app = angular.module('app', [
	'ngRoute',
  'appCtrls'
]);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'temps/home.html'

  // }).when('/design', {
  // 	templateUrl: 'temps/design.html',
  //   controller: 'DesignCtrl'

  }).otherwise({
    redirectTo: '/'
  });
});