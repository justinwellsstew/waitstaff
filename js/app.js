angular.module('tipApp', [])
.controller('TipCtrl', function($scope){
	// $scope.mealPrice = 100;
	// $scope.taxRate = 10;
	// $scope.tipPercentage = 20;
	$scope.counter = 0;
	$scope.tipTotal = 0;
	$scope.submit = function(){
		$scope.subTotal = ($scope.mealPrice * ($scope.taxRate/100)) + $scope.mealPrice;
		$scope.tip = ($scope.subTotal * ($scope.tipPercentage/100));
		$scope.total = $scope.subTotal + $scope.tip;
		$scope.counter++;
		$scope.tipTotal = $scope.tip + $scope.tipTotal;
		$scope.tipAverage = $scope.tipTotal/$scope.counter; 
    };

    $scope.clear = function(){
    	$scope.mealPrice= 0; $scope.taxRate= 0; $scope.tipPercentage = 0;
    }

    $scope.reset = function(){
    	$scope.counter= 0; $scope.tipTotal=0; $scope.subTotal=0; $scope.tip=0; $scope.total=0; $scope.tipAverage=0;
    }
});