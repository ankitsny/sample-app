


angular.module('app.services')
.factory("UserSvc", ['$http', function($http){
    return{
            login: function(email, pass){
                return $http({
                    method: "POST",
                    url: "/users/login",
                    data: {email: email, password:pass}
                });
            },
            register: function register(user){
                        return $http({
                            method: "POST",
                            url: "users/register",
                            data: user,
                        });
                    },

            forgotPassword: function forgotPassword(email){
                return $http({
                    method: "POST",
                    url: "/users/forgotPassword",
                    data: {email: email}
                });
            },

            getUserByEmail: function getUserByEmail(email){
                var token = window.localStorage.getItem("access_token");
                return $http({
                    method: "POST",
                    url: "/users/find",
                    data: {email: email},
                    headers: {access_token: token},
                });
            },

            putUser: function putUser(user){
                var token = window.localStorage.getItem("access_token");
                return $http({
                    method: "POST",
                    url: "/users/update",
                    data: user,
                    headers: {access_token: token},
                });
            }
        }
    }
])