var ever = angular.module("SSB4", ["ngRoute", "fighterControllers"])

ever.config(["$routeProvider", function($routeProvider){
    $routeProvider. 
    when("/list", {
        templateUrl: "views/list.html",
        controller: "ListController"
    }).
    when("/information/:itemId", {
        templateUrl: "views/information.html",
        controller: "InformationController"
    }).  
    otherwise({
        redirectTo: "/list"
    });
}]);