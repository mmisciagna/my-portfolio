var contact = angular.module('contact', []);

home.controller('ContactCtrl', function(Background, $rootScope) {
	Background.setColor('dark');
	$rootScope.bgColor = Background.color;
});