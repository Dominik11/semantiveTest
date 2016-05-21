angular.module('myApp')
    .controller('myController', function ($scope) {

        $scope.newRectangle = {};
        $scope.rectangles = [];

        $scope.addRectangle = function (rectangle) {
            $scope.rectangles.push(angular.copy(rectangle));
            $scope.newRectangle = null;
        };
        $scope.setColor = function (color) {
            if (color && color === 'yellow') {
                return 'zółty';
            } else if (color && color === 'green') {
                return 'zielony';
            } else if (color && color === 'blue') {
                return 'niebieski';
            } else if (color && color === 'red') {
                return 'czerwony';
            }
        };
        $scope.setSize = function (size) {
            if (size && size === '25') {
                return 'S';
            } else if (size && size === '50') {
                return 'M';
            } else if (size && size === '75') {
                return 'L';
            } else if (size && size === '100') {
                return 'XL';
            }
        };
    });