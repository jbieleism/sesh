(function(){

  angular.module('Sesh')
    .config(function($stateProvider){
      $stateProvider
        .state('signUp', {
          url: "/signup",
          templateUrl: "/signup.html",
          controller: "SignUpController"
        })
    })
    .controller('SignUpController', ['$scope', '$state', function($scope, $state){}])

}())