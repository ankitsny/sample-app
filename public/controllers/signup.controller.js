angular.module('app.controllers')
    .controller('SignupController', SignupController);

SignupController.$inject = ['$scope', 'toastr', 'UserSvc', '$location' ];

function SignupController($scope, toastr, UserSvc, $location) {


    $scope.submit = function () {
        if (!$scope.user.email || !$scope.user.password){
            toastr.error("Invalid Email or Password")
            return
        }

        UserSvc.register($scope.user)
        .then(function(resp){
            toastr.success('Created', resp.data.user.firstName, { closeButton: true });
            window.localStorage.setItem("access_token", resp.data.token);
            $location.path('/home')

        }, function(err){
            console.log(err)
        })
    }
}