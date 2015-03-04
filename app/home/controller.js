var home = angular.module('home', []);

home.controller('HomeCtrl', function(Background, $rootScope) {
	Background.setColor('dark');
	$rootScope.bgColor = Background.color;
});