app.controller('HistoryCtrl',['$scope', '$animate', '$http', '$window', 'user', function ($scope, $animate, $http, $window, user) {
  console.log('HistoryCtrl called', user);
  $scope.user = user.data;

  $scope.lastWatched = function(d1){
      var startDate = new Date(d1);
      console.log(d1);
      var endDate = new Date();
      var diffMs = (endDate - startDate); // milliseconds between now & Christmas
      var diffDays = Math.round(diffMs / 86400000); // days
      var diffHrs = Math.round((diffMs % 86400000) / 3600000); // hours
      var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
      // console.log(diff_minutes(endDate, startDate));
      console.log(endDate - startDate);
      return diffMins;
    }
}]);
