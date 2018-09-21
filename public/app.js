var app = angular.module('sampleApp', [
    'ngRoute',
    'app.controllers',
    'app.services',
    'app.directives',
    'ui.bootstrap',
    'ngAnimate',
    'toastr'
]);

app.config(['$routeProvider', '$locationProvider',

    function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);

        $routeProvider

            .when('/', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })

            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginController'
            })

            .when('/signup', {
                templateUrl: 'views/signup.html',
                controller: 'SignupController'
            })

            .when('/home', {
                templateUrl: 'views/dashboard.html',
                controller: 'HomeController'
            })
    }
]);