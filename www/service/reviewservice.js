expressPayModule.service("reviewservice", function($http, transactionService) {

  //var urlprefix = "http://192.168.43.234:4000";
  //var urlprefix = "http://digipay-gurunathanm.c9users.io"
  //var urlprefix = "http://digipay.mybluemix.net";
  var urlprefix = "https://digi-pay.mybluemix.net";

  this.getAllthereviews = function(itemId, callbackFunction) {
    $http.get(urlprefix + "/reviews/getreviewsbyid/" + itemId).then(function(response) {
      if (response.data != null) {
        callbackFunction(response.data.userReviews);
      }
    }, function(error) {
      callbackFunction(null);
    })
  }

  this.getReviewsOfUsers = function(itemId, requestData, callbackFunction) {
    $http.post(urlprefix + "/reviews/getallreviews/" + itemId, requestData)
      .then(function(response) {

        if (response.data != null) {
          callbackFunction(response.data);
        } else {
          transactionService.getTransactionDetailsWithItemId(requestData.phoneNumber, itemId, function(response) {
            if (response != null) {
              var listData = {
                "userReviews": [{
                  "displayName": requestData.displayName,
                  "phoneNumber": requestData.phoneNumber,
                  "userRating": "-None-",
                  "userComment": "-None-"
                }]
              }
              callbackFunction(listData);
            }
          });
        }

      }, function(response) {
        callbackFunction(null);
      });
  }
  this.getReview = function(itemId, phoneNumber, callbackFunction) {
    $http.get(urlprefix + "/reviews/getreview/" + itemId + "/" + phoneNumber)
      .then(function(response) {
        callbackFunction(response.data);
      }, function(response) {
        callbackFunction(null);
      });
  }

  this.updatereviews = function(itemId, phoneNumber, requestData, callbackFunction) {
    $http.post(urlprefix + "/reviews/updatereviews/" + itemId + "/" + phoneNumber, requestData).then(function(response) {
      callbackFunction(response.data);
    }, function(error) {
      callbackFunction(error);
    })
  }

  this.addNewReview = function(itemId, requestData, callbackFunction) {
    $http.post(urlprefix + "/reviews/addnewreview/" + itemId, requestData).then(function(response) {
      callbackFunction(response.data);
    }, function(error) {
      callbackFunction(error);
    })
  }

});
