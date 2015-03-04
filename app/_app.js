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


app.factory('Init', function() {
	return {
    nav: [
      {label:'home'},
      {label:'design'},
      {label:'code'},
      {label:'about'},
      {label:'contact'},
    ]
	}
});


app.controller('IndexCtrl', function(Init, deviceDetector, $location) {
  this.nav = Init.nav;

  if( deviceDetector.device == 'unknown' ) {
    this.desktop = true;
  }

  this.setActive = function(path) {
    return path === $location.path();
  }
});















