designGallery.factory('Designs', function() {
  var designs = {};

  designs.items = [ 
    {
      title: 'AngularDart.org',
      link: 'http://www.angulardart.org',
      src: 'angularDart/thumb.png',
      alt: 'AngularDart.org thumbnail',
      role: 'UI Designer & Prototyper',
      goal: 'Design, develop and launch within in 2 weeks.',
      solution: 'A simple, easy-to-navigate site design that reflected the red/black of AngularJS rather than the  blue/green of Dart.',
      gallery: [
       {title: 'Solution', src: 'angularDart/site.jpg'},
       {title: 'Subpage', src: 'angularDart/subpage.jpg'},
       {title: 'Mobile', src: 'angularDart/mobile.png'},
       {title: 'Concept #2', src: 'angularDart/concept2.jpg'},
       {title: 'Concept #1', src: 'angularDart/concept1.jpg'},
       {title: 'Mobile Concept', src: 'angularDart/mobile_concept.png'},
       {title: 'Styleguide', src: 'angularDart/styleguide.jpg'},
      ]
    },

    {
      title: 'Advertiser Training',
      link: false,
      src: 'adTraining/mark.svg',
      role: 'Visual designer',
      goal: 'Redesign Google\'s Advertiser Training logo to reflect multiple facets of gTech coming together to one centralized location for all of their training needs. The mark should be recognizable alone without the text.',
      solution: 'After some back and forth with the Advertiser Training team and by chiseling away at my refined concepts, I created what came to be the solution to the Advertiser Training team\'s logo problem. A simplified segmented "a" painted in Google colors that brings back memories of practicing your lowercase "a"s in grade school on wide-ruled paper.',
      gallery: [
       {title: 'Solution', src: 'adTraining/full.svg'},
       {title: 'Refined Concepts', src: 'adTraining/refined_concepts.svg'},
       {title: 'Early Concepts', src: 'adTraining/early_concepts.svg'},
       {title: 'Sketches', src: 'adTraining/sketches.jpg'}
      ]
    },

    {
      title: 'Custom Ink',
      link: false,
      src: 'customInk/cropped.jpg',
      role: 'Visual, interaction designer and developer',
      goal: 'Promote Custom Ink\'s back to school t-shirt design contest. Whatever activity brings you and your friends together, you\'ll need shirts to go with it.',
      solution: 'A contest for young, hip students should be fun… or at least nice to look at. I used vibrant colors, sporty wallpapers, angled elements and texture that gives the design depth and a resemblance of fabric. Always a stickler to keep things simple, the content areas are on a soild color so as to not overwhelm the user.',
      gallery: [
       {title: 'Solution', src: 'customInk/landing.jpg'},
       {title: 'Details', src: 'customInk/details.jpg'},
       {title: 'Entries', src: 'customInk/entries.jpg'}
      ]
    },

    {
      title: 'gAnswers',
      link: 'https://x20web.corp.google.com/~mmisciagna/ganswers/site/index.html',
      src: 'gAnswers/logo.svg',
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
    },

    {
      title: 'Travel Alberta',
      link: false,
      src: 'travelAlberta/cropped.jpg',
      role: 'Visual and interaction designer',
      goal: 'Create a better brand experience keeping people within the Travel Alberta channel watching their videos. The channel needs to be capable of displaying multiple languages that can speak to their vatious markets.',
      solution: 'I created a simple, responsive masonry-style design that calls out various videos by size. The size of each video is determined by the number of views it has on YouTube. This allows the users to quickly find which videos are most popular. This keeps them engaged on the page which is what Travel Alberta wants.',
      gallery: [
       {title: 'Solution', src: 'travelAlberta/concept.jpg'},
       {title: 'Video', src: 'travelAlberta/video.jpg'}
      ]
    },

    {
      title: 'Wildfire Design Docs',
      link: false,
      src: 'wfDesignDocs/thumb.png',
      role: 'Visual, interaction designer and developer',
      goal: 'While on the Wildfire full-service team, I noticed one annoying detail about our clients\' designs. They didn\'t fit too well into our products. It was like trying to fit a square peg into a round hole, as they say. It resulted in a lot of hacky coding.',
      solution: 'I took the initiative to design and build out documentation of design best practices specifically for Wildfire products.',
      gallery: [
       {title: 'Solution', src: 'wfDesignDocs/homepage.jpg'},
       {title: 'Subpage', src: 'wfDesignDocs/subpage.jpg'},
       {title: 'Accordion', src: 'wfDesignDocs/accordion.jpg'},
       {title: 'Best Practices', src: 'wfDesignDocs/best_practices.png'}
      ]
    },

    {
      title: 'Century 21',
      link: false,
      src: 'century21/cropped.jpg',
      role: 'Visual, interaction designer and developer',
      goal: 'Localize Century 21 YouTube playlists in one area. This area should also give users the opportunity to join the Century 21 team.',
      solution: 'The hardest part about this project, was figuring out how to display so many videos in one place without making the user give up from exhaustion. The answer here was to first divide up the videos into playlists and display those with nice imagery to drive the user to it. Upon interaction with the playlist, the user will see some information… the number of videos in the playlist and the first 4 videos that you can immediately click on to start watching. When you do that, the user is given a carousel to scroll through the rest of the videos in the playlist.',
      gallery: [
       {title: 'Recent Campaigns', src: 'century21/campaigns.jpg'},
       {title: 'Playlist', src: 'century21/playlist.jpg'},
       {title: 'Join', src: 'century21/join.jpg'}
      ]
    },

    {
      title: 'Blink Fitness',
      link: false,
      src: 'blinkFitness/cropped.jpg',
      role: 'Visual, interaction designer and developer',
      goal: 'At the same time, Blink Fitness wantes promote their new fitness center by giving out free trial passes and by getting the word out via social media.',
      solution: 'Blink Fitness is different than most other gyms. It\'s hip, stylish, fun and affordable. So I decided to go with a modern look and feel. The black clip-art of the people working out gives peronality to the brand as well. I believe this will draw the kind of target crowd taht Blink Fitness wants. This solution is very simple. You are only two actions to take, either print a free trial pass or share your experience.',
      gallery: [
       {title: 'Solution', src: 'blinkFitness/520_blue.jpg'},
       {title: 'Share', src: 'blinkFitness/share.jpg'},
       {title: 'Concept #1', src: 'blinkFitness/concept1.jpg'},
       {title: 'Share Concept', src: 'blinkFitness/share_concept.jpg'}
      ]
    }
  ];

  return designs;
});