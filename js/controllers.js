var fighterControllers = angular.module("fighterControllers", []);

fighterControllers.controller("ListController", ["$scope", "$http", function ($scope, $http){
  $http.get("js/directory.json").success(function(data){
    $scope.SSB4_Fighters = data;
  })
}]);

fighterControllers.controller("InformationController", ["$scope", "$http", "$routeParams", function ($scope, $http, $routeParams){
  $http.get("js/directory.json").success(function(data){
    $scope.SSB4_Fighters = data;
    $scope.whichItem = $routeParams.itemId;
  })
}]);