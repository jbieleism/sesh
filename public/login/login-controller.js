(function(){

  angular.module('Sesh')
    .controller('LoginController', ['$scope', '$http', '$state', function($scope, $http, $state) {

      console.log(localStorage)

      if (localStorage['User-Data']){
        $scope.loggedIn = true;
      }
      else{
        $scope.loggedIn = false;
      }

      $scope.loginUser = function(){
        $http.post('/api/user/login', $scope.login)
          .success(function(response){
            console.log('Successful Login with username: ', response);
            $scope.loggedIn = true;
            localStorage.setItem('User-Data', JSON.stringify(response));
          })
          .error(function(error){
            // alert("Could Not Log In")
            console.log('You have made a grave error: ', error);
          })
      }

      $scope.logoutUser = function(){

        localStorage.clear();
        $scope.loggedIn = false;
        console.log("Successful logout")

      }




    }])

}());