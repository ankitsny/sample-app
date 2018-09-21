angular.module('app.controllers')
    .controller('LoginController', LoginController);

LoginController.$inject = ['$scope', 'toastr', 'UserSvc', '$rootScope', '$location' ];

function LoginController($scope, toastr, UserSvc, $rootScope, $location) {


    $scope.login = function () {
        if (!$scope.email || !$scope.password){
            toastr.error("Invalid Email or Password")
            return
        }

        UserSvc.login($scope.email, $scope.password)
        .then(function(resp){
            toastr.success('Logged In', resp.data.user.firstName, { closeButton: true });
            window.localStorage.setItem("access_token", resp.data.token);
            $rootScope.user = resp.data.user;
            $location.path("/home")
        }, function(err){
            console.log(err)
        })
    }
}