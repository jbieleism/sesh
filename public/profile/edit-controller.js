(function(){

  angular.module("Sesh")

    .controller('EditProfileController', ['Upload', '$scope', '$state', '$http', function(Upload, $scope, $state, $http){

        $scope.user = JSON.parse(localStorage['User-Data']) || undefined;


        $scope.$watch(function(){
          return $scope.file;
        }, function(){
          $scope.upload($scope.file);
        });




        $scope.upload = function(file) {
          if (file){
            Upload.upload({
              url: '/api/profile/editPhoto',
              method: 'POST',
              data: {
                userId: $scope.user._id
              },
              file: file
            })
            .progress(function(e){
              console.log('Firing')
            })
            .success(function(data){
              console.log('Success: ', data);
            })
            .error(function(error){
              console.log('Grave error: ', error);
            })
          };
        };





        $scope.updateUsername = function(){

          var request = {
            userId: $scope.user._id,
            username: $scope.user.username
          }

          $http.post('api/profile/updateUsername', request)
            .success(function(){
              console.log("Successfully updated username: ", request);
              $scope.user.username = "";
            })
            .error(function(error){
              console.log("There was a grave error: ", error);
          })

        }





        $scope.updateBio = function(){

          var request = {
            userId: $scope.user._id,
            bio: $scope.user.bio
          };

          $http.post('api/profile/bio', request)
            .success(function(){
              console.log("Successful http post for bio");
              $scope.user.bio = "";
            })
            .error(function(error){
              console.log("There has been a grave error: ", error);
          });

        };









    }]);














}())