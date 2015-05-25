var modal = angular.module('modal', []);

modal.directive('modal', function($compile) {
	return {
		restrict: 'E',
		scope: {
			show: '=',
			content: '=',	
			index: '='	
		},

		templateUrl: 'app/modal/_modal.html',

		compile: function() {
			var link = function(scope, elem, attrs) {
				var title;
				var image;
				
				var titleElem = angular.element(
					document.getElementsByClassName('title-wrapper')
				);

				var imgElem = angular.element(
					document.getElementsByClassName('image-wrapper')
				);

				var appendContent = function() {
					title = angular.element(
						'<span>' + scope.content.title + ':</span>' + 
						scope.content.gallery[scope.index].title
					);

					image = angular.element(
						'<img src="imgs/designs/' + scope.content.gallery[scope.index].src + 
							 '" alt="' + scope.content.gallery[scope.index].title + 
							 '" border="0" />' 
					);

					titleElem.empty();
					imgElem.empty();
					titleElem.append(title);
					imgElem.append(image);
				}

				appendContent();

				scope.next = function() {
					var length = scope.content.gallery.length - 1;

					if( scope.index == length ) {
						scope.index = 0;

					} else {
						scope.index = scope.index + 1;
					}

					appendContent();
				}

				scope.prev = function() {
					var length = scope.content.gallery.length - 1;

					if( scope.index == 0 ) {
						scope.index = length;

					} else {
						scope.index = scope.index - 1;
					}

					appendContent();
				}

				scope.close = function() {
					scope.show = false;
				}
			}

			return link
		}
	}
});