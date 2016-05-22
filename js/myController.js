angular.module('myApp')
    .controller('myController', function ($scope) {

        $scope.newRectangle = {};
        $scope.rectangles = [];

        $scope.addRectangle = function (rectangle) {
            $scope.rectangleForm.rectangleNumber.$setValidity('uniqueNumberError', checkUniqueNumber(rectangle.number));
            console.log(checkCombination(rectangle));
            $scope.rectangleForm.$setValidity('combinationError', checkCombination(rectangle));

            if ($scope.rectangleForm.$valid) {
                $scope.rectangles.push(angular.copy(rectangle));
                $scope.newRectangle = null;
                $scope.rectangleForm.submitted = false;
            } else {
                $scope.rectangleForm.submitted = true;
            }
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
        var checkUniqueNumber = function (number) {
            var result = true;
            angular.forEach($scope.rectangles, function (rectangle) {
                if (rectangle.number === number) {
                    result = false;
                }
            });
            return result;
        };
        var checkCombination = function (rectangle) {
            if (rectangle.number % 2 === 0 && (rectangle.color === 'red' || rectangle.color === 'green')) {
                return false;
            } else {
                return true;
            }
        };
    });