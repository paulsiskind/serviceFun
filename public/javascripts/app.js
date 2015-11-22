var app = angular.module("learningServices", ['ngRoute'])


   app.controller('ServiceController', function($scope, $http, firstService){
    $scope.calculator = function(sign, a, b){
      switch(sign){
        case '+': $scope.result = firstService.add(a,b); break;
        case '-': $scope.result = firstService.subtract(a,b); break;
        case '/': $scope.result = firstService.divide(a,b); break;
        case '*': $scope.result = firstService.multiply(a,b); break;
      }
    }
     $scope.todos = firstService.info()

    $scope.submit = function(){
      firstService.save($scope.list)

      $scope.list = '';
    }
    $scope.delete = function(id){
      firstService.delete(id);
      if($scope.list.id == id) $scope.list={};
    }
    $scope.edit = function(id){
    $scope.list = angular.copy(firstService.get(id))
    $scope.list = '';
    }
   })





   app.config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'partials/home.html',
        controller: 'ServiceController'
      })
      .when('/calculator', {
        templateUrl: 'partials/calculator.html',
        controller: 'ServiceController'
      })
      .when('/todo', {
        templateUrl: 'partials/todo.html',
        controller: 'ServiceController'
      })
      .otherwise( {redirectTo: '/'
      })
       $locationProvider.html5Mode(true)

 });