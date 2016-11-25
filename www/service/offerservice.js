expressPayModule.service("offerservice", function($http) {

  this.applyOffers = function(storeId, itemId, callbackFunction) {

    $http.get("https://digipaydev.au-syd.mybluemix.net/offers/getOffers/" + storeId + "/" + itemId)
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
    $http.get("https://digipaydev.au-syd.mybluemix.net/offers/getOffers/" + storeId)
      .then(function(response) {
        callbackFunction(response.data);
      //callbackFunction(response.data);
      }, function(response) {
        callbackFunction(response.data);
      });
  }


  this.getOffersByOfferId = function(storeId, offerId, callbackFunction) {
    $http.get("https://digipaydev.au-syd.mybluemix.net/offers/getOffersbyofferid/" + storeId + "/" + offerId)
      .then(function(response) {
        callbackFunction(response.data);
      //callbackFunction(response.data);
      }, function(response) {
        callbackFunction(response.data);
      });
  }
});
