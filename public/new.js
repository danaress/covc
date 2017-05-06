
angular.module('myApp', [])
	.controller('newController', ['$scope', '$http', function($scope, $http){

        $scope.addRound = function(){
            $http({ 
                method : 'POST',
                url    : '/addRound',
                data : $scope.addARound
            }).then(function(returnData){
                console.log(returnData)
            })}

}])