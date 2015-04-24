codeGallery.factory('Code', function() {
  var videos = {};

  videos.items = [
    {
      title: 'Title',
      link: 'http://www.michaelmisciagna.com',
      srcType: [
        {src: 'video_src.mp4', type: 'mp4'},
        {src: 'video_src.webm', type: 'webm'},
        {src: 'video_src.ogg', type: 'ogg' }
      ],
      role: 'My role',
      goal: 'The goal',
      solution: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ];

  return videos;
});