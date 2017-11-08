
angular.module ( 'app' , [])

  .controller ( 'TodoController' , ['$scope' , función($scope) {
    $scope.todos = [
      { title : 'Learn Javascript' , completado : true },
      { title : 'Aprende Angular.js' , completado : falso },
      { title : 'Love this tutorial' , completed : true },
      { title : 'Aprender patrones de diseño de Javascript' , completado : falso },
      { title : 'Build Node.js backend' , completado : falso },
    ];
  }]);