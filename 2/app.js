(function (){
    'use strict';

    var shopList=[
        {
            name: "cookie",
            quantity: "10"
        },
        {
            name: "coke",
            quantity: "12"
        },
        {
            name: "chips",
            quantity: "20"
        },
        {
            name: "potato",
            quantity: "25"
        },
        {
            name: "Noodles",
            quantity: "30"
        },
        {
            name: "Drink",
            quantity: "15"
        }
    ];
    
    angular.module('ShoppingListCheckOff',[])
    .controller('ToBuyController',ToBuyController)
    .controller('AlreadyBoughtController',AlreadyBought)
    .service('ShopService',ShopService);

    ToBuyController.$inject=['ShopService'];
    function ToBuyController(ShopService){
        var service2=this;
        service2.items=ShopService.getShopListArray();

        service2.remove= function(index){
            ShopService.remove(index);
        };
    }


    AlreadyBought.$inject=['ShopService'];
    function AlreadyBought(ShopService){
        var service3=this;
        service3.BoughtItems=ShopService.getBoughtArray();
    }


    function ShopService(){
        var service1=this;
        
        service1.items=shopList;

        service1.bought=[];

        service1.getShopListArray= function(){
            //console.log("ppppppppppppp");
            return service1.items;
        }
        
        service1.getBoughtArray= function(){
            //console.log("ppppppppppppp");
            return service1.bought;
        }

        service1.remove= function(index){
            //console.log(service1.bought.length);
            var obj=service1.items[index];
            service1.bought.push(obj);
            service1.items.splice(index,1);
        }
    }

    
})();