(function(){
    angular.module('Sesh')
      .controller('SignupController', ['$scope', '$state', '$http', function($scope, $state, $http){



        $scope.createUser = function(){
            console.log($scope.newUser);
            $http.post('/api/user/signup', $scope.newUser)
            .success(function(response){
                console.log("Poop")
            })
            .error(function(error){
                console.log("There has been a grave error: ", error);
            })


        }
    }]);
}());