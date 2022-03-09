var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
    
    $routeProvider
    
    .when('/', {
        templateUrl: 'pages/main.html',
        controller: 'mainController'
    })
    
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
    .when('/second/:num', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
    
});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log) {
    
    $scope.people = [{
            name: 'John Doe',
            address: '555 Main St.',
            city: 'New York',
            state: 'NY',
            zip: '11111', 
        },{
            name: 'Jane Doe',
            address: '222 Second St.',
            city: 'Buffalo',
            state: 'NY',
            zip: '222222', 
        },{
            name: 'George Doe',
            address: '111 Third St.',
            city: 'Miami',
            state: 'FL',
            zip: '333333', 
        },
    ];

    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.state + ', ' + person.zip;
    }
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams) {
    
    
    
}]);

myApp.directive("searchResult", function() {
   return {
       restrict: 'AECM',
       templateUrl: 'directives/searchresult.html',
       replace: true,
       scope: {
           personObject: "=", //two-way binding, can pass objects
           formattedAddressFunction: "&" //function
       },
       compile: function(elem, attrs) {
           console.log('Compiling...');
           //elem.removeAttr('class');
           console.log(elem.html());

           return {
                // AVOID
                // pre: function(scope, element, attrs) {
                //     console.log('Pre-linking...');
                //     console.log(element);
                // },
                post: function(scope, element, attrs) { //post link
                    console.log('Post-linking...');
                    console.log(scope);
                    if(scope.personObject.name == 'Jane Doe')
                        element.removeAttr('class');
                    console.log(element);
                },
           }
       }
   }
});
