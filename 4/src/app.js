(function (){
    'use strict';


    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/templates/showCategories.template.html',
    controller: 'CategoriesController as mainList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        
        return MenuDataService.getCategories();
      }]
    }
  })
  .state('items', {
    url: '/item-detail/{categoryShortName}',
    templateUrl: 'src/templates/item.template.html',
    controller: 'ItemDetailController as itemDetail',
    params: {
      categoryShortName: null
  },
    resolve: {
      myItems: ['$stateParams', 'MenuDataService',
            function ($stateParams, MenuDataService) {
               return MenuDataService.getItem($stateParams.categoryShortName)
                .then(function (items) {
                  //console.log(items.data.menu_items);
                  return items.data.menu_items;
                });
            }]
    }
  });

}

})();