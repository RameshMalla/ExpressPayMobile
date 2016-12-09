expressPayModule.service("storeservice", function($http) {

  var urlprefix = "http://192.168.43.234:4000";

  this.getStoreDetails = function(storeId, callbackFunction) {
    $http.get(urlprefix + "/stores/getstoredetails/" + storeId).then(function(response) {
      callbackFunction(response.data);
    }, function(error) {
      callbackFunction(null);
    });
  }

});
