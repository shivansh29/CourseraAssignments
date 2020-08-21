(function (){
    'use strict';


    angular.module('dataModule')
    .controller('CategoriesController',CategoriesController);

    CategoriesController.$inject=['items']
    function CategoriesController(items){
        var cat=this;
        cat.itemsArray=items.data;

       // console.log(cat.itemsArray);
        
    }

})();