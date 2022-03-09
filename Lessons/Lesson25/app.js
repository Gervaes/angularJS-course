var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', function($scope) {
    
    $scope.name = "John Doe";
    
}]);

myApp.controller('secondController', ['$scope', function($scope) {
    
    $scope.name = "Jane Doe";
    
}]);
