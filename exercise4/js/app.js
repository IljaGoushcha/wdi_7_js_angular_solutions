// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';

    $scope.users = [{
        first_name: 'dan',
        last_name: 'johnson',
        age: 32
    }, {
        first_name: 'ella',
        last_name: 'johnson',
        age: 9
    }, {
        first_name: 'ava',
        last_name: 'johnson',
        age: 8
    }];

    $scope.createUser = function(user) {
        $scope.users.push(user);

        $scope.user = {};
    };
});