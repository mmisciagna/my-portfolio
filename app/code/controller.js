var code = angular.module('code', []);

home.controller('CodeCtrl', function(Init, $rootScope) {
	Init.setBgColor('light');
	$rootScope.bgColor = Init.bgColor;
});