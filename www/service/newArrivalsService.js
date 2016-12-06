expressPayModule.service("newArrivalService", function($http) {

  var urlprefix = "http://192.168.0.102:4000";
  this.getNewArrivals = function(storeId, callbackFunction) {

    $http.get(urlprefix + "/newarrivals/getNewArrivals/" + storeId)
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
