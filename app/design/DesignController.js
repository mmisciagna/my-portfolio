var design = angular.module('design', []);

design.controller('DesignCtrl', function($rootScope, Designs) {
	$rootScope.bgColor = 'light';

  this.designs = Designs.items;
});