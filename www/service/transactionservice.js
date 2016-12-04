expressPayModule.service("transactionService", function($http) {
  this.enterTransactionDetail = function(requestData, callbackFunction) {
    $http.post("http://localhost:4000/transaction/insertTransaction", requestData).then(function(response) {
      callbackFunction(response.data);
    }, function(response) {
      callbackFunction(response);
    })
  }

  this.getTransactionDetails = function(phoneNumber, callbackFunction) {
    $http.get("http://localhost:4000/transaction/getTransactiondetails/" + phoneNumber).then(function(response) {
      callbackFunction(response.data);
    }, function(error) {
      callbackFunction(response);
    });
  }

  this.getTransactionDetailsWithItemId = function(phoneNumber, itemId, callbackFunction) {
    $http.get("http://localhost:4000/transaction/getTransactiondetailwithitemid/" + phoneNumber + "/" + itemId).then(function(response) {
      callbackFunction(response.data);
    }, function(error) {
      callbackFunction(response);
    });
  }

});
