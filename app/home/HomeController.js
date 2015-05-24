var home = angular.module('home', []);

home.controller('HomeCtrl', function($scope) {
	$scope.index.bgColor = 'dark';
	$scope.index.page_title = 'Home';
});