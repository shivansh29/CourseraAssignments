(function (){
    'use strict';


    angular.module('LunchCheck',[])
    .controller('Checker',Checker);
        Checker.$inject=['$scope'];
        function Checker($scope){
        $scope.val="";
        $scope.state="";
        $scope.solve = function(){
            var x=$scope.val.split(",");
            console.log(x);
            if(x[0] === "")
            $scope.state="please enter data first";
            else if(x.length<=3&&x.length>0)
            $scope.state="Enjoy!";
            else
            $scope.state="Too Much!";
        };

       
    };
})();