var modal = angular.module('modal', []);

modal.directive('modal', function() {
	return {
		restrict: 'E',
		scope: {
			show: '=',
			content: '='		
		},
		template: '<div class="overlay" ng-click="close()"></div>',
		compile: function() {
			// linking function
			var link = function(scope, elem, attrs) {
				elem.append(
					'<div class="gallery">' + 
						scope.content.title + 
						scope.content.src + 
						scope.content.alt + 
					'</div>'
				);

				scope.close = function() {
					scope.show = false;
				}
			}

			return link
		}
	}
});