expressPayModule.service("inventoryService", function($http) {
  var shoppingList = [{
    "id": 123,
    "name": "Iphone",
    "price": "50000"
  }, {
    "id": 223,
    "name": "Galaxy",
    "price": "30000"
  }, {
    "id": 5344,
    "name": "OnePlus",
    "price": "20000"
  }];
  this.setShoppingList = function(itemId, callbackFunction) {
    // $http.get("http://localhost:3000/inventory/getItemById/" + itemId)
    //   .then(function(response) {
    //     shoppingList.push(response.data);
    //     callbackFunction(response.data);
    //   }, function(response) {
    //     callbackFunction(response.data);
    //   });
    callbackFunction(shoppingList);
  }
  this.getShoppinList = function() {
    return shoppingList;
  }
});
