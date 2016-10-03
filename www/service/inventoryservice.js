expressPayModule.service("inventoryService", function($http) {
  var shoppingList = [];
  this.setShoppingList = function(storeId, itemId, callbackFunction) {
    $http.get("http://localhost:3000/inventory/getItemById/"+storeId+"/"+itemId)
      .then(function(response) {
        shoppingList.push(response.data);
        callbackFunction(response.data);
      }, function(response) {
        callbackFunction(response.data);
      });
    callbackFunction(shoppingList);
  }
  this.getShoppinList = function() {
    return shoppingList;
  }
});
