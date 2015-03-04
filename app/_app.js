var app = angular.module('app', [
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

  }).when('/bio', {
  	templateUrl: 'app/about/_about.html',
    controller: 'AboutCtrl as about'

  }).when('/contact', {
  	templateUrl: 'app/contact/_contact.html',
  	controller: 'ContactCtrl as contact'

  }).otherwise({
    redirectTo: '/home'
  });
});

// gives body element class of 'dark' or 'light'
app.factory('Background', function() {
	return {
		color: undefined,
		setColor: function(color) {
			if( color == 'light' ) {
				return this.color = color;
			} else {
				return this.color = 'dark';
			}
		}
	}
});