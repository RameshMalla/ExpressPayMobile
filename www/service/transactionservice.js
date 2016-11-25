expressPayModule.service("transactionService", function($http) {
  this.enterTransactionDetail = function(requestData, callbackFunction) {
    $http.post("https://digipaydev.au-syd.mybluemix.net/transaction/insertTransaction", requestData).then(function(response) {
      callbackFunction(response.data);
    }, function(response) {
      callbackFunction(response);
    })
  }

  this.getTransactionDetails = function(phoneNumber, callbackFunction) {
    $http.get("https://digipaydev.au-syd.mybluemix.net/transaction/getTransactiondetails/" + phoneNumber).then(function(response) {
      callbackFunction(response.data);
    }, function(error) {
      callbackFunction(response);
    });
  }

});
