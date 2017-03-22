(function (){
  'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getAllToBuy();

  toBuyList.markAsBought = function (index){
    ShoppingListCheckOffService.checkAsBought(index);
  }

  console.log(toBuyList);

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

  var boughtList = this;

  boughtList.items = ShoppingListCheckOffService.getAllBought();

}


function ShoppingListCheckOffService(){
  var service = this;
  var toBuy = [];
  var bought = [];

  toBuy.push("10 cookies");
  toBuy.push("5 dounuts");
  toBuy.push("2 cakes");

  service.checkAsBought = function (index){
    bought.push(toBuy[index]);
    toBuy.splice(index, 1);
  };

  service.getAllToBuy = function(){
    return toBuy;
  }

  service.getAllBought = function(){
    return bought;
  }

}


})();
