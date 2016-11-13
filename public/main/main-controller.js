(function(){

  angular.module('Sesh')
    .controller('MainController', ['$scope', '$http', function($scope, $http){



      if (localStorage['User-Data'] !== undefined){

        $scope.user = JSON.parse(localStorage['User-Data']);
        console.log("This is the user information: ", $scope);

      };

      $scope.sendSesh = function(){


        var request = {
          user: $scope.user.username || $scope.user.email,
          userId: $scope.user._id,
          // userImage: $scope.user.image,
          description: $scope.newSesh
        }

        $http.post('api/sesh/post', request)
          .success(function(response){
            console.log("Sesh posted from main controller");

          })
          .error(function(error){
            console.log("There has been a grave error: ", error);
        });
      };



    }]);

}());