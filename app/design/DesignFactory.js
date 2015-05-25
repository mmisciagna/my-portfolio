designGallery.factory('Designs', function() {
  var designs = {};

  designs.items = [
    {
      title: 'AngularDart.org',
      link: 'http://www.angulardart.org',
      src: 'angularDart/site.jpg',
      alt: 'AngularDart.org thumbnail',
      role: 'UI Designer & Prototyper',
      goal: 'Design, develop and launch within in 2 weeks.',
      solution: 'A simple, easy-to-navigate site design that reflected the red/black of AngularJS rather than the  blue/green of Dart.',
      gallery: [
       {title: 'Solution', src: 'angularDart/site.jpg'},
       {title: 'Subpage', src: 'angularDart/subpage.jpg'},
       {title: 'Mobile', src: 'angularDart/mobile.jpg'},
       {title: 'Concept #2', src: 'angularDart/concept2.jpg'},
       {title: 'Concept #1', src: 'angularDart/concept1.jpg'},
       {title: 'Mobile Concept', src: 'angularDart/mobile.jpg'},
       {title: 'Styleguide', src: 'angularDart/styleguide.jpg'},
      ]
    },


    {
      title: 'gAnswers',
      link: 'https://x20web.corp.google.com/~mmisciagna/ganswers/site/index.html',
      src: 'gAnswers/logo.svg',
      alt: 'gAnswers thumbnail',
      role: 'Visual / UI designer & protoyper',
      goal: 'Design and build a Chrome extension for gTechers to post canned response-style answers to common questions, and ensure that it is searchable by all gTechers across all products.',
      solution: 'Created a website and prototype styled after Google’s Material design.',
      gallery: [
       {title: 'Solution', src: 'gAnswers/prototype_main.jpg'},
       {title: 'List View', src: 'gAnswers/prototype_list.jpg'},
       {title: 'Submit View', src: 'gAnswers/prototype_submit.jpg'},
       {title: 'Website', src: 'gAnswers/site.jpg'},
       {title: 'Logo', src: 'gAnswers/full_logo.svg'},
       {title: 'Sketches', src: 'gAnswers/sketches.jpg'},
      ]
    }
  ];

  return designs;
});