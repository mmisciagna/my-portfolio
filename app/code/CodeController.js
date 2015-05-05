var codeGallery = angular.module('codeGallery', []);

codeGallery.controller('CodeCtrl', function($rootScope, $scope, Code) {
	$rootScope.bgColor = 'light';

	var code = this;

	code.videos = Code.items;

  // Code.items().success(function(data) {
  //   code.code = data;

  // }).error(function() {
  //   console.log('Error loading in code items.');
  // });

  code.videoIndex = function(i) {
    console.log(i);
  	code.index = i;
  }
});