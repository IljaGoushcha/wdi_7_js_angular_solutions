// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/titles').success(function(response) {
        $scope.titles = response;
    });
});