(function(){

  angular.module('Sesh', [])
    .controller('SignupController', ['$state', '$scope', '$http', function(){

      $scope.createUser = function(){
        $http.post('/api/user/signup', $scope.newUser)
          .success(function(response){
            console.log('successful response: ', response)
          })
          .error(function(error){
            console.log('There was an error: ', error)
          })
      }

    }])


}())