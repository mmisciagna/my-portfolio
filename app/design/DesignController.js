var designGallery = angular.module('designGallery', []);

designGallery.controller('DesignCtrl', function($scope, Designs) {
	$scope.index.bgColor = 'light';
	$scope.index.page_title = 'Design';

	var design = this;

  design.designs = Designs.items;
});