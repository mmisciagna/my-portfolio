codeGallery.factory('Code', function($http) {
  var videos = {};

  videos.items = [
    {
      poster: 'placeholder_poster.png',
      title: 'Title',
      link: 'http://www.michaelmisciagna.com',
      srcType: [
        {src: 'videos/placeholder.mp4', type: 'mp4'},
        {src: 'videos/placeholder.webm', type: 'webm'},
        {src: 'videos/placeholder.ogg', type: 'ogg' }
      ],
      role: 'My role',
      goal: 'The goal',
      solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    {
      poster: 'placeholder_2_poster.png',
      title: 'Title',
      link: 'http://www.google.com',
      srcType: [
        {src: 'videos/placeholder_2.mp4', type: 'mp4'},
        {src: 'videos/placeholder_2.webm', type: 'webm'},
        {src: 'videos/placeholder_2.ogg', type: 'ogg' }
      ],
      role: 'My role',
      goal: 'The goal',
      solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  // var url = 'https://mycoding.firebaseio.com/.json';

  // videos.items = function() {
  //   return $http.jsonp(url + '?callback=JSON_CALLBACK');
  // };

  return videos;
});