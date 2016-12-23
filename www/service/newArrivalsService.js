expressPayModule.service("newArrivalService", function($http) {

  //var urlprefix = "http://192.168.43.234:4000";
  //var urlprefix = "http://digipay-gurunathanm.c9users.io"
  //var urlprefix = "http://digipay.mybluemix.net";
  var urlprefix = "https://digi-pay.mybluemix.net";
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
