expressPayModule.service("inventoryService", function($http) {
    var shoppingList = [];
    var totalprice = 0;
    var totalCartItems = 0;
    this.setShoppingList = function(storeId, itemId, callbackFunction) {

        var isSameItemAdded = false;

        if (shoppingList.length > 0) {
            angular.forEach(shoppingList, function(value, key) {
                if (value.storeId == storeId && value.itemId == itemId) {
                    totalCartItems = totalCartItems + 1;
                    totalprice = totalprice + Number(value.itemPrice);
                    value.totalQuantity = value.totalQuantity + 1;
                    isSameItemAdded = true;
                    callbackFunction(shoppingList);
                    return false;
                }
            });
        }
        if (!isSameItemAdded) {
            console.log("Called");
            $http.get("http://localhost:3000/inventory/getItemById/" + storeId + "/" + itemId)
                .then(function(response) {
                    totalCartItems = totalCartItems + 1;
                    totalprice = totalprice + Number(response.data.itemPrice);
                    shoppingList.push(response.data);
                    callbackFunction(response.data);
                }, function(response) {
                    callbackFunction(response.data);
                });
        }
    }
    this.getShoppinList = function() {
        return shoppingList;
    }
    this.getTotalPrice = function() {
        return totalprice;
    }
    this.getTotalCartItems = function() {
        return totalCartItems;
    }

    this.updateTotalPrice = function(modifiedPrice) {
        totalprice = totalprice - modifiedPrice;
        return totalprice;
    }

    this.updateTotalCartItems = function(modifiedTotalCart) {
        totalCartItems = totalCartItems - modifiedTotalCart;
        return totalCartItems;
    }
});
