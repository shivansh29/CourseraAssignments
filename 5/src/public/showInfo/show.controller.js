(function () {
    "use strict";
    
    angular.module('public')
    .controller('showCtrl', showCtrl);
    
    showCtrl.$inject=['SignUpService'];
    function showCtrl(SignUpService) {
     var ctrl=this;
     ctrl.userInfo=SignUpService.getUser();
    }
    
    })();
    