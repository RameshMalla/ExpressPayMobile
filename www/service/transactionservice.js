expressPayModule.service("transactionService", function($http) {
  this.enterTransactionDetail = function(requestData, callbackFunction) {
    $http.post("http://localhost:3000/transaction/insertTransaction", requestData).then(function(response) {
      callbackFunction(response.data);
    }, function(response) {
      callbackFunction(response);
    })
  }

});
