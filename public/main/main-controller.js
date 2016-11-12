(function(){

  angular.module('Sesh')
    .controller('MainController', ['$http', '$scope', '$interval', function($http, $scope, $interval){



      if (localStorage['User-Data'] !== undefined){

        $scope.user = JSON.parse(localStorage['User-Data']);
        console.log("This is the user information: ", $scope.user)

      }



      $scope.sendSesh = function(event){
        if(event.which === 13){

          var request = {
            user: $scope.user.username || $scope.user.email,
            userId: $scope.user._id,
            userImage: $scope.user.image,
            content: $scope.newSesh
          };


          $http.post('/api/sesh/post', request)
            .success(function(response){
              console.log("Sesh posted from main controller")
            })
            .error(function(error){
              console.log("There has been a grave error: ", error)
          });




        }
      }







    }])

}());