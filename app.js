var app = angular.module('myApp', ['ngMessages']);
 app.controller('mainController', ($scope, $log, $filter)=>{
 	$scope.name= 'Apopaeho'
 	console.log($scope.name)
 })