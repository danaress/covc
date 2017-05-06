
angular.module('myApp', [])
	.controller('metricController', ['$scope', '$http', function($scope, $http){

        $scope.getinfo = function(){
            console.log("get info")
            $http({ 
                method : 'POST',
                url    : '/getinfo'
            }).then(function(returnData){

                console.log(returnData.data)
                
$scope.jan = 0
$scope.feb = 0
$scope.mar = 0
$scope.apr = 0
$scope.may = 0
$scope.jun = 0
$scope.jul = 0
$scope.monthTotals = [["Month", "Total"]]
for (i=0; i<returnData.data.length; i++){
    var d = new Date(returnData.data[i].AnnouncedOnDate);
    var mnth = d.getMonth()
    var year = d.getFullYear()
    var monthYear = (mnth + "/" + year)
    console.log($scope.monthTotals.includes(monthYear))

    // for (i=0; i<$scope.monthTotals.length; i++){
    // console.log('cee')

    if($scope.monthTotals[i].includes(monthYear)){
        console.log("in there")
    } else{
        console.log('gg')
        var newarray = []
        newarray.push([monthYear])
        $scope.monthTotals.push(newarray)
    }
// }



// function entry(monthyear, totalmoney) {
//     this.firstName = monthyear;
//     this.lastName = totalmoney;
// }
// var january = new person("0/2016", "100000");







    // switch (new Date(d).getMonth()){
    //     case 0:
    //     $scope.jan = ($scope.jan + Number(returnData.data[i].MoneyRaised.replace(/[^0-9\.]+/g,"")));
    //     break;

    //     case 1:
    //     $scope.feb = ($scope.feb + Number(returnData.data[i].MoneyRaised.replace(/[^0-9\.]+/g,"")));
    //     break;

    //     case 2:
    //     $scope.mar = ($scope.mar + Number(returnData.data[i].MoneyRaised.replace(/[^0-9\.]+/g,"")));
    //     break;

    //     case 3:
    //     $scope.apr = ($scope.apr + Number(returnData.data[i].MoneyRaised.replace(/[^0-9\.]+/g,"")));
    //     break;

    //     case 4:
    //     $scope.may = ($scope.may + Number(returnData.data[i].MoneyRaised.replace(/[^0-9\.]+/g,"")));
    //     break;

    //     case 5:
    //     $scope.jun = ($scope.jun + Number(returnData.data[i].MoneyRaised.replace(/[^0-9\.]+/g,"")));
    //     break;

    //     case 6:
    //     $scope.jul = ($scope.jul + Number(returnData.data[i].MoneyRaised.replace(/[^0-9\.]+/g,"")));
    //     break;
    // }

    // if(mnth == 3){
    // $scope.jan = ($scope.jan + Number(returnData.data[i].MoneyRaised.replace(/[^0-9\.]+/g,"")))
    // }else{
    //     console.log("not jan")
    // }
    $scope.janMil = Math.round($scope.jan/1000000)
    $scope.febMil = Math.round($scope.feb/1000000)
    $scope.marMil = Math.round($scope.mar/1000000)
    $scope.aprMil = Math.round($scope.apr/1000000)
    $scope.mayMil = Math.round($scope.may/1000000)
    $scope.junMil = Math.round($scope.jun/1000000)
    $scope.julMil = Math.round($scope.jul/1000000)


}
console.log("total = "+$scope.monthTotals)

// create chart here

            })}




}])