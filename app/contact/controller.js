var contact = angular.module('contact', []);

home.controller('ContactCtrl', function(Init, $rootScope) {
	Init.setBgColor('dark');
	$rootScope.bgColor = Init.bgColor;
});