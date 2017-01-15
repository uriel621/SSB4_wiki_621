var ever = angular.module("SSB4", ["ngRoute", "fighterControllers"])

ever.config(["$routeProvider", function($routeProvider){
    $routeProvider. 
    when("/list", {
        templateUrl: "views/list.html",
        controller: "ListController"
    }). 
    otherwise({
        redirectTo: "/list"
    })
}])