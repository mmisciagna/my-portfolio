var home = angular.module('home', []);

home.controller('HomeCtrl', function(Init, $rootScope) {
	Init.setBgColor('dark');
	$rootScope.bgColor = Init.bgColor;
});