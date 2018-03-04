'use strict';

/* Controllers */
var phonecatApp = angular.module('phonecatApp', []);
phonecatApp.controller('PhoneListCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.title = 'Телефоны';
    $http.get('phones/phones.json').success(function (data, status, headers, config) {
        // console.log("data: " + data + " status: " + status + " headers: " + headers + " config: " + config);
        $scope.phones = data;
    }).error(function () {
        
    });
    // $scope.phones = [
    //     {'name': 'Nexus S', 'snippet': 'Fast just got faster with Nexus S.', 'status': true, 'priority': 1},
    //     {'name': 'Motorola XOOM™ with Wi-Fi', 'snippet': 'The Next, Next Generation tablet.', 'status': false, 'priority': 2},
    //     {'name': 'MOTOROLA XOOM™', 'snippet': 'The Next, Next Generation tablet.', 'status': true, 'priority': 3}
    // ];

    /* Filters */
    $scope.today = new Date();
    $scope.doneAndFilter = function(phoneItem) {
        return phoneItem.name && phoneItem.priority > 1 && phoneItem.status === true;
    };

    $scope.sortField = undefined;
    $scope.reverse = false;
    $scope.sort = function(fieldName) {
        if ($scope.sortField === fieldName) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.sortField = fieldName;
            $scope.reverse = false;
        }
    };

    $scope.isSortUp = function(fieldName) {
        return $scope.sortField === fieldName && !$scope.reverse;
    };

    $scope.isSortDown = function(fieldName) {
        return $scope.sortField === fieldName && $scope.reverse;
    };
}]);
