var ever = angular.module("SSB4", []);

ever.controller("myController", ["$scope", "$http", function ($scope, $http){
  $http.get("js/data.json").success(function(data){
    $scope.SSB4_Fighters = data;
  })

  
}]);