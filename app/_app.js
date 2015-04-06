var app = angular.module('app', [
    'ng.deviceDetector',
    // 'matchmedia-ng', 
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


app.controller('IndexCtrl', function(deviceDetector, $location, $scope, $window) {
  // set nav & bg color
  this.nav = [
    {label: 'home'},
    {label: 'design'},
    {label: 'code'},
    {label: 'about'},
    {label: 'contact'}
  ];

  // set active nav
  this.setActive = function(path) {
    return path === $location.path();
  }


  // DEVICE
  if( deviceDetector.device == 'unknown' ) {
    $scope.index.mobile = false;

  } else {
    $scope.index.mobile = true;
  }


  // MEDIAQUERIES
  // on load
  $scope.$watch(function() {
    return window.innerWidth;

  }, function(width) {
    if( width <= 768 ) {
      $scope.index.mobile = true;

    } else {
      $scope.index.mobile = false;
    }

    console.log('Mobile = ' + $scope.index.mobile);
  });

  // on resize
  $window.onresize = function() {
    var width = window.innerWidth;

    if( width <= 768 ) {
      $scope.$apply(function() {
        $scope.index.mobile = true;
      });

    } else {
      $scope.$apply(function() {
        $scope.index.mobile = false;
      });
    }

    console.log('Mobile = ' + $scope.index.mobile);
  };
});


// capitalize first letter of str
app.filter('capitalize', function() {
  return function(str) {
    return str.substring(0,1).toUpperCase() + str.substring(1);
  }
});















