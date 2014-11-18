// initialize the app
angular.module('Demo', []);

// main controller
angular.module('Demo').controller('MainCtrl', function($scope, $http) {
    'use strict';

    $http.get('http://localhost:3000/titles').success(function(response) {
        $scope.titles = response;
    });

    $scope.upsertTitle = function(title) {
        var params = {
            title: title
        };
        
        if (title.id) {
            $http.put('http://localhost:3000/titles/' + title.id, params);
        } else {
            $http.post('http://localhost:3000/titles', params).success(function(response) {
                $scope.titles.push(response);
            });
        }

        $scope.title = {};
    };

    $scope.editTitle = function(title) {
        $scope.title = title;
    };

    $scope.deleteTitle = function(title) {
        $http.delete('http://localhost:3000/titles/' + title.id).success(function(response) {
            // remove from users array by id
            for (var i = 0; i < $scope.titles.length; i++){
                if ($scope.titles[i].id == title.id) {
                    $scope.titles.splice(i, 1);

                    break;
                }
            }
        });
    };
});