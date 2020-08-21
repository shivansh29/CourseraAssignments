(function (){
    'use strict';


    angular.module('MenuCategoriesApp',[])
    .controller('MenuCategoriesController',MenuCategoriesController)
    .service('MenuCategoriesService',MenuCategoriesService)
    .directive('foundItems',FoundItemsDirective);


    function FoundItemsDirective(){
        var ddo={
        templateUrl: 'shopList.html',
        restrict :'EA',
           scope: {
            onRemove: '=',
            foundItem: '<'
           }
        };
        return ddo;
    }


    

    MenuCategoriesController.$inject=['MenuCategoriesService'];
    function MenuCategoriesController(MenuCategoriesService){
        var menu=this;
        menu.SearchItem="";
        menu.bool=false;
        
        var promise=MenuCategoriesService.getCategories();
        
        promise.then(function (response){
            menu.categories=response.data;
            //console.log(menu.categories.menu_items);
        })
        .catch(function (error){
            console.log("Something is wrong");
        });

        menu.found=[];
        menu.searchfunction= function (){
            menu.found.splice(0,menu.found.length);
            if(menu.SearchItem.trim()!="")
            //console.log(menu.categories);
            for(var i=0;i<menu.categories.menu_items.length;i++){
              //console.log(menu.SearchItem);
                if(menu.categories.menu_items[i].description.toLowerCase().indexOf(menu.SearchItem)!=-1){
                    menu.found.push(menu.categories.menu_items[i]);
                }
            }
            menu.bool=true;
        }

        menu.removeItem = function(index){
            menu.found.splice(index,1);
        }

        menu.getItems= function(){
            return menu.found;
        }
    }

    MenuCategoriesService.$inject=['$http'];
    function MenuCategoriesService($http){
        var service=this;

        service.getCategories = function(){
            var response=$http({
                method: "GET"   ,
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json"),
                param: {

                }
            });

            

            return response;
        }

        
    }


})();