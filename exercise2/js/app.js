// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';

    var calc = function() {
    	if (!isNaN($scope.num1) && !isNaN($scope.num2)) {
    		$scope.answer = $scope.num1 + $scope.num2;
    	}
    };

    $scope.$watchGroup(['num1', 'num2'], calc);
});