expressPayModule.service("inventoryService", function($http) {
    var shoppingList = [];
    var totalprice = 0;
    var totalCartItems = 0;

    this.testShoppingListByStoreId = function(storeId, callbackFunction) {
        $http.get("http://localhost:3000/inventory/getItems/" + storeId)
            .then(function(response) {
                callbackFunction(response.data);
            }, function(response) {
                callbackFunction(response.data);
            });
    }


    this.getInventoryDetails = function(storeId, itemId, callbackFunction) {
        $http.get("http://localhost:3000/inventory/getItemById/" + storeId + "/" + itemId)
            .then(function(response) {
                callbackFunction(response.data);
            }, function(response) {
                callbackFunction(response.data);
            });
    }

    this.setShoppingList = function(storeId, itemId, callbackFunction) {

        var isSameItemAdded = false;

        if (shoppingList.length > 0) {
            angular.forEach(shoppingList, function(value, key) {
                if (value.storeId == storeId && value.itemId == itemId) {
                    totalCartItems = totalCartItems + 1;
                    if (value.discountPrice != null) {
                        totalprice = totalprice + Number(value.discountPrice);
                    } else {
                        totalprice = totalprice + Number(value.itemPrice);
                    }

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
                    if (response.data.discountPrice != null) {
                        totalprice = totalprice + Number(response.data.discountPrice);
                    } else {
                        totalprice = totalprice + Number(response.data.itemPrice);
                    }
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

    this.updateTotalPrice = function(modifiedPrice, isReduced) {
        console.log(totalprice + " : " + modifiedPrice);
        if (isReduced) {
            totalprice = totalprice - modifiedPrice;
        } else {
            totalprice = modifiedPrice;
        }

        return totalprice;
    }

    this.updateTotalCartItems = function(modifiedTotalCart, isReduced) {
        if (isReduced) {
            totalCartItems = totalCartItems - modifiedTotalCart;
        } else {
            totalCartItems = totalCartItems + modifiedTotalCart;
        }

        return totalCartItems;
    }

    this.resetAll = function() {
        shoppingList = [];
        totalprice = 0;
        totalCartItems = 0;
    }
});
