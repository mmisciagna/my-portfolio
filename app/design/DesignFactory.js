designGallery.factory('Designs', function() {
  var designs = {};

  designs.items = [
    {
      title: 'AngularDart.org',
      link: 'http://www.angulardart.org',
      src: 'thumb_angularDart.png',
      alt: 'AngularDart.org thumbnail',
      role: 'UI Designer & Prototyper',
      goal: 'Design, develop and launch within in 2 weeks.',
      solution: 'A simple, easy-to-navigate site design that reflected the red/black of AngularJS rather than the  blue/green of Dart.',
      gallery: [
       {title: 'title 1', src: 'src', alt: 'alt'},
       {title: 'title 2', src: 'src', alt: 'alt'},
       {title: 'title 3', src: 'src', alt: 'alt'},
       {title: 'title 4', src: 'src', alt: 'alt'},
       {title: 'title 5', src: 'src', alt: 'alt'},
       {title: 'title 6', src: 'src', alt: 'alt'},
       {title: 'title 7', src: 'src', alt: 'alt'},
      ]
    },


    {
      title: 'gAnswers',
      link: 'https://x20web.corp.google.com/~mmisciagna/ganswers/site/index.html',
      src: 'thumb_gAnswers.svg',
      alt: 'gAnswers thumbnail',
      role: 'Visual / UI designer & protoyper',
      goal: 'Design and build a Chrome extension for gTechers to post canned response-style answers to common questions, and ensure that it is searchable by all gTechers across all products.',
      solution: 'Created a website and prototype styled after Google’s Material design.',
      gallery: [
       {title: 'title', src: 'src', alt: 'alt'},
       {title: 'title', src: 'src', alt: 'alt'},
       {title: 'title', src: 'src', alt: 'alt'},
       {title: 'title', src: 'src', alt: 'alt'},
       {title: 'title', src: 'src', alt: 'alt'},
       {title: 'title', src: 'src', alt: 'alt'},
      ]
    }
  ];

  return designs;
});