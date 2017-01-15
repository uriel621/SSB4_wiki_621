var fighterControllers = angular.module("fighterControllers", []);

fighterControllers.controller("ListController", ["$scope", "$http", function ($scope, $http){
  $http.get("js/data.json").success(function(data){
    $scope.SSB4_Fighters = data;
  })

  
}]);