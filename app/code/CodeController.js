var codeGallery = angular.module('codeGallery', []);

codeGallery.controller('CodeCtrl', function($rootScope, $scope, Code) {
	$rootScope.bgColor = 'light';

	var code = this;

  code.code = Code.items;
});