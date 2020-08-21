(function (){
    'use strict';


    angular.module('dataModule')
    .controller('ItemDetailController',ItemDetailController);

    ItemDetailController.$inject=['myItems','$stateParams'];
    function ItemDetailController(myItems,$stateParams){
        
        var my=this;
        my.itemArr=myItems
        my.categoryName = $stateParams.categoryShortName;
        //console.log(my.itemArr);
        //console.log(my.categoryName);
        
    }

})();