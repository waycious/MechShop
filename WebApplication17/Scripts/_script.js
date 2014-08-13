var MechanicShop = angular.module('MechanicShop', ['ngRoute']);

MechanicShop.config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: '/Views/table.html',
        controller: 'TableController'
    })
    .when('/add', {
        templateUrl: '/Views/add.html',
        controller: 'AddController'
    })
    .when('/details/:id', {
        templateUrl: '/Views/details.html',
        controller: 'DetailsController'
    })
    .otherwise({
        templateUrl: '/Views/404.html'
    })
    
});

MechanicShop.factory('CarFactory', function () {
    return [{ "make": "Toyota", "model": "Camry", "year": "1999", "fixed": false }, { "make": "Honda", "model": "Accord", "year": "1991", "fixed": false }, { "make": "Accura", "model": "RSX", "year": "2002", "fixed": false }, { "make": "BMW", "model": "325i", "year": "2003", "fixed": false }, { "make": "Mitsubishi", "model": "Galant", "year": "2003", "fixed": false }];
});

MechanicShop.controller('TableController', function (CarFactory, $scope) {
    
    $scope.cars = CarFactory;
    $scope.removeCar = function (car) {
        var index = $scope.cars.indexOf(car);
        $scope.cars.splice(index, 1);
    };
});

MechanicShop.controller('AddController', function (CarFactory, $scope, $location) {
    $scope.cars = CarFactory;
    $scope.addCar = function () {
        var car = {};
        car.make = $scope.make;
        car.model = $scope.model;
        car.year = $scope.year;
        car.fixed = false;
        car.problem = $scope.problem;
        car.image = $scope.image;
        CarFactory.push(car);
        $scope.make = "";
        $scope.model = "";
        $scope.year = "";
        $scope.problem = "";
        $scope.image = "";

        $location.path('details/' + CarFactory.indexOf(car));
    };
})

MechanicShop.controller('DetailsController', function (CarFactory, $scope, $routeParams) {
    $scope.currentIndex = $routeParams.id;
    $scope.car = CarFactory[$scope.currentIndex];
    $scope.prev = function () {
        $scope.currentIndex -= 1;
        if ($scope.currentIndex < 0) {
            $scope.currentIndex = CarFactory.length - 1;
        }
        $scope.car = CarFactory[$scope.currentIndex];
    };
    $scope.next = function () {
        $scope.currentIndex += 1;
        if ($scope.currentIndex > CarFactory.length - 1) {
            $scope.currentIndex = 0;
        }
        $scope.car = CarFactory[$scope.currentIndex];
    }
});