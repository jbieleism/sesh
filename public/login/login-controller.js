(function(){

  angular.module('Sesh')
    .controller('LoginController', ['$scope', '$http', '$state', function($scope, $http, $state) {

      $scope.loginUser = function(){
        $http.post('/api/user/login', $scope.login)
          .success(function(resposne){
            localStorage.setItem('User-Data', JSON.stringify(response))
          })
          .error(function(error){
            console.log('You have made a grave error: ', error)
          })
      }
    }])

})()