(function(){


  angular.module('Sesh', ['ui.router'])
    .config(($stateProvider) => {
      $stateProvider
        .state('signUp', {
          url: '/signup',
          templateUrl: 'public/signup/signup.html',
          controller: 'SignupController'
        })
    })

}());




/* promises then out of promise




one super coo thing with await, if you write async function, you can write

write code in the try catch block,
you write synchronous-esque code

user.me





















*/