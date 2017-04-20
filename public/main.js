// angular.module('myApp', ['smart-table'])

// angular.module('myApp').factory('userData', function(){
//     return {}
//     })


angular.module('myApp', ['smart-table'])
	.controller('mainController', ['$scope', '$http', function($scope, $http){



        $scope.test = function(){
            console.log("test")
            $http({ 
                method : 'POST',
                url    : '/test'
            }).then(function(returnData){
                if ( returnData.data.success ) { window.location.href="/" }
            })
        }

        $scope.CBtest = function(){
            console.log("CB Test")
            $http({ 
                method : 'POST',
                url    : '/metrics'
            }).then(function(cb){
                if ( cb.data.success ) { console.log(cb.data) }
            })
        }

        $scope.uploadFile = function(){
            console.log($scope.myFile)
        }

        $scope.test2 = function(){
            console.log("test2")
            $http({ 
                method : 'POST',
                url    : '/test2'
            }).then(function(returnData){
                console.log(returnData.data[0].AnnouncedOnDate)


var fundingArray = returnData.data.sort(function(a,b) { 
    return new Date(b.AnnouncedOnDate).getTime() - new Date(a.AnnouncedOnDate).getTime() 
});
console.log(fundingArray)

$scope.rowCollection = [];
$scope.recentCollection = [];

for (i=0; i<5; i++){
    $scope.recentCollection.push({firstName: fundingArray[i].CompanyName, coUrl: fundingArray[i].CompanyNameURL, lastName: 'Raised a', birthDate: fundingArray[i].MoneyRaised, balance: fundingArray[i].FundingType, email: fundingArray[i].TransactionNameURL, date: fundingArray[i].AnnouncedOnDate, location: fundingArray[i].Location})
}

for (i=5; i<fundingArray.length; i++){
    $scope.rowCollection.push({firstName: fundingArray[i].CompanyName, coUrl: fundingArray[i].CompanyNameURL, lastName: 'Raised a', birthDate: fundingArray[i].MoneyRaised, balance: fundingArray[i].FundingType, email: fundingArray[i].TransactionNameURL, date: fundingArray[i].AnnouncedOnDate, location: fundingArray[i].Location})
}

            })
        }

$scope.test2()
// end
}])