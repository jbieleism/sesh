(function(){
    angular.module('Sesh')
      .controller('SignupController', ['$scope', '$state', '$http', function($scope, $state, $http){

        $scope.created = false;


        $scope.createUser = function(){
            console.log($scope.newUser);
            $http.post('/api/user/signup', $scope.newUser)
            .success(function(response){
                alert('signup successful');
                $scope.created = true;
            })
            .error(function(error){
                console.log("There has been a grave error: ", error);
            })


        }
    }]);
}());