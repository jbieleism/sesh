(function(){

  angular.module('Sesh')
    .controller('MainController', ['$scope', '$http', '$interval', function($scope, $http, $interval){



      if (localStorage['User-Data'] !== undefined){

        $scope.user = JSON.parse(localStorage['User-Data']);
        console.log("This is the user information: ", $scope.user)

      }



      $scope.sendSesh = function(){

        console.log("poo poo")

        // if (event.which === 13){

        //   var request = {
        //     user: $scope.user.username || $scope.user.email,
        //     userId: $scope.user._id,
        //     userImage: $scope.user.image,
        //     description: $scope.newSesh
        //   };


        //   $http.post('/api/sesh/post', request)
        //     .success(function(response){
        //       console.log("Sesh posted from main controller")
        //     })
        //     .error(function(error){
        //       console.log("There has been a grave error: ", error)
        //   });
        // }
      }







    }])

}());