(function (){
    'use strict';


    angular.module('dataModule')
    .service('MenuDataService',MenuDataService)

    MenuDataService.$inject=['$http'];
    function MenuDataService($http){

        var serv=this;

        serv.getCategories = function(){
            var response=$http({
                method: "GET"   ,
                url: ("https://davids-restaurant.herokuapp.com/categories.json"),
                param: {

                }
            });

            

            return response;
    };


            serv.getItem = function(categoryShortName){
            var response=$http({
            method: "GET"   ,
            url: (" https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
            
        });

        return response;
    };

    }

    
})();