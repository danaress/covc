angular.module('myApp', [])

angular.module('myApp')
	.controller('mainController', ['$scope', '$http', function($scope, $http){


        $scope.signup = function(){
            $http({ 
                method : 'POST',
                url    : '/signup',
                data   : $scope.signupForm
            }).then(function(returnData){
                console.log(returnData)
                if ( returnData.data.success ) { window.location.href="/dashboard.html" }
            })
        }

        $scope.login = function(){
            $http({
                method : 'POST',
                url    : '/login',
                data   : $scope.loginForm
            }).then(function(returnData){
                if ( returnData.data.success ) { window.location.href="/dashboard" } 
                else { console.log(returnData)}
            })
        }

	}]);