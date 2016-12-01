expressPayModule.service("newArrivalService", function($http) {

  this.getNewArrivals = function(storeId, callbackFunction) {

    $http.get("http://localhost:4000/newarrivals/getNewArrivals/" + storeId)
      .then(function(response) {
        if (response.data != null) {
          callbackFunction(response.data);
        } else {
          callbackFunction(null);
        }
      //callbackFunction(response.data);
      }, function(response) {
        callbackFunction(response.data);
      });

  };
});
