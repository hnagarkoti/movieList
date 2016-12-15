app.controller('HistoryCtrl',['$scope', '$animate', '$http', '$window', 'user', function ($scope, $animate, $http, $window, user) {
  console.log('HistoryCtrl called', user);
  $scope.user = user.data;

  $scope.lastSeen = function(d1){
    var startDate = new Date(d1);
    var endDate = new Date();
    console.log(diff_minutes(endDate, startDate));

    return diff_minutes(endDate, startDate);
    }

    $scope.diff_minutes = function(dt2, dt1)
     {

      var diff =(dt2.getTime() - dt1.getTime()) / 1000;
      diff /= 60;
      return Math.abs(Math.round(diff));
     }
}]);
