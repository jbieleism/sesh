(function(){


  angular.module('Sesh', ['ui.router', 'ngFileUpload'])
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise('/')

      $stateProvider
        .state('signUp', {
          url: '/signup',
          templateUrl: 'public/signup/signup.html',
          controller: 'SignupController'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'public/login/login.html',
          controller: 'LoginController'
        })
        .state('editProfile', {
          url: '/edit-profile',
          templateUrl: 'public/profile/edit-profile-view.html',
          controller: 'EditProfileController'
        })
        .state('main', {
          url: '/',
          templateUrl: 'public/main/main.html',
          controller: 'MainController'
        })


    })

}());

