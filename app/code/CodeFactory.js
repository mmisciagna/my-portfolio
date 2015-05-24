codeGallery.factory('Code', function($http) {
  var videos = {};

  videos.items = [
    {
      poster: 'placeholder_poster.png',
      title: 'Title',
      link: 'http://www.michaelmisciagna.com',
      youtube: '<iframe src="//www.youtube.com/embed/Os50zJZ9oYU?&controls=2&modestbranding=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>',
      role: 'My role',
      goal: 'The goal',
      solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },

    {
      poster: 'placeholder_2_poster.png',
      title: 'Title',
      link: 'http://www.google.com',
      youtube: '<iframe src="//www.youtube.com/embed/Os50zJZ9oYU?&controls=2&modestbranding=1&rel=0&showinfo=0" frameborder="0" allowfullscreen></iframe>',
      role: 'My role',
      goal: 'The goal',
      solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  return videos;
});