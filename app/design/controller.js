var design = angular.module('design', []);

home.controller('DesignCtrl', function(Background, $rootScope) {
	Background.setColor('light');
	$rootScope.bgColor = Background.color;
});