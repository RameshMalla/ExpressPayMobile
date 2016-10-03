expressPayModule.service("inventoryService", function($http) {
  var shoppingList = [];
  var totalprice = 0;
  this.setShoppingList = function(storeId, itemId, callbackFunction) {
    $http.get("http://localhost:3000/inventory/getItemById/" + storeId + "/" + itemId)
      .then(function(response) {
        shoppingList.push(response.data);
        totalprice = totalprice + Number(response.data.itemPrice);
        //console.log(totalprice);
        callbackFunction(response.data);
      }, function(response) {
        callbackFunction(response.data);
      });
    callbackFunction(shoppingList);
  }
  this.getShoppinList = function() {
    return shoppingList;
  }
  this.getTotalPrice = function() {
    return totalprice;
  }
});
