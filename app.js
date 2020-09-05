(function(){
'use strict';


angular.module("myFirstApp", [])

.controller('MyFirstController', function($scope){
  $scope.first=0;
  $scope.second=0;
  $scope.add=function(){
    return ($scope.first*$scope.second*2)/100;
  };

});
})();
