angular.module('myApp', ['ngRoute'])

// angular.module('myApp').config(function($routeProvider){
//     $routeProvider
//     .when('/H1Month',{
//         templateUrl: 'H1Month.html',
//         controller: 'dashController'
//     })
//     .when('/H2Month',{
//         templateUrl: 'H2Month.html',
//         controller: 'dashController'
//     })
// });

angular.module('myApp')
	.controller('mainController', ['$scope', '$http', 'userInfo', function($scope, $http, $userInfo){

   $scope.times = {
            '0': '12:00',
            '1': '1:00 AM',
            '2': '2:00 AM',
            '3': '3:00 AM',
            '4': '4:00 AM',
            '5': '5:00 AM',
            '6': '6:00 AM',
            '7': '7:00 AM',
            '8': '8:00 AM',
            '9': '9:00 AM',
            '10': '10:00 AM',
            '11': '11:00 AM',
            '12': '12:00 PM',
            '13': '1:00 PM',
            '14': '2:00 PM',
            '15': '3:00 PM',
            '16': '4:00 PM',
            '17': '5:00 PM',
            '18': '6:00 PM',
            '19': '7:00 PM',
            '20': '8:00 PM',
            '21': '9:00 PM',
            '22': '10:00 PM',
            '23': '11:00 PM'
        }
console.log($scope.times)



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

        $scope.habitSetting = function(){
        	$http({ 
                method : 'POST',
                url    : '/habits',
                data   : $scope.settings
            }).then(function(returnData){
                $scope.modalInfo()
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

        $scope.welcomeFunction = function(){
            $scope.welcomeTime = false;
        }

        $scope.modalInfo = function(req, res){
            $http.post('/metrics')
            .then(function(returndata){
                $scope.allUserInfo = returndata.data
                if($scope.allUserInfo[0].time == null && $scope.allUserInfo[0].number == 0 && $scope.allUserInfo[0].habit1 == ''){
                    $scope.welcomeFunction();
                }
                //username
                $scope.modalUsername = $scope.allUserInfo[0].username
                if ($scope.allUserInfo[0].time == null){
                //text time
                $scope.modalTime = "It looks like you haven't selected a time yet - head over to Settings in the top right!"
                $scope.modal2Time = "Please choose a time to receive texts."
                } else {
                    $scope.modalTime = $scope.times[$scope.allUserInfo[0].time]
                }
                //phone number
                if ($scope.allUserInfo[0].number == 0){
                    $scope.modal2Number = "You don't have a number saved. Add one below."
                    $scope.modalNumber = "It looks like you haven't added a number yet - head over to Settings in the top right!"
                } else {
                    $scope.modal2Number = ("Current number: " + $scope.allUserInfo[0].number)
                    $scope.modalNumber = $scope.allUserInfo[0].number
                }
                //habits
                if ($scope.allUserInfo[0].habit1 == ''){
                    $scope.modalHabit = "It looks like you haven't specified any habits yet - head over to Settings in the top right!"
                } else if ($scope.allUserInfo[0].habit1 == ''){
                    $scope.modalHabit = ("Habit 1: " + $scope.allUserInfo[0].habit1 + ". Habit 2: " + $scope.allUserInfo[0].habit2 + ". Habit 3: " + $scope.allUserInfo[0].habit3)
                }
                })
        }
        $scope.modalInfo()


        $scope.numberClick = function(){
            $scope.numberHide = true;
            $scope.numHide = true;
        }



        $scope.testing = function(){
            console.log("hideBox")
            $scope.hideBox = true;
        }

        $scope.cancelBox = function(){
            console.log("hideBox")
            $scope.hideBox = false;
        }





        // Functions for Login screen

        $scope.loginClick = function(){
            $scope.loginHide = true;
        }

        $scope.cancelClick = function(){
            $scope.loginHide = false;
        }

        $scope.signupClick = function(){
            $scope.signupHide = true;
        }

        $scope.cancelClick2 = function(){
            $scope.signupHide = false;
        }

	}]);