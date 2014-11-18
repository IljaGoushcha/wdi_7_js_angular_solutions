// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope) {
    'use strict';

    $scope.shoppingList = [{
        name: 'apple',
        quantity: 4,
        price: 2.5
    }, {
        name: 'pear',
        quantity: 2,
        price: 40000.50
    }, {
        name: 'blueberry',
        quantity: 100,
        price: 2
    }];
});