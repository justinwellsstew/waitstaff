angular.module('tipApp', ['ngRoute', 'ngAnimate'])
 .config(['$routeProvider', function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'templates/home.html',
            controller : 'HomeCtrl'
        })   
.when('/new-meal', {
    templateUrl : 'templates/new-meal.html',
    controller : 'MealCtrl',
})
.when('/my-earnings', {
    templateUrl : 'templates/my-earnings.html',
    controller : 'EarningsCtrl',
})
.when('/error', {
    template : '<p>Error - Page Not Found</p>'
}).otherwise('/');

}])
.controller('MealCtrl', function($scope, $rootScope, $timeout){
	$scope.submitted = false;	
	$scope.submit = function(){
		$scope.tipTotal = $rootScope.totalTipTotal || 0;
		$scope.counter =  $rootScope.totalCounter || 0;
		var mealPrice = $scope.mealPrice;
		var taxRate = $scope.taxRate;
		var tipPercentage = $scope.tipPercentage;

		$scope.subTotal = (mealPrice * (taxRate/100)) + mealPrice;
		$scope.tip = ($scope.subTotal * (tipPercentage/100));
		$scope.total = $scope.subTotal + $scope.tip;
		$scope.counter = $scope.counter+ 1;
		$scope.tipTotal = $scope.tip + $scope.tipTotal;
		// $rootScope.totalTipAverage = $scope.tipAverage;
		// $scope.tipAverage = $scope.tipTotal/$scope.counter; 
		$rootScope.totalTipTotal = $scope.tipTotal;
		$rootScope.totalCounter = $scope.counter;
		$scope.submitted = true;

		 $timeout(function () {
        $scope.submitted = false;
    	}, 2000);
    };


	    
    $scope.clear = function(){
    	$scope.mealPrice= 0; $scope.taxRate= 0; $scope.tipPercentage = 0;
      }

      console.log($rootScope.counter, $rootScope.tipTotal, $rootScope.tipAverage);
	})
	.controller('EarningsCtrl', function($scope, $rootScope){

		$scope.counter = $rootScope.totalCounter;
		$scope.tipTotal = $rootScope.totalTipTotal;
		$scope.tipAverage = $scope.tipTotal/$scope.counter;
	



    $scope.reset = function(){
    	$scope.counter= 0; $scope.tipTotal=0; $scope.subTotal=0; $scope.tip=0; $scope.total=0; $scope.tipAverage=0;
    }
	})

	.controller('HomeCtrl', function($scope){});

