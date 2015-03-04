var about = angular.module('about', []);

home.controller('AboutCtrl', function(Background, $rootScope) {
	Background.setColor('dark');
	$rootScope.bgColor = Background.color;
});