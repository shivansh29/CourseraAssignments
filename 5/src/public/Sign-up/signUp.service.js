(function () {
    "use strict";
    
    angular.module('public')
    .service('SignUpService', SignUpService);
    
    SignUpService.$inject=['$http','ApiPath']
    function SignUpService($http,ApiPath){
        var service=this;
        service.getMenuItem = function(shortName){
            var response=$http({
                method: "GET",
                url: ApiPath+"/menu_items/" + shortName + ".json"
            })

            return response;
        }


        service.setUser =  function(userInfo, name){
        localStorage.setItem('firstname', userInfo.first);
        localStorage.setItem('lastname', userInfo.last);
        localStorage.setItem('email', userInfo.email);
        localStorage.setItem('phone', userInfo.phone);
        localStorage.setItem('dish', userInfo.dish);
        localStorage.setItem('name', name);


        return true;
        }

        service.getUser = function(){
            var user={};

            if(!localStorage.getItem('firstname'))
            return null;
            else{
                user={
                    firstName: localStorage.getItem('firstname'),
                    lastname: localStorage.getItem('lastname'),
                    email: localStorage.getItem('email'),
                    phone: localStorage.getItem('phone'),
                    name: localStorage.getItem('name'),
                };
            }

            return user;
        }
    }
    
    
    
    })();
    