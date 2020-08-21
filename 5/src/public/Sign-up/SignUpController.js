(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpCtrl', SignUpCtrl);
    
    SignUpCtrl.$inject=['SignUpService'];
    function SignUpCtrl(SignUpService) {
    
      
      var ctrl=this;
      ctrl.submit = function(userInfo){
        var res=SignUpService.getMenuItem(userInfo.dish);

        res.
        then(function(response){
          ctrl.successful=true;
          SignUpService.setUser(userInfo,response.data.name);
          console.log(response.data.name);
        })
        .catch(function (error){
          ctrl.successful=false;
        });
      };

    }
    
    
    })();
    