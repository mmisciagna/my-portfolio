var codeGallery = angular.module('codeGallery', []);

codeGallery.controller('CodeCtrl', function($scope, Code) {
	$scope.index.bgColor = 'light';
	$scope.index.page_title = 'Coding';

	var code = this;

	code.videos = Code.items;
});