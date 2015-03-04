var design = angular.module('design', []);

home.controller('DesignCtrl', function(Init, $rootScope) {
	Init.setBgColor('light');
	$rootScope.bgColor = Init.bgColor;
});