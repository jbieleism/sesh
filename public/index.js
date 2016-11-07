(function(){


  angular.module('Sesh', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/')


      $stateProvider
        .state('signUp', {
          url: '/signup',
          templateUrl: 'public/signup/signup.html',
          controller: 'SignupController'
        })
        // .state('login', {
        //   url: '/login',
        //   templateUrl: 'public/login/login.html',
        //   controller: 'LoginController'
        // })
    })

}());

