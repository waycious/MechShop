var MechanicShop = angular.module('MechanicShop', []);


MechanicShop.factory('CarFactory', function () {
    return [{ "make": "Toyota", "model": "Camry", "year": "1999", "fixed": false }, { "make": "Honda", "model": "Accord", "year": "1991", "fixed": false }, { "make": "Accura", "model": "RSX", "year": "2002", "fixed": false }, { "make": "BMW", "model": "325i", "year": "2003", "fixed": false }, { "make": "Mitsubishi", "model": "Galant", "year": "2003", "fixed": false }];
})

MechanicShop.controller('TableController', function (CarFactory, $scope) {
    $scope.cars = CarFactory;
    $scope.addCar = function () {
        var car = {};
        car.make = $scope.make;
        car.model = $scope.model;
        car.year = $scope.year;
        car.fixed = false;
        CarFactory.push(car);
        $scope.make = "";
        $scope.model = "";
        $scope.year = "";
    };

    $scope.removeCar = function (car) {
        var index = $scope.cars.indexOf(car);
        $scope.cars.splice(index, 1);
    };
});
MechanicShop.controller('DetailsController', function ($scope) {

});