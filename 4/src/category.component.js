(function () {
    'use strict';
    
    angular.module('dataModule')
    .component('categoryList', {
      templateUrl: 'src/templates/categoryComponent.html',
      bindings: {
        itemsarr: '<'
      }
    });
    
    })();