var code = angular.module('code', []);

home.controller('CodeCtrl', function(Background, $rootScope) {
	Background.setColor('light');
	$rootScope.bgColor = Background.color;
});