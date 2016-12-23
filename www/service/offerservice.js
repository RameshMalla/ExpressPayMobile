expressPayModule.service("offerservice", function($http) {

  //  var urlprefix = "http://192.168.43.234:4000";
  //var urlprefix = "http://digipay-gurunathanm.c9users.io"
  //var urlprefix = "http://digipay.mybluemix.net";
  var urlprefix = "https://digi-pay.mybluemix.net";
  this.applyOffers = function(storeId, itemId, callbackFunction) {

    $http.get(urlprefix + "/offers/getOffers/" + storeId + "/" + itemId)
      .then(function(response) {
        if (response.data != null && response.data.offerType == 'discount') {
          callbackFunction(response.data.discountRate);
        } else {
          callbackFunction(null);
        }
      //callbackFunction(response.data);
      }, function(response) {
        callbackFunction(response.data);
      });

  };

  this.getOffersByStoreId = function(storeId, callbackFunction) {
    $http.get(urlprefix + "/offers/getOffers/" + storeId)
      .then(function(response) {
        callbackFunction(response.data);
      //callbackFunction(response.data);
      }, function(response) {
        callbackFunction(response.data);
      });
  }


  this.getOffersByOfferId = function(storeId, offerId, callbackFunction) {
    $http.get(urlprefix + "/offers/getOffersbyofferid/" + storeId + "/" + offerId)
      .then(function(response) {
        callbackFunction(response.data);
      //callbackFunction(response.data);
      }, function(response) {
        callbackFunction(response.data);
      });
  }


  this.transferOfferId = function(storeId, phoneNumber, itemId, offerId, toOfferId, callbackFunction) {
    $http.get(urlprefix + "/offers/transferoffer/" + storeId + "/" + phoneNumber + "/" + itemId + "/" + offerId + "/" + toOfferId)
      .then(function(response) {
        callbackFunction(response.data);
      }, function(response) {
        callbackFunction(response.data);
      });
  }

});
