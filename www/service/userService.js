expressPayModule.service("userservice", function($http) {
  var userInfo = null;
  var userContacts = null;
  var urlprefix = "http://192.168.0.102:4000";
  //https://digipaydev.au-syd.mybluemix.net/users/finduser/9940366400
  this.getUserInfo = function(phoneNumber, callbackFunction) {
    $http.get(urlprefix + "/users/finduser/" + phoneNumber)
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

  this.updateIsSharrable = function(phoneNumber, flag, callbackFunction) {
    $http.get(urlprefix + "/users/updatesharrable/" + phoneNumber + "/" + flag).then(function(response) {
      callbackFunction(response.data)
    }, function(error) {
      callbackFunction(error)
    });
  }

  this.getOtherUserInfo = function(phoneNumber, callbackFunction) {
    $http.get(urlprefix + "/users/finduser/" + phoneNumber)
      .then(function(response) {
        if (response.data != null) {
          callbackFunction(response.data);
        } else {
          callbackFunction(null);
        }
      }, function(response) {
        callbackFunction(response.data);
      });

  };

  this.checkUserInfo = function(phoneNumber, callbackFunction) {
    $http.get(urlprefix + "/users/checkuser/" + phoneNumber)
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

  this.addNewUswer = function(requestData, callbackFunction) {
    $http.post(urlprefix + "/users/addnewuser", requestData).then(function(response) {
      userInfo = response.data;
      callbackFunction(response.data);
    }, function(error) {
      callbackFunction(error);
    })
  }

  this.getUserDetails = function() {
    return userInfo;
  }

  this.updateUserQpayDetails = function(phoneNumber, qpayDetails, callbackFunction) {
    $http.post(urlprefix + "/users/updateqpay/" + phoneNumber, qpayDetails).then(function(response) {
      userInfo = response.data;
      callbackFunction(response.data);
    }, function(response) {
      callbackFunction(response.data);
    })
  }

  this.setUserContacts = function(caontactsList) {
    userContacts = caontactsList;
  }

  this.getUserContacts = function() {
    return userContacts;
  }

  this.shareofferinfo = function(phoneNumber, requestbody, callbackFunction) {
    $http.post(urlprefix + "/users/shareofferinfo/" + phoneNumber, requestbody).then(function(response) {
      callbackFunction("Shared");
    }, function(error) {
      callbackFunction("Error occured while sharing");
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
