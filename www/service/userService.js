expressPayModule.service("userservice", function($http) {
  var userInfo = null;
  this.getUserInfo = function(phoneNumber, callbackFunction) {
    $http.get("http://localhost:3000/users/finduser/" + phoneNumber)
      .then(function(response) {
        if (response.data != null) {
          userInfo = response.data;
          callbackFunction(response.data);
        } else {
          callbackFunction(null);
        }
      }, function(response) {
        callbackFunction(response.data);
      });

  };

  this.getUserDetails = function() {
    return userInfo;
  }

  this.updateUserQpayDetails = function(phoneNumber, qpayDetails, callbackFunction) {
    $http.post("http://localhost:3000/users/updateqpay/" + phoneNumber, qpayDetails).then(function(response) {
      userInfo = response.data;
      callbackFunction(response.data);
    }, function(response) {
      callbackFunction(response.data);
    })
  }

// this.getOffersByStoreId = function(storeId, callbackFunction) {
//   $http.get("http://localhost:3000/offers/getOffers/" + storeId)
//     .then(function(response) {
//       callbackFunction(response.data);
//     //callbackFunction(response.data);
//     }, function(response) {
//       callbackFunction(response.data);
//     });
// }
//
//
// this.getOffersByOfferId = function(storeId, offerId, callbackFunction) {
//   $http.get("http://localhost:3000/offers/getOffersbyofferid/" + storeId + "/" + offerId)
//     .then(function(response) {
//       callbackFunction(response.data);
//     //callbackFunction(response.data);
//     }, function(response) {
//       callbackFunction(response.data);
//     });
// }
});
