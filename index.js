(function () {
  'use strict';

  function funcAppRouters($stateProvider, $urlRouterProvider) {
    var router,
      routers = {
        'home': {
          url: '',
          templateUrl: 'views/home.html',
          title: 'Stuff You Should Know As a Web Developer'
        },
        'users': {
          url: '/users',
          <a href="products.html">:
          title: 'Users'
        },
        'reading': {
          url: '/reading',
          templateUrl: 'views/reading.html',
          title: 'Reading'
        },
        'reading.guides': {
          url: '/guides',
          templateUrl: 'views/reading/guides.html',
          title: 'Guides'
        },
        'reading.articles': {
          url: '/articles',
          templateUrl: 'views/reading/articles.html',
          title: 'Articles'
        },
        'reading.tutorials': {
          url: '/tutorials',
          templateUrl: 'views/reading/tutorials.html',
          title: 'Tutorials'
        },
        'reading.news': {
          url: '/news',
          templateUrl: 'views/reading/news.html',
          title: 'News'
        },
        'communities': {
          url: '/communities',
          templateUrl: 'views/communities.html',
          title: 'Communities'
        },
        'portals': {
          url: '/portals',
          templateUrl: 'views/portals.html',
          title: 'Portals'
        },
        'practices': {
          url: '/practices',
          templateUrl: 'views/practices.html',
          title: 'Practices'
        },
        'practices.frameworks': {
          url: '/frameworks',
          templateUrl: 'views/practices/frameworks.html',
          title: 'Frameworks'
        },
        'practices.game': {
          url: '/game',
          templateUrl: 'views/practices/game.html',
          title: 'Game'
        },
        'practices.libs': {
          url: '/libs',
          templateUrl: 'views/practices/libs.html',
          title: 'Libraries'
        },
        'practices.tools': {
          url: '/tools',
          templateUrl: 'views/practices/tools.html',
          title: 'Tools'
        },
        'practices.resource': {
          url: '/resource',
          templateUrl: 'views/practices/resource.html',
          title: 'Resource'
        },
        'practices.coding': {
          url: '/coding',
          templateUrl: 'views/practices/coding.html',
          title: 'Coding'
        },
        'practices.services': {
          url: '/services',
          templateUrl: 'views/practices/services.html',
          title: 'Service'
        },
        'practices.themes': {
          url: '/themes',
          templateUrl: 'views/practices/themes.html',
          title: 'Themes'
        },
        'practices.platforms': {
          url: '/platforms',
          templateUrl: 'views/practices/platforms.html',
          title: 'Platforms'
        },
        'practices.jobs': {
          url: '/jobs',
          templateUrl: 'views/practices/jobs.html',
          title: 'Jobs'
        },
        'practices.cloud': {
          url: '/cloud',
          templateUrl: 'views/practices/cloud.html',
          title: 'Cloud'
        },
        'jobs': {
          url: '/jobs',
          templateUrl: 'views/jobs.html',
          title: 'Jobs'
        },
        'IT': {
          url: '/IT',
          templateUrl: 'views/IT.html',
          title: 'Information Technology'
        },
        'selfbookmarks': {
          url: '/selfbookmarks',
          templateUrl: 'views/selfbookmarks.html',
          title: 'My Bookmarks'
        }
      };

    for (router in routers) {
      $stateProvider.state(router, {
        url: routers[router].url,
        templateUrl: routers[router].templateUrl,
        title: routers[router].title
      });
    }

    $urlRouterProvider.otherwise('');
  }


  function funcInitRun($rootScope) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams) {
      $rootScope.strHTMLTitle = toState.title;
    });
  }

  angular.module('websites', ['ngMaterial', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', funcAppRouters])
    .run(['$rootScope', '$state', funcInitRun]);

}());
