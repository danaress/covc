
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
var feb = 0
var mar = 0
var apr = 0
var may = 0
var jun = 0
var jul = 0
for (i=0; i<returnData.data.length; i++){
    var d = new Date(returnData.data[i].AnnouncedOnDate);
    var mnth = d.getMonth()
    console.log(mnth)
    if(mnth == 3){
    $scope.jan = ($scope.jan + Number(returnData.data[i].MoneyRaised.replace(/[^0-9\.]+/g,"")))
    console.log($scope.jan)
    }else{
        console.log("not jan")
    }
}

$scope.getchart()
            })}

$scope.getchart = function(){
var ctx = document.getElementById("myChart");
var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July",],
    datasets: [
        {
            label: "Anual Growth",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [$scope.jan, $scope.jan],
            spanGaps: false,
        }
    ]
};

var myLineChart = new Chart(ctx, {
    type: 'line',
    data: data
});

}

$scope.getinfo()

}])