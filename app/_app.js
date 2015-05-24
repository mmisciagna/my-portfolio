var app = angular.module('app', [
    'ng.deviceDetector',
    'ngRoute',
		'ngSanitize',
		'home', 
		'designGallery', 
		'codeGallery', 
		'about', 
    'contact',
		'modal'
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


app.controller('IndexCtrl', function(deviceDetector, $location, $scope, $window,
  $timeout, $sce) {

  var index = this;

  // NAV & BG COLOR
  index.nav = [
    {label: 'home'},
    {label: 'design'},
    {label: 'code'},
    {label: 'about'},
    {label: 'contact'}
  ];

  // set active nav
  index.setActive = function(path) {
    return path === $location.path();
  }

  // DEVICE DETECTION
  if( deviceDetector.device == 'unknown') {
    $scope.index.noTouch = true;

  } else {
    $scope.index.noTouch = false;
  }


  // show modal
  index.showModal = function(content) {
    index.modal = true;
    index.gallery_item = content;
  }

  // safe HTML
  index.safeHTML = function(html) {
    return $sce.trustAsHtml(html);
  };


  // MEDIAQUERIES
  // on load
  $scope.$watch(function() {
    return window.innerWidth;

  }, function(width) {
    if( width <= 640 ) {
      $scope.index.mobile = true;

      $timeout(function() {
        $scope.index.menuReady = true;
      });

    } else {
      $scope.index.mobile = false;
      $scope.index.menuReady = false;
      $scope.index.menuActive = false;
    }
  });

  // on resize
  $window.onresize = function() {
    var width = window.innerWidth;

    if( width <= 640 ) {
      $scope.$apply(function() {
        $scope.index.mobile = true;

        $timeout(function() {
          $scope.index.menuReady = true;
        });
      });

    } else {
      $scope.$apply(function() {
        $scope.index.mobile = false;
        $scope.index.menuReady = false;
        $scope.index.menuActive = false;
      });
    }
  };
});


// CAPITALIZE FIRST LETTER OF STR
app.filter('capitalize', function() {
  return function(str) {
    return str.substring(0,1).toUpperCase() + str.substring(1);
  }
});















