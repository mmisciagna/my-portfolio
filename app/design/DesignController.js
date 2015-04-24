var designGallery = angular.module('designGallery', []);

designGallery.controller('DesignCtrl', function($rootScope, Designs) {
	$rootScope.bgColor = 'light';

	var design = this;

  design.designs = Designs.items;
});