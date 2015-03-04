var about = angular.module('about', []);

home.controller('AboutCtrl', function(Init, $rootScope) {
	Init.setBgColor('dark');
	$rootScope.bgColor = Init.bgColor;
});