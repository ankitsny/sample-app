angular.module('app.controllers')
.controller("HomeController", ['$scope', 'UserSvc','$rootScope', function($scope, UserSvc, $rootScope){
    UserSvc.getUserByEmail($rootScope.user.email)
    .then(function(resp){
        $scope.user = resp.data
        console.log(resp)
    }, function(err){
        console.log(err)
    })
    
    
    $scope.update = function(){
        $scope._user.email = $scope.user.email;
        UserSvc.putUser($scope._user)
        .then(function(resp){
            $scope.user = resp.data
            console.log(resp)
        }, function(err){
            console.log(err)
        })
    }
}])