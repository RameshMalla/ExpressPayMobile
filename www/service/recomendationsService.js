expressPayModule.service("recomendationsService", function($http) {

  //var urlprefix = "http://192.168.43.234:4000";
  //var urlprefix = "http://digipay-gurunathanm.c9users.io"
  var urlprefix = "http://digipay.mybluemix.net";
  this.getuserRecomendations = function(phoneNumber, callbackFunction) {

    $http.get(urlprefix + "/recomendations/getRecommendations/" + phoneNumber)
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
