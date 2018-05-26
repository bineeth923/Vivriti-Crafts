var app = angular.module('beer_search' , []);

app.controller('myCntrl' , function ($scope , $http) {
    $scope.suggestion = function () {
            $scope.searching = true;
            if($scope.beerTitle !== "") {
                $http({
                    method: "GET",
                    url: 'http://starlord.hackerearth.com/beercraft'
                }).then(function (response) {
                    $scope.data = response.data;
                });
            }
            else{
                $scope.data = "";
            }
    };
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
    }
});

