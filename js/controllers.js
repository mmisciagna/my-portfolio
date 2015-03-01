var appCtrls = angular.module('appCtrls', []);


appCtrls.controller('MainCtrl', function($scope, $location, $timeout, $window) {
	/**
	 * detect if touch device
	 */
	if('ontouchstart' in document.documentElement) {
		$scope.mobile = true;
	} else {
		$scope.mobile = false;
	}

	/**
	 * nav items
	 */
	$scope.nav = {};
	$scope.nav.items = [
		{label: 'Home', path: '/'},
		{label: 'Designer', path: '/designer'},
		{label: 'Developer', path: '/developer'},
		{label: 'About', path: '/about'},
		{label: 'Contact', path: '/contact'}
	];


	/**
	 * set 'active' class on nav
	 */
	$scope.setActive = function(route) {
		return route === $location.path();
	};


	/**
	 * set height of view
	 */
	$scope.setHeight = function() {
		$scope.$apply(function() {
			$scope.viewHeight = $window.innerHeight - 120 + 'px';
			$scope.topHeight = '72px';
		});
	}

	$window.onload = $timeout(function() {
		$scope.setHeight();
	}, 250);

	$window.onresize = $scope.setHeight;
});