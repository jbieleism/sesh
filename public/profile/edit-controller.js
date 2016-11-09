(function(){

  angular.module("Sesh")

    .controller('EditProfileController', ['Upload', '$scope', '$state', '$http', function(Upload, $scope, $state, $http){

        $scope.user = JSON.parse(localStorage['User-Data'])

        $scope.$watch(function(){
          return $scope.file;
        }, function(){
          $scope.upload($scope.file);
        });

        $scope.upload = function(file) {
          if (file){
            Upload.upload({
              url: '/api/profile/edit',
              method: 'POST',
              data: {userId: '$scope.user._id'},
              file: file
            })
            .progress(function(e){
              console.log('progress: ', e);
            })
            .success(function(data){
              console.log('Success: ', data);
            })
            .error(function(error){
              console.log('Grave error: ', error);
            })
          };
        };

    }]);

}())