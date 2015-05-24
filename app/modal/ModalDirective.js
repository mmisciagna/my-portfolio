var modal = angular.module('modal', []);

modal.directive('modal', function($timeout) {
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
				scope.close = function() {
					scope.show = false;
				}

				// set video content
				var	video_content = angular.element(
					'<div class="video-wrapper">' +
					  '<iframe src="' + scope.content.youtube + '?autoplay=1&controls=2&modestbranding=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>' +
					'</div>'
				);

				// do stuff if video modal
				if( attrs.type === 'video' ) {
					elem.append(video_content);
				}
			}

			return link
		}
	}
});