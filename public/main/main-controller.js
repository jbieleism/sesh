(function(){

  angular.module('Sesh')
    .controller('MainController', ['$scope', '$http', '$interval', function($scope, $http, $interval){



      if (localStorage['User-Data'] !== undefined){

        $scope.user = JSON.parse(localStorage['User-Data']);
        console.log("This is the user information: ", $scope);

      };

      $scope.sendSesh = function(){


        var request = {
          user: $scope.user.email,
          userId: $scope.user._id,
          userImage: $scope.user.image,
          description: $scope.newSesh
        }

        $http.post('/api/sesh/post', request)
          .success(function(response){
            console.log("Sesh posted from main controller");
            $scope.seshes = response;
            $scope.newSesh = "";
          })
          .error(function(error){
            console.log("There has been a grave error: ", error);
        });
      };


      $scope.removeSeshes = function(){
        $scope.seshes = null;

      };

      function getSeshes(initial){
        $http.get('/api/sesh/get')
          .success(function(response){
            if (initial){
              $scope.seshes = response;
            }
            else{
              $scope.incomingSeshes = response;
            }
          })
          .error(function(error){
            console.log("Grave Error on line 53: ", error)
          })


      }

















    }]);

}());