expressPayModule.service("storeservice", function($http) {

  //var urlprefix = "http://192.168.43.234:4000";
  //var urlprefix = "http://digipay-gurunathanm.c9users.io"
  var urlprefix = "http://digipay.mybluemix.net";
  this.getStoreDetails = function(storeId, callbackFunction) {
    $http.get(urlprefix + "/stores/getstoredetails/" + storeId).then(function(response) {
      callbackFunction(response.data);
    }, function(error) {
      callbackFunction(null);
    });
  }

});
