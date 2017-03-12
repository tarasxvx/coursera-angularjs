(function () {
'use strict';

angular.module('MenuApp', [])
.controller('MealController', function ($scope){

  $scope.menuList="";
  $scope.message="";



  $scope.checkMeals = function () {
    console.log($scope.menuList);
    if($scope.menuList== ""){
      $scope.message="Please enter data first";
      $scope.menuStyle={"border-color":"red"};
      return;
    }
    var menuArray = $scope.menuList.split(',');
    if (menuArray.length <= 3){
      $scope.message="Enjoy!";
      $scope.messageStyle={"color":"green"};
      $scope.menuStyle={"border-color":"green"};

  }else{
    $scope.message="Too much!";
    $scope.messageStyle={"color":"red"};
    $scope.menuStyle={"border-color":"green"};

  }
    console.log(menuArray);
  };
})

})();
