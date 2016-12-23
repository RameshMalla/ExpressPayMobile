expressPayModule.service("transactionService", function($http) {
  //var urlprefix = "http://192.168.43.234:4000";
  //var urlprefix = "http://digipay-gurunathanm.c9users.io"
  //var urlprefix = "http://digipay.mybluemix.net";
  var urlprefix = "https://digi-pay.mybluemix.net";
  this.enterTransactionDetail = function(requestData, callbackFunction) {
    $http.post(urlprefix + "/transaction/insertTransaction", requestData).then(function(response) {
      callbackFunction(response.data);
    }, function(response) {
      callbackFunction(response);
    })
  }

  this.getTransactionDetails = function(phoneNumber, callbackFunction) {
    $http.get(urlprefix + "/transaction/getTransactiondetails/" + phoneNumber).then(function(response) {
      callbackFunction(response.data);
    }, function(error) {
      callbackFunction(response);
    });
  }

  this.getTransactionDetailsWithItemId = function(phoneNumber, itemId, callbackFunction) {
    $http.get(urlprefix + "/transaction/getTransactiondetailwithitemid/" + phoneNumber + "/" + itemId).then(function(response) {
      callbackFunction(response.data);
    }, function(error) {
      callbackFunction(null);
    });
  }

});
