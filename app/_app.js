var app = angular.module('app', [
    'ng.deviceDetector', 
		'ngRoute',
		'home', 
		'design', 
		'code', 
		'about', 
		'contact'
	]);


app.config(function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'app/home/_home.html',
    controller: 'HomeCtrl as home'

  }).when('/design', {
  	templateUrl: 'app/design/_design.html',
    controller: 'DesignCtrl as design'

  }).when('/code', {
  	templateUrl: 'app/code/_code.html',
    controller: 'CodeCtrl as code'

  }).when('/about', {
  	templateUrl: 'app/about/_about.html',
    controller: 'AboutCtrl as about'

  }).when('/contact', {
  	templateUrl: 'app/contact/_contact.html',
  	controller: 'ContactCtrl as contact'

  }).otherwise({
    redirectTo: '/home'
  });
});



app.controller('IndexCtrl', function(deviceDetector, $location, $scope) {
  // set nav & bg color
  this.nav = [
    {label: 'home'},
    {label: 'design'},
    {label: 'code'},
    {label: 'about'},
    {label: 'contact'}
  ];

  // detect device
  if( deviceDetector.device == 'unknown' ) {
    this.mobile = false;
    console.log('Desktop');

  } else {
    this.mobile = true;
    console.log('Mobile');
  }

  // set active nav
  this.setActive = function(path) {
    return path === $location.path();
  }
});


// capitalize first letter of str
app.filter('capitalize', function() {
  return function(str) {
    return str.substring(0,1).toUpperCase() + str.substring(1);
  }
});


// detect window resize
app.directive('body', function ($window) {
  return {
    restrict: 'E',
    link: function(scope) {
      angular.element($window).on('resize', function() {
        if($window.innerWidth <= 768) {
          scope.index.mobile = true;

        } else {
          scope.index.mobile = false;
        }
      });
    }
  }
});
















