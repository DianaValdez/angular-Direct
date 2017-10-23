var app = angular.module('myApp', []);

app.directive('myTodo', function(){
    return {
      restrict: 'EA',
      templateUrl: './Template/todo.tpl.html',
      scope: {
        list: '=',
        title: '@'
      }

    };
  });
/*
app.controller('main', function($scope){
  $scope.todo = [
    {name: 'Create a custom directive', completed: true},
    {name: 'Learn about restrict', completed: true},
    {name: 'Master scopes', completed: false}
  ];
});
*/
angular.module('app', [])
  .controller('TodoController', ['$scope', function ($scope) {
    $scope.todos = [
      { title: 'Learn Javascript', completed: true },
      { title: 'Learn Angular.js', completed: false },
      { title: 'Love this tutorial', completed: true },
      { title: 'Learn Javascript design patterns', completed: false },
      { title: 'Build Node.js backend', completed: false },
    ];
  }]);


  angular.module ( 'app' , [ 'ngRoute' ])
  .config ([ '$ routeProvider' , function ( $ routeProvider ) {
    $ routeProvider
      .when ( '/' , {
        templateUrl : 'index.html/todos.html' ,
        controlador : 'TodoController'
      });
  }]);
