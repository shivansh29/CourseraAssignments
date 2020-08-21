(function () {
    'use strict';
    
    angular.module('dataModule')
    .component('itemList', {
      templateUrl: 'src/templates/item.component.html',
      bindings: {
        itemsarray: '<'
      }
    });
    
    })();