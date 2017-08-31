var app = angular.module('myApp', ['ngMessages']);


 //Esta es la manera estandard de crear un controlador pero si lo hacemos así nos dará
 //error cuando lo queramos minimizar ya que los servicios como $scope los convertirá 
 //en una letra por lo que tendremos error de inyección

// app.controller('mainController', ($scope, $log, $filter, $resource)=>{
//  	$scope.name= 'Apopaeho'
//  	console.log($scope.name)
//  })


//Versión para minimizar y utilizada a partir de ahora
//Las variables que se inyectan en la función se pasan como elementos de un array. 
//Se tiene que respetar el orden ya que el valor [0] del array equivaldrá al primer parámetro que pasámos a la función 
//independientemente del orden

app.controller('mainController', ['$scope','$timeout','$filter',function($scope,b,filter) {
 	$scope.name= 'Apopaeho'
 	//aquí b es $timeout con lo que al cabo de tres segundos la variable $scope.name se cambiará
 	// de Apoeho a Gus
 	b(function(){
 		$scope.name= 'Gus'
 	},3000)
 	// aquí utilizamos el servicio $filter para cambiar de mayus a minus la entrada con nombre "field"
 	$scope.field =''
 	$scope.fieldToLowerCase = ()=>{
 		return filter('lowercase')($scope.field)
 	}

 	
 }])

